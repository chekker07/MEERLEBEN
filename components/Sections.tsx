"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Check, ClipboardCheck, Compass, FileText, Handshake, Home, KeyRound, Languages, MapPin, MoveRight, ShieldCheck, Sparkles, Sun, UserRound } from "lucide-react";

const pains = [
  [Building2,"Immobilie in Deutschland","Verkauf, Vermarktung und Übergabe gut vorbereitet."],
  [Home,"Zuhause in Spanien","Region, Lage und Immobilie passend zu Ihrem Leben."],
  [FileText,"Dokumente & Behörden","Verstehen, vorbereiten und zum richtigen Zeitpunkt erledigen."],
  [Languages,"Koordination vor Ort","Sprache, Termine und Ansprechpartner ohne Reibungsverlust."],
  [ShieldCheck,"Fragen sicher sortieren","Rechtliche, steuerliche und organisatorische Themen im Blick."],
  [MoveRight,"Umzug & Ankommen","Vom Transport bis zur Anmeldung sinnvoll geplant."],
];
const services = [
  ["01","Planung & Strategie",["Persönliche Zielklärung","Budget und Zeitplan","Passende Regionenauswahl"]],
  ["02","Immobilie in Deutschland",["Vermarktung vorbereiten","Makler koordinieren","Dokumente prüfen"]],
  ["03","Immobiliensuche in Spanien",["Suchprofil und Vorauswahl","Besichtigungen","Kaufbegleitung"]],
  ["04","Dokumente & Behörden",["NIE, Konto, Versicherungen","Übersetzungen und Termine","Lokale Experten"]],
  ["05","Ankommen",["Umzug und Einrichtung","Lokale Kontakte","Begleitung nach dem Kauf"]],
];
const steps = ["Kennenlernen","Auswanderungsplan","Immobilienstrategie Deutschland","Suche & Prüfung in Spanien","Kauf, Dokumente & Abwicklung","Ankommen & Einleben"];

function Reveal({children,className=""}:{children:React.ReactNode,className?:string}) { return <motion.div initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.65}} className={className}>{children}</motion.div> }

export function Problem() { return <section className="bg-cream py-24 sm:py-32"><div className="shell"><Reveal><p className="eyebrow">Komplexität, die leichter wird</p><h2 className="section-title mt-5 max-w-4xl">Auswandern klingt wunderschön. <span className="text-ink/35">Bis die Organisation beginnt.</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65">Sie müssen nicht alles selbst wissen. Sie brauchen einen Weg, auf dem die richtigen Dinge in der richtigen Reihenfolge passieren.</p></Reveal><div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/10 md:grid-cols-2 lg:grid-cols-3">{pains.map(([Icon,title,text],i)=>{const I=Icon as typeof Home;return <motion.article key={title as string} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*.06}} className="group bg-white p-7 transition hover:bg-[#fafdff] sm:p-9"><I className="text-ocean transition group-hover:-translate-y-1" size={26}/><h3 className="mt-8 text-lg font-bold text-navy">{title as string}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{text as string}</p></motion.article>})}</div></div></section> }

export function Services() { return <section id="leistungen" className="bg-navy py-24 text-white sm:py-32"><div className="shell"><Reveal className="grid gap-8 lg:grid-cols-2"><div><p className="eyebrow !text-gold">Full-Service bedeutet: Überblick</p><h2 className="section-title mt-5 !text-white">Ein Ansprechpartner für Ihren kompletten Weg nach Spanien.</h2></div><p className="max-w-xl self-end text-lg leading-8 text-white/60">Wir halten die Fäden zusammen – persönlich, transparent und mit einem verlässlichen Netzwerk in beiden Ländern.</p></Reveal><div className="mt-16 border-t border-white/15">{services.map(([num,title,items],i)=><motion.article key={title as string} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-80px"}} className="group grid gap-5 border-b border-white/15 py-8 transition md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:py-10"><span className="text-xs font-bold tracking-[.2em] text-gold">{num as string}</span><h3 className="text-2xl font-medium tracking-[-.03em] sm:text-3xl">{title as string}</h3><ul className="space-y-2 text-sm text-white/55">{(items as string[]).map(x=><li key={x} className="flex gap-2"><Check size={15} className="mt-0.5 text-ocean"/>{x}</li>)}</ul><ArrowRight className="text-white/25 transition group-hover:translate-x-1 group-hover:text-gold"/></motion.article>)}</div></div></section> }

export function Process() { const section=useRef<HTMLElement>(null); const {scrollYProgress}=useScroll({target:section,offset:["start 75%","end 35%"]}); const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30}); return <section ref={section} id="ablauf" className="bg-white py-24 sm:py-32"><div className="shell"><Reveal><p className="eyebrow">Schritt für Schritt</p><h2 className="section-title mt-5 max-w-4xl">Vom ersten Wunsch bis zum <span className="text-ocean">Schlüssel in der Hand.</span></h2></Reveal><div className="relative mt-16 lg:mt-24"><div className="absolute bottom-0 left-5 top-0 w-px bg-navy/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-5 lg:h-px lg:w-auto"/><motion.div style={{scaleX,transformOrigin:"left"}} className="absolute left-0 right-0 top-5 hidden h-px bg-ocean lg:block"/><div className="grid gap-8 lg:grid-cols-6">{steps.map((step,i)=><Reveal key={step} className="relative flex gap-5 pl-1 lg:block lg:pl-0"><motion.span initial={{backgroundColor:"#fff",color:"#2F8DEB"}} whileInView={{backgroundColor:"#2F8DEB",color:"#fff",borderColor:"#2F8DEB"}} viewport={{amount:.8}} transition={{duration:.35}} className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-ocean/30 text-xs font-bold shadow-[0_0_0_7px_white]">{i+1}</motion.span><div className="lg:mt-7"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-ink/35">Phase {i+1}</p><h3 className="mt-2 text-base font-bold leading-6 text-navy">{step}</h3></div></Reveal>)}</div></div></div></section> }

export function Emotional() {
  return <section id="warum" className="relative min-h-[820px] overflow-hidden bg-[#d9edf5] py-24 sm:min-h-[880px] sm:py-32">
    <div className="absolute -right-24 top-10 size-[480px] rounded-full bg-[radial-gradient(circle_at_38%_35%,#FFE49C_0%,#F7C95E_36%,#F2B941_72%,#E6A726_100%)] opacity-95 shadow-[0_0_120px_35px_rgba(242,185,65,.2)] sm:size-[620px]"/>
    <div className="absolute inset-x-0 bottom-0 z-[1] h-[32%] bg-gradient-to-b from-ocean/10 via-ocean/60 to-ocean sm:h-[34%]"/>
    <svg viewBox="0 0 1600 380" className="absolute bottom-0 z-[2] h-auto w-[180%] max-w-none sm:w-full" aria-hidden="true">
      <path d="M0 115c300-115 555 72 830 3 320-80 490-62 770 8v254H0z" fill="#3D82C4"/>
      <path d="M0 173c330-73 531 72 848 0 303-69 483-38 752 14" fill="none" stroke="white" strokeOpacity=".55" strokeWidth="9"/>
    </svg>
    <div className="shell relative z-10">
      <Reveal>
        <p className="eyebrow">Ihr Warum</p>
        <h2 className="display mt-5 max-w-4xl">Nicht einfach auswandern. <span className="text-gold drop-shadow-[0_1px_0_rgba(13,47,90,.15)]">Mehr leben.</span></h2>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-navy/70">MEERLEBEN steht für den Moment, in dem ein lang gehegter Wunsch Wirklichkeit wird. Für ein Zuhause, das nicht nur eine Adresse ist, sondern ein neues Lebensgefühl.</p>
      </Reveal>
    </div>
  </section>
}

export function Trust() { const trust=[[UserRound,"Persönlicher Ansprechpartner"],[ClipboardCheck,"Transparenter Ablauf"],[MapPin,"Netzwerk in zwei Ländern"],[Handshake,"Koordination aus einer Hand"],[Sparkles,"Individuelle Begleitung"]]; return <section id="vertrauen" className="bg-cream py-24 sm:py-32"><div className="shell"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">Vertrauen entsteht durch Klarheit</p><h2 className="section-title mt-5">Sicherheit, bevor Sie entscheiden. Begleitung, bis Sie angekommen sind.</h2><p className="mt-7 text-lg leading-8 text-ink/60">Keine Standardlösung, sondern ein Plan, der zu Ihrer Situation, Ihrem Tempo und Ihrem Ziel passt.</p></Reveal><div className="grid gap-4 sm:grid-cols-2">{trust.map(([Icon,title],i)=>{const I=Icon as typeof Home;return <Reveal key={title as string} className={`${i===4?'sm:col-span-2':''} flex items-center gap-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_12px_35px_rgba(13,47,90,.04)]`}><span className="flex size-12 items-center justify-center rounded-full bg-ocean/10 text-ocean"><I size={22}/></span><h3 className="font-bold text-navy">{title as string}</h3></Reveal>})}</div></div></div></section> }

export function Audience() { return <section className="overflow-hidden bg-white py-24 sm:py-32"><div className="shell grid items-center gap-12 lg:grid-cols-2"><div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-navy"><div className="absolute inset-0 bg-gradient-to-br from-[#9dd7ef] via-[#f7d28a] to-[#efb76e]"/><Sun className="absolute right-[18%] top-[15%] text-gold" size={110} strokeWidth={1}/><div className="absolute -bottom-20 -left-16 h-72 w-[130%] rounded-[50%] bg-ocean"/><div className="absolute bottom-12 left-10 max-w-[250px] text-2xl font-medium leading-tight tracking-[-.03em] text-white">Mehr Sonne.<br/>Mehr Ruhe.<br/>Mehr Lebensqualität.</div></div><Reveal><p className="eyebrow">Für Menschen mit einem echten Plan</p><h2 className="section-title mt-5">Für Menschen, die wissen: Jetzt ist die Zeit.</h2><p className="mt-7 text-lg leading-8 text-ink/65">Ob Ruhestand, neuer Lebensabschnitt oder der Wunsch nach mehr Sonne, Ruhe und Lebensqualität – wir begleiten Menschen, die ihren Traum vom Leben am Meer nicht länger verschieben möchten.</p><a href="#kontakt" className="button-primary mt-9">Meinen Weg besprechen <ArrowRight size={17}/></a></Reveal></div></section> }
