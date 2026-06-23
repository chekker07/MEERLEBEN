"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="grain relative min-h-[940px] overflow-hidden bg-cream pt-36 lg:min-h-screen lg:pt-40">
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-b from-transparent to-[#dcecf4]" />
      <div className="absolute -right-36 top-16 size-[520px] rounded-full bg-gold/20 blur-3xl lg:size-[720px]" />
      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl pb-6">
          <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="eyebrow mb-7">Full-Service Relocation · Deutschland → Spanien</motion.p>
          <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.22}} className="display">Ihr neues Leben am Meer beginnt mit einem <span className="text-ocean">Plan.</span></motion.h1>
          <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.38}} className="mt-7 max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">MEERLEBEN begleitet Ihren Weg von Deutschland nach Spanien – von der ersten Idee über Immobilien, Dokumente und Organisation bis zum Ankommen.</motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.5}} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="button-primary">Kostenloses Erstgespräch <ArrowUpRight size={18}/></a>
            <a href="#story" className="button-light">So funktioniert MEERLEBEN <ArrowDown size={17}/></a>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.75}} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-navy/60">
            {['Persönlich begleitet','Transparent geplant','Vor Ort vernetzt'].map(x=><span key={x} className="flex items-center gap-2"><Check size={14} className="text-ocean"/>{x}</span>)}
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:.96,y:25}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1,delay:.25}} className="relative mx-auto aspect-[4/5] w-full max-w-[590px] overflow-hidden rounded-[2.5rem] bg-[#cddae3] shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-b from-[#a8b8c5] via-[#d8d4c7] to-[#c4c6c3]" />
          <div className="sun-drift absolute right-[13%] top-[12%] size-28 rounded-full bg-gold/90 shadow-[0_0_100px_40px_rgba(242,185,65,.25)] sm:size-36" />
          <svg viewBox="0 0 600 760" className="absolute inset-0 size-full" role="img" aria-label="Vom grauen Alltag zum sonnigen Leben am Meer">
            <path d="M0 430c135-35 247-24 350 21 96 42 165 18 250-22v331H0Z" fill="#80b9d8"/>
            <path d="M0 480c130-30 246-10 347 24 93 32 172 23 253-17" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="8"/>
            <path d="M0 520c140-20 240 7 340 29 105 23 178 5 260-18v229H0Z" fill="#2F8DEB" fillOpacity=".7"/>
            <path d="M58 605c120-64 224-61 318-30 73 25 145 23 224 1v184H0Z" fill="#e6d3b2"/>
            <path d="M146 430V298l150-105 150 105v224H146Z" fill="#f7f1e5"/>
            <path d="M120 318 296 174l177 144-27 32-150-122-149 123Z" fill="#0D2F5A"/>
            <rect x="196" y="350" width="72" height="112" rx="4" fill="#b87955"/>
            <rect x="327" y="335" width="74" height="67" rx="3" fill="#8fc7e3" stroke="#0D2F5A" strokeWidth="8"/>
            <path d="M364 335v67M327 369h74" stroke="#0D2F5A" strokeWidth="5"/>
            <path d="M485 520c2-87 13-137 38-168M510 432c27-28 49-36 70-38M502 412c-10-32-26-49-45-61M514 393c21-30 38-43 58-51" fill="none" stroke="#376d60" strokeWidth="10" strokeLinecap="round"/>
          </svg>
          <div className="absolute bottom-7 left-7 rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-md sm:bottom-9 sm:left-9 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-ocean">Die neue Aussicht</p>
            <p className="mt-1 text-lg font-semibold text-navy">Mehr Leben. Mehr Zuhause.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
