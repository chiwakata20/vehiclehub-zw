import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileBar } from "@/components/layout/MobileBar";

export const metadata: Metadata = {
  title: {default:"VehicleHub Zimbabwe",template:"%s | VehicleHub Zimbabwe"},
  description: "Browse trusted cars, SUVs, pickups and commercial vehicles for sale across Zimbabwe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased"><SiteHeader/><main>{children}</main><SiteFooter/><MobileBar/></body>
    </html>
  );
}
