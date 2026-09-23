/**
 * Fondo ambiental compartido por toda la app (no solo el landing): grilla de
 * "mapa", un recorrido punteado que fluye despacio y un marcador GPS que
 * pulsa. Misma intención visual que HeroRoute (features/landing) — presente
 * en TODAS las pantallas (Consultar, Favoritos, Recorrido, Acerca...) para
 * que la app completa se sienta viva, no solo el landing.
 *
 * `fixed`: no agrega alto al documento y no se mueve con el scroll (la
 * sensación de "mapa de fondo" se rompe si scrollea con el contenido).
 * `z-0` en vez de negativo: un z-index negativo en un hijo directo de
 * <body> puede terminar pintando por detrás del background del propio
 * <body> en vez de encima — con z-0 y siendo el primer hijo del shell,
 * alcanza con el orden del DOM para quedar detrás de todo lo demás.
 * Colores atados a tokens (--foreground/--mdp-amarillo) para que ande bien
 * en claro y oscuro sin duplicar la paleta acá.
 */
export function AppAmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden motion-reduce:hidden"
    >
      {/* Grilla de calles */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--foreground) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(ellipse 100% 70% at 50% 0%, black 45%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 70% at 50% 0%, black 45%, transparent 90%)",
        }}
      />

      {/* Resplandores de marca — dan profundidad sin ser un degradé parejo */}
      <div className="absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full bg-amarillo/[0.16] blur-[100px] dark:bg-amarillo/[0.14]" />
      <div className="absolute -bottom-40 -left-24 h-[440px] w-[440px] rounded-full bg-secondary/[0.18] blur-[100px] dark:bg-secondary/[0.22]" />

      {/* Recorrido punteado que fluye — mismo lenguaje que el hero */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.3] dark:opacity-[0.4]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 75%, transparent 100%)",
        }}
      >
        <path
          d="M -40 680 L 260 680 L 260 420 L 560 420 L 560 560 L 900 560 L 900 220 L 1260 220 L 1260 400 L 1520 400"
          fill="none"
          stroke="var(--mdp-amarillo)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="12 10"
          className="animate-route-flow"
        />
        {/* Marcador GPS quieto en una esquina, con anillo de pulso */}
        <g transform="translate(900 560)">
          <circle
            r="8"
            fill="var(--mdp-amarillo)"
            className="animate-route-pulse"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle r="5" fill="var(--mdp-amarillo)" />
        </g>
      </svg>
    </div>
  );
}
