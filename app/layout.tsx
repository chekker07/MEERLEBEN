import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEERLEBEN – Auswandern nach Spanien mit Full-Service Begleitung",
  description: "MEERLEBEN begleitet Ihren Weg von Deutschland nach Spanien: Immobilien, Dokumente, Organisation und Ankommen – persönlich, sicher und aus einer Hand.",
  keywords: ["Auswandern nach Spanien", "Immobilie in Spanien kaufen", "Relocation Spanien", "Auswanderungsservice Spanien", "Leben am Meer Spanien"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
