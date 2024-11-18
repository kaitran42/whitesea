import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <SpeedInsights />
      </body>
    </html>
  );
}
