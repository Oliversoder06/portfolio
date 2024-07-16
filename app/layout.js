import { Inter } from "next/font/google";
import "./globals.css";
import "./css/scrollbar.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliver's Portfolio",
  description: "My name is Oliver and I'm a full-stack developer. Welcome to my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-t from-[#111111] to-[#0B0C10] scrollbar`}>{children}</body>
    </html>
  );
}
