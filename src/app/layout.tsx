import type { Metadata } from "next";
import "./globals.css";
import Outlet from "./outlet";

export const metadata: Metadata = {
  title: "Gym Landing Page",
  description: "Gym landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Outlet>{children}</Outlet>
      </body>
    </html>
  );
}
