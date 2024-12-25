"use client"; // Make this a client-side component

import { useEffect } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Lora } from "next/font/google";
import { Open_Sans } from "next/font/google";

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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Dark mode preference script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('color-theme') === 'dark' || 
                  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        ></script>
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
