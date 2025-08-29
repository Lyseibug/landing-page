import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Common/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}