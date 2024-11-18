import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation/navbar";

export const metadata: Metadata = {
  title: "Snacktalk",
  description: "Talk about your snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
