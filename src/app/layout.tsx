import type { Metadata } from "next";
import "./global.css";

// Font
import { Poppins } from "next/font/google";

// Images
import bg from "../assets/img/astronomia-do-ceu-noturno-galactico-e-ciencia-combinaram-ia-generativa.jpg";

// Components
import Navbar from "@/components/navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delivery SpaceX",
  description: "Delivery System Earth to Mars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
