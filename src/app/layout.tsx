import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  applicationName: "Kate Crochet",
  title: {
    default: "Kate Crochet",
    template: "%s",
  },
  description: "Handmade crochet tops and cardigans in custom colors and sizes.",
  icons: {
    icon: [
      { url: "/icons/icon16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/icons/icon32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", GeistSans.variable, GeistMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
