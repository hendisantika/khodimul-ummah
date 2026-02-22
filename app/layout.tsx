import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khodimul Ummah - Penempatan Pekerja Migran Indonesia",
  description:
    "PT. Khodimul Ummah adalah Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) resmi yang melayani pengiriman TKI ke Arab Saudi, Dubai & Qatar. Profesional, amanah, dan berpengalaman.",
  keywords:
    "TKI, pekerja migran, P3MI, Arab Saudi, Dubai, Qatar, tenaga kerja Indonesia, Khodimul Ummah",
  openGraph: {
    title: "Khodimul Ummah - Penempatan Pekerja Migran Indonesia",
    description:
      "Mitra terpercaya penempatan tenaga kerja Indonesia ke Arab Saudi, Dubai & Qatar.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
