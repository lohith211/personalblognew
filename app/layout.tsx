import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tunis - Personal Portfolio",
  description:
    "Personal portfolio website showcasing web design and development work",
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
