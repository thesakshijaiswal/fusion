import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fusion | Make Impactful Designs Effortlessly",
  description:
    "Fusion is a streamlined interface built to explore what modern product design can feel like clean, fast, and purpose-driven.",
  keywords: [
    "Fusion design tool",
    "Next.js design app",
    "UI/UX design software",
    "Startup Grade UX",
    "SaaS Landing Page",
    "framer motion animations",
  ],
  authors: [{ name: "Sakshi Jaiswal" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fusion | Make Impactful Designs Effortlessly",
    description:
      "Fusion is a streamlined interface built to explore what modern product design can feel like clean, fast, and purpose-driven.",
    url: "https://fusion-dashboard-ten.vercel.app",
    siteName: "Fusion",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Fusion Design Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fusion | Make Impactful Designs Effortlessly",
    description:
      "Fusion is a streamlined interface built to explore what modern product design can feel like clean, fast, and purpose-driven.",
    images: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} px-2 antialiased`}>{children}</body>
    </html>
  );
}
