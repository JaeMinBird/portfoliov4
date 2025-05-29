import type { Metadata } from "next";
import { Black_Han_Sans, Fredoka } from "next/font/google";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  weight: "400", // Black Han Sans only comes in weight 400
  subsets: ["latin"],
  variable: "--font-black-han-sans",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Jae's Portfolio",
  description: "Jae(Min) Birdsall is a software engineer and researcher with experience in machine learning, full-stack development, and startup environments—solving real problems for real people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${blackHanSans.variable} ${fredoka.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Jae Bird" />
      </head>
      <body className="antialiased font-fredoka">
        {children}
      </body>
    </html>
  );
}