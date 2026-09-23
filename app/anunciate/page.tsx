import type { Metadata } from "next";
import { Suspense } from "react";
import { AnunciateClient } from "@features/sponsors/components/AnunciateClient";

export const metadata: Metadata = {
  title: "Anunciate",
  description:
    "Comprá un lugar publicitario en MDQ Bondi. Se publican los dos que más pagaron en Consultar. No hay garantía de visitas ni ventas.",
  alternates: { canonical: "/anunciate" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mdqbondi.com.ar/anunciate",
    title: "Anunciate | MDQ Bondi",
    description:
      "Comprá un lugar publicitario en MDQ Bondi. Se publican los dos que más pagaron en Consultar. No hay garantía de visitas ni ventas.",
    siteName: "MDQ Bondi",
    images: ["/opengraph-image"],
  },
};

export default function AnunciatePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-pwa-shell items-center justify-center text-sm text-muted-foreground">
          Cargando…
        </div>
      }
    >
      <AnunciateClient />
    </Suspense>
  );
}
