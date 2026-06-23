export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="MEERLEBEN Startseite"
      className="inline-flex shrink-0 items-center"
      data-testid="meerleben-logo"
    >
      {/* Das Original-Asset bleibt unverändert; der Wrapper blendet nur den großen weißen Rand aus. */}
      <span className="relative block h-[50px] w-[147px] overflow-hidden sm:h-[56px] sm:w-[166px]" role="img" aria-label="MEERLEBEN Logo">
        <img
          src="/meerleben-logo-transparent.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute left-[-27.2%] top-[-95%] h-auto w-[156.6%] max-w-none select-none ${light ? "brightness-150" : ""}`}
        />
      </span>
    </a>
  );
}
