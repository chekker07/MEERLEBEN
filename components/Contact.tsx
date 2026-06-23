"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, Check, Mail, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error("Die Anfrage konnte nicht gesendet werden.");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <>
    <section id="kontakt" className="bg-navy py-24 text-white sm:py-32"><div className="shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow !text-gold">Der erste Schritt ist ein Gespräch</p><h2 className="section-title mt-5 !text-white">Bereit für Ihr Meerleben?</h2><p className="mt-7 max-w-md text-lg leading-8 text-white/60">Lassen Sie uns gemeinsam prüfen, wie Ihr Weg nach Spanien aussehen kann. Unverbindlich, persönlich und ohne Verkaufsdruck.</p><div className="mt-10 space-y-4 text-sm text-white/70"><p className="flex items-center gap-3"><CalendarDays className="text-gold" size={19}/> 30 Minuten Orientierungsgespräch</p><p className="flex items-center gap-3"><Check className="text-gold" size={19}/> Klare nächste Schritte</p><p className="flex items-center gap-3"><Check className="text-gold" size={19}/> Kostenlos & unverbindlich</p></div></div><form className="relative rounded-4xl bg-white p-6 text-ink shadow-2xl sm:p-9" onSubmit={handleSubmit} aria-label="Kontaktformular"><div className="grid gap-5 sm:grid-cols-2">{[['name','Name','text','Ihr Name'],['email','E-Mail','email','name@beispiel.de'],['phone','Telefonnummer','tel','+49 …'],['region','Wunschregion','text','z. B. Costa Blanca']].map(([name,label,type,placeholder])=><label key={name} className="text-xs font-bold text-navy">{label}<input name={name} required={name==='name'||name==='email'} type={type} placeholder={placeholder} className="mt-2 h-13 w-full rounded-xl border border-navy/10 bg-cream px-4 text-sm font-normal outline-none transition focus:border-ocean"/></label>)}<label className="text-xs font-bold text-navy">Aktuelle Situation<select name="situation" className="mt-2 h-13 w-full rounded-xl border border-navy/10 bg-cream px-4 text-sm font-normal outline-none"><option>Erste Orientierung</option><option>Konkrete Planung</option><option>Immobiliensuche läuft</option></select></label><label className="text-xs font-bold text-navy">Zeitrahmen<select name="timeframe" className="mt-2 h-13 w-full rounded-xl border border-navy/10 bg-cream px-4 text-sm font-normal outline-none"><option>Noch offen</option><option>In 6–12 Monaten</option><option>In 1–2 Jahren</option></select></label><label className="text-xs font-bold text-navy sm:col-span-2">Nachricht<textarea name="message" rows={4} maxLength={3000} placeholder="Was dürfen wir über Ihren Wunsch wissen?" className="mt-2 w-full resize-none rounded-xl border border-navy/10 bg-cream p-4 text-sm font-normal outline-none transition focus:border-ocean"/></label></div><label className="absolute -left-[9999px]" aria-hidden="true">Firma<input name="company" tabIndex={-1} autoComplete="off"/></label><label className="mt-5 flex items-start gap-3 text-xs leading-5 text-ink/55"><input name="privacy" required type="checkbox" className="mt-1 accent-ocean"/>Ich stimme der Verarbeitung meiner Angaben gemäß Datenschutzerklärung zu.</label><button className="button-primary mt-7 w-full disabled:cursor-wait disabled:opacity-65" type="submit" disabled={status === "sending"}>{status === "sending" ? "Anfrage wird gesendet …" : "Kostenloses Erstgespräch anfragen"} {status !== "sending" && <ArrowRight size={17}/>}</button><div className="mt-4 min-h-6 text-center text-sm font-semibold" aria-live="polite">{status === "success" && <p className="text-emerald-700">Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.</p>}{status === "error" && <p className="text-red-700">Das hat leider nicht funktioniert. Bitte versuchen Sie es erneut.</p>}</div></form></div></section>
    <footer className="bg-[#082342] py-12 text-white"><div className="shell"><div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row"><div><BrandMark light/><p className="mt-5 max-w-sm text-sm leading-6 text-white/45">Full-Service Auswanderungs- und Immobilienbegleitung für Spanien.</p></div><div className="grid gap-8 text-sm sm:grid-cols-3"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">Kontakt</p><a className="mt-4 flex items-center gap-2 text-white/60 hover:text-white" href="mailto:hallo@leon-molina.com"><Mail size={15}/>hallo@leon-molina.com</a><a className="mt-2 flex items-center gap-2 text-white/60 hover:text-white" href="tel:+490000000"><Phone size={15}/>+49 000 000000</a></div><div><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">Information</p><a href="#leistungen" className="mt-4 block text-white/60 hover:text-white">Leistungen</a><a href="#ablauf" className="mt-2 block text-white/60 hover:text-white">Ablauf</a></div><div><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">Rechtliches</p><a href="#" className="mt-4 block text-white/60 hover:text-white">Impressum</a><a href="#" className="mt-2 block text-white/60 hover:text-white">Datenschutz</a></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[11px] uppercase tracking-[.14em] text-white/30 sm:flex-row"><p>© 2026 MEERLEBEN</p><p>Mehr Leben. Mehr Zuhause. Meerleben.</p></div></div></footer>
    <a href="#kontakt" className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center rounded-full bg-gold px-5 text-sm font-bold text-navy shadow-lift lg:hidden">Kostenloses Erstgespräch <ArrowRight className="ml-2" size={17}/></a>
    <a href="#kontakt" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 rotate-90 rounded-b-2xl bg-gold px-5 py-3 text-xs font-bold text-navy shadow-lg xl:block" style={{transformOrigin:"right top"}}>ERSTGESPRÄCH</a>
  </>;
}
