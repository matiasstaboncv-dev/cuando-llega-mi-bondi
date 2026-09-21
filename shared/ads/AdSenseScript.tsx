import Script from "next/script";

export const ADSENSE_CLIENT = "ca-pub-5101944874293370";

/**
 * Script de AdSense (una sola vez, layout raíz).
 *
 * Auto Ads / Anchor Ads NO se activan desde acá: se prenden en la consola de
 * AdSense (Anuncios → Anuncios automáticos). Con el script en todas las
 * páginas, Google puede inyectarlos si están habilitados.
 *
 * No hace falta (ni conviene) un `push` extra por cambio de ruta o por el
 * poll de arribos: eso es refresh artificial / invalid traffic.
 */
export function AdSenseScript() {
    return (
        <Script
            id="adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}
