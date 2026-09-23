/**
 * Contenido Markdown servido vía negociación `Accept: text/markdown`
 * (acceptmarkdown.com). Mismo contenido real que las páginas HTML
 * correspondientes, resumido a mano — no es contenido distinto para
 * agentes (eso sería cloaking), es la misma información sin el chrome de
 * la UI. Si el copy de una página cambia, actualizar acá también.
 */

const BASE = "https://mdqbondi.com.ar";

/** Rutas HTML con contraparte Markdown. La key es el slug bajo /md/. */
export const MARKDOWN_ROUTES: Record<string, string> = {
    "/": "home",
    "/acerca": "acerca",
    "/privacidad": "privacidad",
    "/contacto": "contacto",
    "/blog": "blog",
    "/blog/horarios-colectivo-mar-del-plata-verano": "blog-horarios-verano",
    "/blog/bondi-mdp-vs-cuando-llega": "blog-bondi-mdp-vs-cuando-llega",
    "/blog/como-saber-cuando-llega-el-colectivo-en-mar-del-plata": "blog-como-saber-cuando-llega",
};

const PAGES: Record<string, string> = {
    home: `# MDQ Bondi — App de colectivos en Mar del Plata

> App gratuita para saber cuándo llega tu bondi en Mar del Plata. Horarios,
> recorridos y paradas en tiempo real de todas las líneas (511, 522, 541 y
> más) con datos oficiales de la Municipalidad de General Pueyrredón (MGP).

## Cómo sé cuándo llega mi colectivo en Mar del Plata
Entrás a [/consultar](${BASE}/consultar), elegís tu línea y tu parada, y ves los minutos que faltan para que llegue, calculados con la posición GPS real de la unidad. Es gratis, no pide cuenta y no hace falta instalar nada.

## Qué podés hacer
- [Consultar colectivo](${BASE}/consultar) — arribos en tiempo real de cualquier línea.
- [Ver recorridos](${BASE}/recorrido) — mapa interactivo con recorridos y paradas de todas las líneas.
- [Cómo llego](${BASE}/como-llego) — planificá tu viaje ingresando origen y destino.
- [Paradas cerca mío](${BASE}/paradas-cerca) — encontrá la parada de colectivo más cercana a tu ubicación.

## Por qué usarla
- Sin cuenta, sin descarga de tienda: funciona 100% en el navegador y es instalable como PWA.
- Datos oficiales de MGP, en una interfaz más rápida y liviana que la oficial.
- Incluye líneas que no están en la app oficial (por ejemplo, la 221).

## De dónde sale
Fork personal, sin uso comercial, de un proyecto independiente y de código abierto, sin afiliación con la Municipalidad de General Pueyrredón. Más en [/acerca](${BASE}/acerca).

## Más
- [Sobre MDQ Bondi](${BASE}/acerca)
- [Contacto](${BASE}/contacto)
- [Política de privacidad](${BASE}/privacidad)
- [Mapa del sitio](${BASE}/sitemap.xml)
- [llms.txt](${BASE}/llms.txt)
`,

    acerca: `# Acerca de MDQ Bondi

Información de colectivos en tiempo real para Mar del Plata. Rápida, clara y sin vueltas.

## Sobre la app
- **Tiempo real**: consultá líneas, paradas y próximos arribos al instante.
- **Rápida**: sin registro ni pasos innecesarios.
- **Independiente**: alternativa simple y directa para consultar el transporte.

## Basado en
Fork personal, sin uso comercial, del proyecto de código abierto creado originalmente por:
- **Nicolás Jiménez** — Frontend Developer · Multimedia Designer · [dotfn.dev](https://dotfn.dev) · [GitHub](https://github.com/dotfn)
- **Matias Celiz Ramos** — Técnico en Informática · [celizin.dev](https://celizin.dev) · [GitHub](https://github.com/Celiz)

## Código abierto
- [Repositorio en GitHub](https://github.com/cuando-llega-mi-bondi/cuando-llega-mi-bondi)

## Preguntas frecuentes
- **¿Es gratis?** Sí. 100% gratuita, sin publicidad.
- **¿Funciona sin internet?** Necesitás conexión para obtener los datos en tiempo real.
- **¿Qué líneas incluye?** Todas las líneas de colectivos de Mar del Plata.

## Más
- [Inicio](${BASE}/)
- [Contacto](${BASE}/contacto)
- [Política de privacidad](${BASE}/privacidad)
`,

    privacidad: `# Política de privacidad — MDQ Bondi

MDQ Bondi es una app gratuita para consultar el transporte público de Mar del Plata. No pedimos registro ni creamos cuentas de usuario, y no vendemos tus datos personales.

## Responsable
Proyecto independiente y de código abierto. Consultas: [issues en GitHub](https://github.com/cuando-llega-mi-bondi/cuando-llega-mi-bondi/issues) o [contacto](${BASE}/contacto).

## Qué información tratamos
- **Datos que vos nos das**: ninguno por registro, no hay login. Si usás geolocalización (paradas cerca, cómo llego), se usa solo para calcular resultados cercanos; no guardamos un historial de ubicaciones asociado a tu identidad.
- **Datos automáticos**: IP, dispositivo, navegador y páginas visitadas, vía los servicios de terceros de abajo.
- **Datos en tu dispositivo**: favoritos y tema (claro/oscuro) se guardan localmente en el navegador, no se envían a nuestros servidores.

## Analítica (terceros)
Google Analytics, Microsoft Clarity y Vercel Analytics. Sin publicidad. Detalle completo y última fecha de actualización en [/privacidad](${BASE}/privacidad).

## Tus derechos
Según la Ley N.º 25.326 de Protección de Datos Personales de Argentina, tenés derecho a acceder, rectificar, actualizar y suprimir tus datos personales. Contactanos en [/contacto](${BASE}/contacto).

*Este es un resumen. La página [/privacidad](${BASE}/privacidad) es la fuente de verdad.*
`,

    contacto: `# Contacto — MDQ Bondi

Fork personal, sin uso comercial, hecho en Mar del Plata, Argentina. No es una app oficial de la Municipalidad de General Pueyrredón.

## Reportar un problema o error en los horarios
Abrí un [issue en GitHub](https://github.com/cuando-llega-mi-bondi/cuando-llega-mi-bondi/issues).

## Datos personales y privacidad
No pedimos registro ni guardamos datos personales en un servidor propio. Más en [/privacidad](${BASE}/privacidad).

## Sobre este fork
Basado en el proyecto de código abierto [MDQ Bondi](https://github.com/cuando-llega-mi-bondi/cuando-llega-mi-bondi), creado originalmente por [Nicolás Jiménez](https://dotfn.dev) y [Matias Celiz Ramos](https://celizin.dev). Más en [/acerca](${BASE}/acerca).
`,
    "blog-horarios-verano": `# Horarios de colectivo en Mar del Plata en verano: guía para no perderte el bondi

En temporada alta, los colectivos de Mar del Plata van más cargados y el horario de cartel deja de coincidir con el arribo real. Esta guía junta las formas de consultar el colectivo en tiempo real y llegar a la playa sin perder tiempo.

## Por qué el horario fijo no alcanza en verano
Un colectivo circula según el tránsito y la carga real, no según una tabla impresa. Con más gente y más autos en la ciudad, el arribo real se aleja del horario teórico, y esa diferencia se nota más cuanto más lejos esté tu parada del origen del recorrido.

## Cómo consultar el próximo colectivo en tiempo real
En [/consultar](${BASE}/consultar) elegís línea y parada y ves el arribo estimado en minutos, calculado con la posición GPS real de la unidad.

## Cómo llegar a la playa sin saber qué línea tomar
[/como-llego](${BASE}/como-llego) arma el viaje ingresando origen y destino, útil si sos turista y no conocés las líneas de la ciudad.

## Cómo encontrar la parada más cercana a tu alojamiento
[/paradas-cerca](${BASE}/paradas-cerca) muestra en el mapa las paradas más próximas a tu ubicación y qué líneas pasan por cada una.

## Tips para temporada alta
Salí con más margen del habitual cerca del mediodía y a la tarde, las franjas con más movimiento hacia y desde la costa. La app no publica un cronograma especial de verano: lo que cambia es la demanda, por eso el tiempo real es más confiable que cualquier horario de referencia en esta época.

## Más
- [Ver recorridos completos](${BASE}/recorrido)
- [Blog](${BASE}/blog)
- [Inicio](${BASE}/)
`,
    blog: `# Blog — MDQ Bondi

Comparativas y guías sobre transporte público en Mar del Plata.

## Artículos
- [Horarios de colectivo en Mar del Plata en verano](${BASE}/blog/horarios-colectivo-mar-del-plata-verano) — guía para consultar arribos en tiempo real y llegar a la playa en temporada alta.
- [MDQ Bondi vs. Cuándo Llega](${BASE}/blog/bondi-mdp-vs-cuando-llega) — comparativa entre la app oficial de la Municipalidad de General Pueyrredón y MDQ Bondi.
- [Cómo saber cuándo llega el colectivo en Mar del Plata](${BASE}/blog/como-saber-cuando-llega-el-colectivo-en-mar-del-plata) — guía con todas las formas de consultar horarios en tiempo real.

## Más
- [Inicio](${BASE}/)
- [Sobre MDQ Bondi](${BASE}/acerca)
`,

    "blog-bondi-mdp-vs-cuando-llega": `# MDQ Bondi vs. Cuándo Llega: comparativa de apps de colectivos en Mar del Plata

Comparativa entre la app oficial "Cuándo Llega" de la Municipalidad de General Pueyrredón (MGP) y MDQ Bondi.

## En qué se parecen
Ambas son gratuitas y usan los mismos datos oficiales en tiempo real de la MGP.

## Diferencias
- **Instalación**: "Cuándo Llega" requiere descarga desde Google Play o App Store. MDQ Bondi es una PWA instalable directo desde el navegador, sin tienda de apps.
- **Registro**: MDQ Bondi no pide cuenta.
- **Cobertura**: MDQ Bondi suma la línea 221 (Costa Azul) vía trazado manual, no incluida en la API oficial.
- **Código**: MDQ Bondi es [código abierto](https://github.com/cuando-llega-mi-bondi/cuando-llega-mi-bondi).

## De dónde sale MDQ Bondi
Este es un fork personal, sin uso comercial, del proyecto creado originalmente por Nicolás Jiménez y Matias Celiz Ramos, dos desarrolladores marplatenses.

## Más
- [Blog](${BASE}/blog)
- [Inicio](${BASE}/)
`,

    "blog-como-saber-cuando-llega": `# Cómo saber cuándo llega el colectivo en Mar del Plata

Guía de las formas disponibles para consultar el arribo de colectivos en tiempo real en Mar del Plata.

## Opciones
- App oficial "Cuándo Llega" de la Municipalidad de General Pueyrredón.
- [MDQ Bondi](${BASE}/) — alternativa PWA, sin registro, con la misma data oficial.
- Consultá directo en [/consultar](${BASE}/consultar), mirá el [recorrido de tu línea](${BASE}/recorrido), planificá con [cómo llego](${BASE}/como-llego) o encontrá la [parada más cercana](${BASE}/paradas-cerca).

## Más
- [Comparativa MDQ Bondi vs. Cuándo Llega](${BASE}/blog/bondi-mdp-vs-cuando-llega)
- [Blog](${BASE}/blog)
`,
};

export function getMarkdownPage(slug: string): string | null {
    return PAGES[slug] ?? null;
}

/** Cuerpo Markdown para rutas que no existen (404), con salida hacia adelante. */
export const NOT_FOUND_MARKDOWN = `# 404 — Página no encontrada

La ruta pedida no existe en MDQ Bondi.

## Dónde mirar
- [Inicio](${BASE}/)
- [Consultar colectivo](${BASE}/consultar)
- [Ver recorridos](${BASE}/recorrido)
- [Cómo llego](${BASE}/como-llego)
- [Paradas cerca mío](${BASE}/paradas-cerca)
- [Mapa del sitio](${BASE}/sitemap.xml)
- [llms.txt](${BASE}/llms.txt)
`;
