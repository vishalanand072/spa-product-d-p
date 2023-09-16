import "@/styles/globals.css";
import * as React from "react";
import { Roboto } from "next/font/google";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Layout from "@/components/layout/layout";

const helvetica = localFont({
  src: [
    {
      path: "../public/font/HelveticaNowText/HelveticaNowText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowText/HelveticaNowText-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  style: ["normal", "italic"],
  display: "swap",
  weight: ["400", "700", "900"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider
      className={`${roboto.variable} ${helvetica.variable} font-sans px-0 mx-0`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
