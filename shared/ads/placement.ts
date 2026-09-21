/**
 * Reglas de montaje de AdSense. Extraídas para testear regresiones:
 * no remontar en el poll de arribos, no pedir anuncio tapado por el overlay.
 */

/** Slot específico, o el de /consultar si no está definido (mismo bloque en el panel). */
export function resolveAdSenseSlot(
    specific: string | undefined,
    fallback: string | undefined,
): string | undefined {
    const trimmed = specific?.trim();
    if (trimmed) return trimmed;
    const fallbackTrimmed = fallback?.trim();
    return fallbackTrimmed || undefined;
}

/**
 * El overlay mobile cubre /consultar. Un <ins> tapado igual dispara request
 * y Google lo puede dejar unfilled / inválido. En desktop el form sigue a la vista.
 */
export function shouldRenderConsultarPageRail({
    isConsulting,
    isDesktop,
}: {
    isConsulting: boolean;
    isDesktop: boolean;
}): boolean {
    return !isConsulting || isDesktop;
}

/**
 * El rail de arribos vive mientras hay consulta. NO depende de `loadingArribos`:
 * el refresh cada 25s ponía loading=true, desmontaba el <ins> y AdSense parpadeaba.
 */
export function shouldMountArrivalsRail(isConsulting: boolean): boolean {
    return isConsulting;
}
