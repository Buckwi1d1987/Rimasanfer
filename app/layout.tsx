import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rimasanfer.com"),
  title: "Rimasanfer Ltd | Embedded Business Management & Growth Execution",
  description:
    "Rimasanfer Ltd provides embedded business management, commercial execution, and growth strategy support for leadership teams that need senior hands-on execution.",
  keywords: [
    "business management consulting",
    "business development consulting",
    "growth strategy",
    "commercial execution",
    "embedded consulting",
    "Rimasanfer"
  ],
  openGraph: {
    type: "website",
    url: "https://www.rimasanfer.com",
    title: "Rimasanfer Ltd | Embedded Business Management & Growth Execution",
    description:
      "Boutique consulting firm delivering hands-on support across business management, commercial execution, and growth strategy.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rimasanfer Ltd"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimasanfer Ltd | Embedded Business Management & Growth Execution",
    description:
      "Boutique consulting firm delivering hands-on support across business management, commercial execution, and growth strategy.",
    images: ["/opengraph-image"]
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
