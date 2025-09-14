"use client"; // Make this a client-side component

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import "./globals.css";
import { Lora } from "next/font/google";
import { Open_Sans } from "next/font/google";
import LenisProvider from "./components/LenisProvider";

const lora = Lora({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Check for the dark mode preference on page load
    const storedTheme = localStorage.getItem("color-theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Dynamically import Flowbite JS for client-side execution
    import("flowbite").catch((err) =>
      console.error("Flowbite failed to load", err)
    );
  }, []);

  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Restaurant Bishop’s Stortford & Highbury’s Ronalds Road - Le Peche Mignon is a top-rated restaurant, café, and food store. Enjoy specialty coffee, fresh food, brunch, and a cozy atmosphere at the best restaurants in Bishop’s Stortford and Highbury."
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N6P10J8D5K"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N6P10J8D5K');
  `}
        </Script>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Dark mode preference script */}

        {/* Apply Lora font globally to h1, h2 and Inter font to paragraphs */}
        <style jsx global>{`
          h1,
          h2,
          h3,
          a {
            font-family: ${lora.style.fontFamily};
          }
          p {
            font-family: ${open_sans.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="antialiased dark:bg-gray-900">
        {/* <NavBar /> */}
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
