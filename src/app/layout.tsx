"use client";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body
        className={`font-poppins w-screen min-h-screen overflow-x-hidden bg-background ${poppins.className}`}
      >
        <ThemeProvider
          disableTransitionOnChange={false}
          defaultTheme="dark"
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
