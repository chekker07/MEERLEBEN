"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} className="absolute inset-x-0 top-0 z-50">
      <div className="shell flex h-24 items-center justify-between">
        <BrandMark />
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {[['Leistungen','#leistungen'],['Ablauf','#ablauf'],['Über uns','#vertrauen']].map(([label,href]) => <a key={href} href={href} className="text-xs font-bold uppercase tracking-[.14em] text-navy/70 transition hover:text-ocean">{label}</a>)}
        </nav>
        <a href="#kontakt" className="button-primary hidden lg:inline-flex">Erstgespräch <ArrowUpRight size={17}/></a>
        <a href="#kontakt" aria-label="Zum Kontakt" className="flex size-11 items-center justify-center rounded-full border border-navy/15 bg-white/60 lg:hidden"><Menu size={20}/></a>
      </div>
    </motion.header>
  );
}
