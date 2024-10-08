import type { Metadata } from "next";
import { Hammersmith_One } from 'next/font/google';
import "./globals.css";
import Head from "next/head";

const hammersmithOne = Hammersmith_One({
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
       <link rel="svg" href="/icon.svg" sizes="any" />
      </Head>
      <body className={hammersmithOne.className}>
        {children}
      </body>
    </html>
  );
}

