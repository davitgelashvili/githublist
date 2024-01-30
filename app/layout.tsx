import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github User List",
  description: "github user search",
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
