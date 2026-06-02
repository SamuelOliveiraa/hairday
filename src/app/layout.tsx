import { Metadata } from "next";
import "./globals.css";
import { Catamaran } from "next/font/google";

const catamaran = Catamaran({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "HairDay | Agendamento Online de Barbearia",
  description:
    "Gerencie e agende seus horários de cortes de cabelo e barba de forma rápida, simples e online no HairDay.",
  robots: "index, follow",
  openGraph: {
    title: "HairDay | Agendamento Online de Barbearia",
    description:
      "Gerencie e agende seus horários de cortes de cabelo e barba de forma rápida, simples e online.",
    url: "http://localhost:3000/", // Substitua pelo domínio real quando fizer o deploy
    siteName: "HairDay",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painel de Agendamentos HairDay"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={
          catamaran.className +
          " min-h-full flex flex-col bg-gray-800 text-gray-100"
        }
      >
        {children}
      </body>
    </html>
  );
}
