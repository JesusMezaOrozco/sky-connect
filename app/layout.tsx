import type { Metadata } from "next";
import { gotham_black, inter } from "@/fonts";

import "./globals.css";
import { StoreProvider } from "@/providers/Store";

export const metadata: Metadata = {
  title: "Sky Connect",
  description: "Sky Connect By Alfred",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${gotham_black.className}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
