import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Strixora Labs — Technology & Innovation",
    template: "%s | Strixora Labs",
  },
  description:
    "Strixora Labs delivers full-stack software development, AI solutions, team augmentation, and consultancy across Healthtech, Edtech, Fintech, Martech, and Greentech.",
  keywords: [
    "software development",
    "AI solutions",
    "team augmentation",
    "consultancy",
    "automation",
    "healthtech",
    "edtech",
    "fintech",
    "martech",
    "greentech",
    "technology company",
  ],
  authors: [{ name: "Strixora Labs" }],
  creator: "Strixora Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strixoralabs.com",
    title: "Strixora Labs — Technology & Innovation",
    description:
      "Building intelligent systems that drive growth, efficiency, and real-world impact.",
    siteName: "Strixora Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strixora Labs — Technology & Innovation",
    description:
      "Building intelligent systems that drive growth, efficiency, and real-world impact.",
    creator: "@strixoralabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
