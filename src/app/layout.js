import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Padmasree Kunigiri Portfolio",
  description: "Padmasree Kunigiri Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
