import { Metadata } from "next";
import PrimerTrimestreClient from "./PrimerTrimestreClient";

export const metadata: Metadata = {
    title: "MDQ Bondi: el primer trimestre en números — 22.893 usuarios activos",
    description:
        "MDQ Bondi, la app gratuita de colectivos en tiempo real de Mar del Plata, sumó 22.893 usuarios activos y 763.000 vistas en su primer trimestre, sin pauta paga. Adopción, retención, canales de adquisición y cobertura de red, con datos completos.",
    keywords: [
        "MDQ Bondi",
        "app colectivos Mar del Plata",
        "transporte público Mar del Plata",
        "cuándo llega el colectivo MDP",
        "estadísticas mdqbondi",
        "informe trimestral app transporte",
    ],
    authors: [{ name: "MDQ Bondi" }],
    alternates: {
        canonical: "https://mdqbondi.com.ar/primer-trimestre-en-numeros",
    },
    other: {
        "geo.region": "AR-B",
        "geo.placename": "Mar del Plata, Partido de General Pueyrredón, Buenos Aires, Argentina",
        "geo.position": "-38.0055;-57.5426",
        ICBM: "-38.0055, -57.5426",
    },
    openGraph: {
        type: "article",
        title: "MDQ Bondi: el primer trimestre en números — 22.893 usuarios activos",
        description:
            "22.893 usuarios activos, 763.000 vistas y una curva de uso que se acelera trimestre a trimestre. Sin campañas pagas. Solo la app y el boca a boca marplatense.",
        url: "https://mdqbondi.com.ar/primer-trimestre-en-numeros",
        siteName: "MDQ Bondi",
        locale: "es_AR",
        publishedTime: "2026-08-27T09:00:00-03:00",
        modifiedTime: "2026-08-27T09:00:00-03:00",
        section: "Estadísticas",
        tags: ["Mar del Plata", "Transporte público", "App colectivos", "Partido de General Pueyrredón"],
    },
    twitter: {
        card: "summary_large_image",
        site: "@mdqbondi",
        title: "MDQ Bondi: el primer trimestre en números — 22.893 usuarios activos",
        description:
            "22.893 usuarios activos, 763.000 vistas, 5,6 días-usuario recurrentes por cada nuevo. Un trimestre de datos de la app de colectivos en tiempo real de Mar del Plata.",
    },
};

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MDQ Bondi: el primer trimestre en números — 22.893 usuarios activos",
    description:
        "22.893 usuarios activos, 763.000 vistas y una curva de uso que se acelera trimestre a trimestre para la app de colectivos en tiempo real de Mar del Plata.",
    datePublished: "2026-08-27T09:00:00-03:00",
    dateModified: "2026-08-27T09:00:00-03:00",
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
        "@id": "https://mdqbondi.com.ar/primer-trimestre-en-numeros",
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <PrimerTrimestreClient />
        </>
    );
}
