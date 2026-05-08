import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PetCare — Cuidado Premium para tu Mascota",
  description: "Servicios premium de cuidado de mascotas. Alojamiento, paseos y visitas personalizadas con el estándar más alto de calidad.",
  openGraph: {
    title: "PetCare — Cuidado Premium para tu Mascota",
    description: "Servicios premium de cuidado de mascotas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F2E9] text-[#3D3D3D]">
        {children}
      </body>
    </html>
  );
}
