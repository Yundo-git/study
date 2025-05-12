import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata: Metadata = {
  title: "awesome-food-store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
