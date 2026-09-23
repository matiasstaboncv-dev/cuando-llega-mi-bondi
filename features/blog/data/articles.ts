import { BondiVsCuandoLlegaArticle } from "@features/blog/components/BondiVsCuandoLlegaArticle";
import { ComoSaberCuandoLlegaArticle } from "@features/blog/components/ComoSaberCuandoLlegaArticle";
import { HorariosVeranoArticle } from "@features/blog/components/HorariosVeranoArticle";
import type { BlogArticle } from "@features/blog/types";

export const ARTICLES: BlogArticle[] = [
    {
        slug: "horarios-colectivo-mar-del-plata-verano",
        title: "Horarios de colectivo en Mar del Plata en verano: guía para no perderte el bondi",
        description:
            "En temporada alta los colectivos de Mar del Plata van más cargados y los horarios de cartel no alcanzan. Guía para consultar arribos en tiempo real y llegar a la playa.",
        datePublished: "2026-08-27T09:00:00-03:00",
        dateModified: "2026-08-27T09:00:00-03:00",
        section: "Guías",
        tags: ["Mar del Plata", "Transporte público", "Verano", "Temporada alta", "Guía"],
        Body: HorariosVeranoArticle,
    },
    {
        slug: "bondi-mdp-vs-cuando-llega",
        title: "MDQ Bondi vs. Cuándo Llega: comparativa de apps de colectivos en Mar del Plata",
        description:
            "MDQ Bondi vs. la app oficial \"Cuándo Llega\": mismos datos en tiempo real, distinta instalación, registro, cobertura de líneas y código abierto.",
        datePublished: "2026-08-27T09:00:00-03:00",
        dateModified: "2026-08-27T09:00:00-03:00",
        section: "Comparativas",
        tags: ["Mar del Plata", "Transporte público", "App colectivos"],
        Body: BondiVsCuandoLlegaArticle,
    },
    {
        slug: "como-saber-cuando-llega-el-colectivo-en-mar-del-plata",
        title: "Cómo saber cuándo llega el colectivo en Mar del Plata",
        description:
            "Guía con todas las formas de consultar el arribo de colectivos en tiempo real en Mar del Plata: app oficial, MDQ Bondi, recorridos, paradas cercanas y más.",
        datePublished: "2026-08-27T09:00:00-03:00",
        dateModified: "2026-08-27T09:00:00-03:00",
        section: "Guías",
        tags: ["Mar del Plata", "Transporte público", "Guía"],
        Body: ComoSaberCuandoLlegaArticle,
    },
];

export function getArticle(slug: string): BlogArticle | undefined {
    return ARTICLES.find((a) => a.slug === slug);
}
