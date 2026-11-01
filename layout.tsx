import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "กฐินทาน 2569",
  description: "เว็บไซต์กฐินทาน 2569"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
