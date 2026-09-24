import { getCache, setCache } from "@shared/storage/localCache";

/**
 * Cuándo fue la última vez que ESTA parada+línea trajo un arribo real
 * (no un error de negocio tipo "sin datos disponibles"). Vive en
 * localStorage (vía shared/storage/localCache, TTL 24h) para sobrevivir a
 * un reload — sin esto, un "sin datos" en la primera consulta del día no
 * tiene con qué compararse: no hay forma de distinguir "esta parada
 * siempre está así de floja" de "hace 5 minutos había un bondi y ahora la
 * Municipalidad no lo está informando".
 */
const ACTION = "lastGoodArrival";

export function getLastGoodArrivalAt(codLinea: string, paradaId: string): number | null {
    return getCache<number>(ACTION, { codLinea, paradaId });
}

export function markGoodArrivalNow(codLinea: string, paradaId: string): void {
    setCache<number>(ACTION, Date.now(), { codLinea, paradaId });
}
