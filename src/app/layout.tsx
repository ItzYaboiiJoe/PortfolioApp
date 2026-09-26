import type { Metadata } from "next";
import "../styles/globals.css";
import { Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Background from "@/components/Background";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Joseph Seoudy | Software Developer",
  description:
    "Portfolio of Joseph Seoudy, a software developer building modern web applications with React, Next.js, TypeScript, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", notoSans.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        <Background />

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
