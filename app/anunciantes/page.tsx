import type { Metadata } from "next";
import { AnunciantesClient } from "@features/sponsors/components/AnunciantesClient";

export const metadata: Metadata = {
  title: "Anunciantes",
  description:
    "Todos los negocios que anunciaron en MDQ Bondi, del más nuevo al más viejo, con lo que pagó cada uno.",
  alternates: { canonical: "/anunciantes" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mdqbondi.com.ar/anunciantes",
    title: "Anunciantes | MDQ Bondi",
    description:
      "Todos los negocios que anunciaron en MDQ Bondi, del más nuevo al más viejo, con lo que pagó cada uno.",
    siteName: "MDQ Bondi",
    images: ["/opengraph-image"],
  },
};

export default function AnunciantesPage() {
  return <AnunciantesClient />;
}
