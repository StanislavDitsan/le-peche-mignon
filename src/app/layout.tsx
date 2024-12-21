"use client"; // Make this a client-side component

import { useEffect } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Lora } from "next/font/google";
import { Inter } from "next/font/google";

// Importing Lora and Inter fonts
const lora = Lora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
          h3 {
            font-family: ${lora.style.fontFamily};
          }
          p,
          a {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
