import type { Metadata } from "next";
import { gotham_black, inter } from "@/fonts";
import { StoreProvider } from "@/providers/Store";
import Loader from "@/components/shared/loader/Loader";
import Toaster from "@/components/shared/toaster/Toaster";
import "./globals.css";

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
      <body
        className={`${inter.className} ${gotham_black.className} main-background h-screen`}
      >
        <StoreProvider>
          {children}
          <Loader />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
