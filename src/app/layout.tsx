import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vijay Puchhadiya | Full-Stack MERN Developer",
  description:
    "Passionate Full Stack MERN Developer specializing in building scalable web applications and dynamic user interfaces using React.js, Next.js, Node.js, and Express.js. Experienced with MongoDB, MySQL, and PostgreSQL for efficient database solutions. I create responsive, high-performance web apps with clean, maintainable code. Let's collaborate and bring your ideas to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={montserrat.variable}>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
