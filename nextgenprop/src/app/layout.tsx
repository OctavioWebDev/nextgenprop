import type { Metadata } from "next";
import { Alice } from 'next/font/google';
import "./globals.css";
import Head from "next/head";

const alice = Alice({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Next Generation Properties",
  description: "A good person leaves an inheritance for their children’s children, but a sinner’s wealth is stored up for the righteous. Proverbs 13:22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/logos/NextGeneration/LgNPGLogo.png" sizes="500x500" type="image/png" />
      </Head>
      <body className={alice.className}>
        {children}
      </body>
    </html>
  );
}