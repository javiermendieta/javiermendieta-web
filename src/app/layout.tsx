import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Javier Mendieta | Consultor Gastronómico",
  description:
    "Con más de 25 años de experiencia en la industria gastronómica, transformá tu negocio con consultoría especializada. Auditorías operativas, gestión de delivery, capacitación y más.",
  keywords: [
    "consultor gastronómico",
    "auditoría operativa",
    "gestión de delivery",
    "capacitación personal",
    "consultoría restaurante",
    "Javier Mendieta",
  ],
  authors: [{ name: "Javier Mendieta" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Javier Mendieta | Consultor Gastronómico",
    description:
      "Transformá tu negocio gastronómico con +25 años de experiencia",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} antialiased bg-[#0a0a0a] text-foreground`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
