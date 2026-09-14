import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-ejm-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// Condensed-ish grotesque, closest free match to the display face used on the
// EJM social pieces.
const archivo = Archivo({
  variable: "--font-ejm-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EJM Locações | Aluguel de carro para motorista de app em BH",
  description:
    "Aluguel semanal de carros para motorista de aplicativo em Belo Horizonte. A partir de R$650 por semana com seguro, manutenção, IPVA e troca de óleo inclusos.",
  openGraph: {
    title: "EJM Locações | Aluguel de carro para motorista de app em BH",
    description:
      "A partir de R$650 por semana, com seguro, manutenção, IPVA e troca de óleo inclusos. Chama no WhatsApp e pega o carro no mesmo dia.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/sites/ejm-locacoes/logo-ejm.png",
    apple: "/sites/ejm-locacoes/logo-ejm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${roboto.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
