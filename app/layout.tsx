import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";


const geistMono = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cognify Now",
  description: "CognifyNow doesn’t just teach, it thinks with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
