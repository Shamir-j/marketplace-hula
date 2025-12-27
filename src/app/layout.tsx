import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hula Market - Spend less. Smile More | East Africa's Online Marketplace",
  description: "Shop thousands of products on Hula Market, East Africa's trusted e-commerce platform. Find great deals, fast shipping, and secure checkout. Sell with us and grow your business. Spend less. Smile More.",
  keywords: "online shopping, e-commerce, Kenya, Uganda, Tanzania, Rwanda, buy online, sell online, marketplace",
  authors: [{ name: "Continuum Technologies", url: "https://continuumtech.co" }],
  creator: "Continuum Technologies",
  publisher: "Hula Market",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hulamarket.co.ke",
    siteName: "Hula Market",
    title: "Hula Market - East Africa's Leading Online Marketplace",
    description: "Shop and sell on East Africa's most trusted e-commerce platform. Great deals, fast shipping, secure payments.",
    images: [
      {
        url: "https://hulamarket.co.ke/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hula Market - Online Shopping in East Africa",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hula Market - East Africa's Online Marketplace",
    description: "Buy and sell on Hula Market. Trusted by thousands of customers across Kenya, Uganda, Tanzania, and Rwanda.",
    images: ["https://hulamarket.co.ke/og-image.png"],
    creator: "@HulaMarket",
  },
  alternates: {
    canonical: "https://hulamarket.co.ke",
  },
  verification: {
    google: "google-site-verification-code",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hula Market",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <MUIThemeProvider> */}
          <Header />
          {children}
          <Footer />
        {/* </MUIThemeProvider> */}
      </body>
    </html>
  );
}
