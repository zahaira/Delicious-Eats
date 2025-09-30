import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNavbar from "@/shared/layout/responsive-navbar";
import Footer from "@/shared/layout/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Delicious Eats",
    template: "%s - Delicious Eats",
  },
  description:
    "Experience exceptional dining at Delicious Eats. Indulge in gourmet dishes, refreshing beverages, and a warm atmosphere. Book your table today!",
  keywords: [
    "restaurant bruxelles",
    "fine dining",
    "cocktails",
    "gourmet food",
    "special dishes",
    "crepes",
    "desserts",
    "starters",
  ],
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ResponsiveNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
