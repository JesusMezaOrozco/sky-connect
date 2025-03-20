import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const gotham_black = localFont({
  src: "../fonts/Gotham_Black.otf",
  display: "swap",
  variable: "--font-gotham-black",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
