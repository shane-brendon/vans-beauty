import { Inter } from "next/font/google";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { amiri } from "@/src/utils/fonts";
import { palanquin } from "@/src/utils/fonts";
import "./globals.css";
import "./globals.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>

      <body className={`${amiri.variable} ${palanquin.variable}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
