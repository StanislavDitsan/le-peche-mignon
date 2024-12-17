"use client"; // Make this a client-side component

import { useEffect } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";

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
      </head>
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
