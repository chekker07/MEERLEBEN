"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const phases = [
  "Der Traum ist längst da. Nur der Weg fühlt sich groß an.",
  "Wir machen aus Auswandern keinen Sprung ins Ungewisse, sondern einen klaren Ablauf.",
  "Immobilie, Dokumente, Termine, Ansprechpartner – alles aus einer Hand.",
  "Aus Fernweh wird Zuhause.",
];

export function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "+=3200", scrub: 1, pin: true } });
    tl.to(".rain", { opacity: 0, duration: 1.5, ease: "power1.out" }, 0)
      .to(".cold-sky", { opacity: 0, duration: 1.9, ease: "power1.inOut" }, .15)
      .to(".story-sun", { y: -130, opacity: 1, scale: 1.12, duration: 1.8, ease: "power2.out" }, .3)
      // Das Haus bleibt fest verankert; nur Farben und Materialien wandeln sich.
      .to(".house-wall", { fill: "#fffaf0", duration: 1.6, ease: "power1.inOut" }, .55)
      .to(".house-roof", { fill: "#0D2F5A", duration: 1.6, ease: "power1.inOut" }, .55)
      .to(".house-door", { fill: "#b87955", duration: 1.4, ease: "power1.inOut" }, .7)
      .to(".house-window", { fill: "#8fd1ed", stroke: "#0D2F5A", duration: 1.5, ease: "power1.inOut" }, .65)
      .to(".house-window-lines", { stroke: "#0D2F5A", duration: 1.5, ease: "power1.inOut" }, .65)
      .to(".coast", { opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut" }, .65)
      .to(".story-wave", { xPercent: 20, duration: 2.2, ease: "none" }, .65);
    phases.forEach((_, i) => {
      if (!i) return;
      tl.to(`.phase-${i-1}`, { opacity: 0, y: -20, duration: .25 }, i * .72)
        .fromTo(`.phase-${i}`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .35 }, i * .72 + .1)
        .to(`.story-progress-${i-1}`, { backgroundColor: "rgba(255,255,255,.25)", duration: .2 }, i * .72 + .1)
        .to(`.story-progress-${i}`, { backgroundColor: "#F2B941", duration: .2 }, i * .72 + .1);
    });
  }, { scope: root });

  return (
    <section id="story" ref={root} className="relative h-screen min-h-[700px] overflow-hidden bg-[#788695] text-white">
      <div className="cold-sky absolute inset-0 z-[1] bg-gradient-to-b from-[#606b76] via-[#89949c] to-[#b8b4a9]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#8ec9ee] via-[#f7d89b] to-[#e7c899]" />
      <div className="story-sun absolute left-[63%] top-[25%] z-[2] size-28 translate-y-24 rounded-full bg-gold opacity-0 shadow-[0_0_100px_50px_rgba(242,185,65,.35)] md:size-40" />
      <div className="rain absolute inset-0 z-[8] opacity-50" style={{backgroundImage:"repeating-linear-gradient(105deg, transparent 0 30px, rgba(255,255,255,.4) 31px, transparent 32px 62px)",backgroundSize:"80px 120px"}} />
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 z-[3] size-full" aria-hidden="true">
        <path d="M0 655h1600v245H0z" fill="#4f5a60"/>
        <g className="coast opacity-0 translate-y-16">
          <path d="M0 650c290-70 510-56 747 22 253 83 519 11 853-64v292H0z" fill="#4e9fd4"/><path d="M0 711c286-60 516-20 742 43 250 70 532 8 858-71v217H0z" fill="#277fc0"/><path d="M0 791c342-74 573 25 874-4 271-27 494-30 726-6v119H0z" fill="#e8d4ae"/>
        </g>
        <g className="story-house">
          <path className="house-wall" d="m275 630 230-180 230 180v205H275z" fill="#a8a7a1"/>
          <path className="house-roof" d="m238 644 267-224 271 224-40 42-231-190-229 190z" fill="#424950"/>
          <rect className="house-door" x="415" y="651" width="94" height="184" rx="3" fill="#4b4e52"/>
          <rect className="house-window" x="570" y="623" width="92" height="77" rx="3" fill="#71808a" stroke="#4b535a" strokeWidth="9"/>
          <path className="house-window-lines" d="M616 623v77M570 661.5h92" fill="none" stroke="#4b535a" strokeWidth="6"/>
        </g>
        <path className="story-wave" d="M-400 802c300-120 602-100 848-34 266 72 467 75 717 9 230-61 444-50 694 22" fill="none" stroke="rgba(255,255,255,.88)" strokeWidth="14" strokeLinecap="round"/>
      </svg>
      <div className="shell relative z-10 flex h-full items-start pt-6 sm:pt-8 lg:pt-10">
        <div className="w-full max-w-[640px] rounded-3xl border border-white/20 bg-navy/70 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[.25em] text-gold">Ihre Reise · Unser Plan</p>
          <div className="relative min-h-[9rem] sm:min-h-[8rem]">
            {phases.map((text,i)=><p key={text} className={`phase-${i} absolute inset-0 w-full max-w-[24ch] text-[clamp(1.45rem,3.8vw,2.35rem)] font-medium leading-[1.12] tracking-[-.03em] text-balance ${i ? 'opacity-0' : ''}`}>{text}</p>)}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2" aria-hidden="true">{phases.map((_,i)=><span key={i} className={`story-progress-${i} h-1 rounded-full ${i === 0 ? "bg-gold" : "bg-white/25"}`}/>)}</div>
        </div>
      </div>
    </section>
  );
}
