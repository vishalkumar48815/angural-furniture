import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

export const metadata: Metadata = {
  title: "Angural Furniture | Custom Furniture in Pathankot",
  description:
    "Premium custom furniture – Beds, Sofas, Wardrobes, Modular Kitchens & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-[#1F1F1F]">
        <Header />
        <FloatingWhatsApp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
