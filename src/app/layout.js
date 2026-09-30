import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Padmasree Kunigiri Portfolio",
  description: "Padmasree Kunigiri Portfolio",
};

import Loader from "../components/Loader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
