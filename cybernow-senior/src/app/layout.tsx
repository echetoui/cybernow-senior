import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CyberNow Seniors | Cybersécurité pour les aînés au Québec",
    template: "%s | CyberNow Seniors"
  },
  description: "Services de cybersécurité adaptés aux aînés. Protection proactive, formation et support humain pour naviguer en ligne en toute sécurité.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernowseniors.ca'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
