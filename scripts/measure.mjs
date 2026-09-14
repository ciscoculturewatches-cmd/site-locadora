// Minimal Chrome DevTools Protocol driver: opens a headless Chrome, evaluates an
// expression in the page and prints the JSON result.
//
//   node scripts/measure.mjs <url> <width> <height> "<js expression>"
//
// Used for layout QA (measuring overflow, computed styles) without an MCP server.
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const [url, width = '390', height = '900', expression] = process.argv.slice(2);
const PORT = 9333;

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--remote-debugging-port=${PORT}`,
    `--window-size=${width},${height}`,
    '--user-data-dir=' + process.env.TEMP + '/cdp-profile',
    'about:blank',
  ],
  { stdio: 'ignore' }
);

async function getTargets() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error('Chrome did not expose a debugging target');
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    ws.addEventListener('open', () => resolve(ws));
    ws.addEventListener('error', reject);
  });
}

let nextId = 1;
function send(ws, method, params = {}) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id !== id) return;
      ws.removeEventListener('message', onMessage);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    };
    ws.addEventListener('message', onMessage);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

try {
  const target = await getTargets();
  const ws = await connect(target.webSocketDebuggerUrl);

  await send(ws, 'Page.enable');
  await send(ws, 'Runtime.enable');
  await send(ws, 'Emulation.setDeviceMetricsOverride', {
    width: Number(width),
    height: Number(height),
    deviceScaleFactor: 1,
    mobile: Number(width) < 700,
  });

  const loaded = new Promise((resolve) => {
    const onMessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Page.loadEventFired') {
        ws.removeEventListener('message', onMessage);
        resolve();
      }
    };
    ws.addEventListener('message', onMessage);
  });
  await send(ws, 'Page.navigate', { url });
  await loaded;
  await sleep(1200);

  if (expression.startsWith('shot:')) {
    const file = expression.slice('shot:'.length);
    const { data } = await send(ws, 'Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
    });
    const { writeFile } = await import('node:fs/promises');
    await writeFile(file, Buffer.from(data, 'base64'));
    console.log(`screenshot -> ${file}`);
  } else {
    const { result, exceptionDetails } = await send(ws, 'Runtime.evaluate', {
      expression: `JSON.stringify((() => { ${expression} })())`,
      returnByValue: true,
      awaitPromise: true,
    });
    if (exceptionDetails) {
      console.error('Page error:', JSON.stringify(exceptionDetails, null, 2));
      process.exitCode = 1;
    } else {
      console.log(JSON.stringify(JSON.parse(result.value), null, 2));
    }
  }
  ws.close();
} finally {
  chrome.kill();
}
