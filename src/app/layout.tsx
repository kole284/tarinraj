import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarin Raj – Poljoprivredno gazdinstvo",
  description:
    "Tarin raj – porodično poljoprivredno gazdinstvo blizu sela Rudna Glava, Majdanpek. Plantaža borovnica u srcu istočne Srbije.",
  keywords: ["borovnice", "Rudna Glava", "Majdanpek", "Srbija", "gazdinstvo", "tarin raj"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}

