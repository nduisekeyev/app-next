import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>;

export default function RootLayout({
  children,
  analytics,
  team,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {team}
        {analytics}
      </body>
    </html>
  );
}
