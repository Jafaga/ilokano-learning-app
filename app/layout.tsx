import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Ilokano",
  description: "A Duolingo-inspired Ilokano learning web app built with Next.js.",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="app-shell">{children}</main>
      </body>
    </html>
  );
}
