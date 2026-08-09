import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faiz — Full Stack Developer",
  description:
    "Portfolio of Faiz — Full Stack Developer building modern, real-time and interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}