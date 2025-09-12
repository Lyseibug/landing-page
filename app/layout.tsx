import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Common/Footer";
import type { Metadata } from "next";
import { BRAND_NAME } from "@/constants/content";
import {
  DEFAULT_SEO,
  SITE_URL,
  buildOpenGraph,
  buildTwitterCard,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/constants/seo";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  },
  title: {
    template: DEFAULT_SEO.titleTemplate,
    default: DEFAULT_SEO.defaultTitle,
  },
  description: DEFAULT_SEO.description,
  applicationName: BRAND_NAME,
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "ERP",
    "IT support",
    "custom software",
    "Lyseibug",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: buildOpenGraph({
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.description,
    url: SITE_URL,
  }),
  twitter: buildTwitterCard({
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.description,
  }),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@graph": [buildOrganizationJsonLd(), buildWebsiteJsonLd()],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
