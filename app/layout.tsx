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

const BASE_URL = "https://strixoralabs.com";
const OG_IMAGE = `${BASE_URL}/opengraph-image`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Strixora Labs — We build software your competitors can't replicate.",
    template: "%s | Strixora Labs",
  },
  description:
    "Senior-only software engineers. We build production systems for Fintech, Healthtech, Edtech, Martech, and Greentech. Compliance by design. Outcomes guaranteed.",
  keywords: [
    "software development agency",
    "senior software engineers",
    "fintech development",
    "healthtech software",
    "edtech platform development",
    "AI solutions",
    "team augmentation",
    "technology consultancy",
    "HIPAA compliant software",
    "PCI-DSS development",
    "London software company",
    "full-stack development",
  ],
  authors: [{ name: "Strixora Labs", url: BASE_URL }],
  creator: "Strixora Labs",
  publisher: "Strixora Labs",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Strixora Labs",
    title: "Strixora Labs — We build software your competitors can't replicate.",
    description:
      "Senior-only engineers. Regulated industries. We build production systems that hold up to auditors, investors, and real users.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Strixora Labs — Senior-only software engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@strixoralabs",
    creator: "@strixoralabs",
    title: "Strixora Labs — We build software your competitors can't replicate.",
    description:
      "Senior-only engineers. Regulated industries. Production-grade delivery.",
    images: [OG_IMAGE],
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080810" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
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
