import type { ReactNode } from "react";
import type { Metadata } from "next";
import { nepalContent } from "@/content/nepal-content";
import { getDirection } from "@/lib/direction";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: nepalContent.brand.name,
    template: `%s | ${nepalContent.brand.name}`,
  },
  description: nepalContent.seo.homeDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html dir={getDirection()} lang="en">
      <body>{children}</body>
    </html>
  );
}
