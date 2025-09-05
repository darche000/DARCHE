import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DARCHE",
  description: "Architecture, Design & Research Portfolio by Darius Chen",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Using system fonts - no preload needed */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
