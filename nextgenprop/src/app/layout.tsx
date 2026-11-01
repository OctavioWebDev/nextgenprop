import type { Metadata } from "next";
import { Alice } from 'next/font/google';
import "./globals.css";

const alice = Alice({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Next Generation Properties",
  description: "Commercial property maintenance, restoration, mitigation, remodeling and repair in Toledo, Ohio. Next Generation Properties, founded in 2016.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alice.className}>
        {children}
      </body>
    </html>
  );
}