"use client";

import type { Arribo } from "@features/arrivals/types";
import { getArriboColor } from "@features/arrivals/utils";
import { IconAlertTriangle } from "@shared/icons/IconAlertTriangle";
import { IconWheelchair } from "@shared/icons/IconWheelchair";
import { cn } from "@shared/utils";

export function ArriboCard({
  arribo,
}: {
  arribo: Arribo;
}) {
  const color = getArriboColor(arribo.Arribo);
  const isAdaptado = arribo.EsAdaptado === "True";
  // "Arribando"/"Llegando": el momento en que más importa transmitir "en
  // vivo" — mismo lenguaje de pulso que el marcador GPS del fondo/hero, no
  // una animación nueva.
  const isArriving = color === "#22c55e";

  const arriboColorClass =
    color === "#22c55e"
      ? "text-success"
      : color === "#0099ff"
        ? "text-secondary"
        : "text-foreground";

  return (
    <div className="arrival-row arrival-card">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-sans text-[12px] font-medium tracking-[0.02em] text-muted-foreground">
            {(
              arribo.DescripcionCartelBandera ??
              arribo.DescripcionBandera ??
              ""
            ).toUpperCase()}
          </div>
          <div
            className={cn(
              "mt-1 flex items-center gap-2 font-mono text-[22px] font-extrabold leading-[1.1] tracking-[-0.5px]",
              arriboColorClass,
            )}
          >
            {isArriving && (
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
                <span className="absolute inset-0 animate-route-pulse rounded-full bg-success" />
                <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-success" />
              </span>
            )}
            {arribo.Arribo}
          </div>
        </div>
        {isAdaptado && (
          <span
            role="img"
            aria-label="Unidad adaptada"
            title="Unidad adaptada"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground"
          >
            <IconWheelchair size={18} />
          </span>
        )}
      </div>
      {arribo.MensajeError ? (
        <span className="mt-2.5 inline-flex items-center gap-1 rounded-md border border-amarillo/30 bg-amarillo/10 px-1.5 py-0.5 text-[10px] leading-snug text-amarillo">
          <IconAlertTriangle className="h-3 w-3 shrink-0" />
          {arribo.MensajeError}
        </span>
      ) : null}
    </div>
  );
}
