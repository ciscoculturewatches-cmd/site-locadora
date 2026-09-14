import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-kovi-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// Kovi's proprietary brand face, self-hosted from public/sites/www-kovi-com-br-a550a92b/shared/fonts.
const dottiesVanilla = localFont({
  variable: "--font-kovi-title",
  display: "swap",
  src: [
    {
      path: "../../public/sites/www-kovi-com-br-a550a92b/shared/fonts/DottiesVanilla-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/www-kovi-com-br-a550a92b/shared/fonts/DottiesVanilla-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/sites/www-kovi-com-br-a550a92b/shared/fonts/DottiesVanilla-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/sites/www-kovi-com-br-a550a92b/shared/fonts/DottiesVanilla-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Aluguel de Carro para App em Belo Horizonte | Kovi",
  description:
    "Aluguel de carros em Belo Horizonte para motoristas de aplicativo. Conheça os planos Kovi e comece a dirigir.",
  openGraph: {
    title: "Aluguel de Carro para App em Belo Horizonte | Kovi",
  },
  icons: {
    icon: "/sites/www-kovi-com-br-a550a92b/shared/favicon.png",
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
      className={`${roboto.variable} ${dottiesVanilla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
