import type { Metadata } from "next";
import { /*Geist, Geist_Mono, */Montserrat, Anton, Hind } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import "./fonts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "./components/BootstrapClient";

// Font awesome pata de cabra!
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: "400"
});

const hindSans = Hind({
  variable: "--font-hind-sans",
  subsets: ["latin"],
  weight: "400"
});

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Challenge Sports - 3v3 at it's best",
  description: "Description of the website",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />        
      </head>
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
