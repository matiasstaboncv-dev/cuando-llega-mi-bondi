
export const metadata: Metadata = {
    title: "MDQ Bondi: estadísticas del primer mes — 19.267 usuarios en Mar del Plata",
    description: "MDQ Bondi, la app gratuita de colectivos en tiempo real para Mar del Plata, alcanzó 19.267 usuarios activos, 300.000 vistas y ratio de fidelidad 2:1 en su primer mes. Datos completos de adopción, cobertura y desempeño técnico.",
    keywords: [
        "MDQ Bondi",
        "app colectivos Mar del Plata",
        "transporte público Mar del Plata",
        "cuándo llega el colectivo MDP",
        "app bondi tiempo real",
        "estadísticas mdqbondi",
        "informe mensual app transporte"
    ],
    authors: [{ name: "MDQ Bondi" }],
    alternates: {
        canonical: "https://mdqbondi.com.ar/un-mes-en-numeros",
    },
    other: {
        "geo.region": "AR-B",
        "geo.placename": "Mar del Plata, Partido de General Pueyrredón, Buenos Aires, Argentina",
        "geo.position": "-38.0055;-57.5426",
        "ICBM": "-38.0055, -57.5426",
    },
    openGraph: {
        type: "article",
        title: "MDQ Bondi: estadísticas del primer mes — 19.267 usuarios en Mar del Plata",
        description: "19.267 usuarios activos, 300.000 vistas y ratio de fidelidad 2:1 en 30 días. Sin campañas pagas. Solo la app y el boca a boca marplatense.",
        url: "https://mdqbondi.com.ar/un-mes-en-numeros",
        siteName: "MDQ Bondi",
        locale: "es_AR",
        publishedTime: "2026-05-28T09:00:00-03:00",
        modifiedTime: "2026-05-28T09:00:00-03:00",
        section: "Estadísticas",
        tags: ["Mar del Plata", "Transporte público", "App colectivos", "Partido de General Pueyrredón"],
    },
    twitter: {
        card: "summary_large_image",
        site: "@mdqbondi",
        title: "MDQ Bondi: estadísticas del primer mes — 19.267 usuarios en Mar del Plata",
        description: "19.267 usuarios activos, 300.000 vistas, ratio 2:1. Un mes de datos de la app de colectivos en tiempo real de Mar del Plata.",
    },
};

import { Metadata } from "next";
import PrimerMesClient from "./PrimerMesClient";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MDQ Bondi: estadísticas del primer mes — 19.267 usuarios en Mar del Plata",
    description:
        "19.267 usuarios activos, 300.000 vistas y ratio de fidelidad 2:1 en 30 días para la app de colectivos en tiempo real de Mar del Plata.",
    datePublished: "2026-05-28T09:00:00-03:00",
    dateModified: "2026-05-28T09:00:00-03:00",
    author: [
        { "@type": "Person", name: "Nicolás Jiménez", url: "https://dotfn.dev" },
        { "@type": "Person", name: "Matias Celiz Ramos", url: "https://celizin.dev" },
    ],
    publisher: {
        "@type": "Organization",
        name: "MDQ Bondi",
        logo: {
            "@type": "ImageObject",
            url: "https://mdqbondi.com.ar/icon-512x512.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://mdqbondi.com.ar/un-mes-en-numeros",
    },
    image: "https://mdqbondi.com.ar/og/estadisticas-1-mes.jpg",
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <PrimerMesClient />
        </>
    );
}
