import Link from "next/link";

export function BondiVsCuandoLlegaArticle() {
    return (
        <>
            <p>
                Si buscaste &ldquo;cuándo llega el colectivo en Mar del Plata&rdquo;, seguramente te
                cruzaste con dos nombres: la app oficial <strong>&ldquo;Cuándo Llega&rdquo;</strong> de
                la Municipalidad y <strong>MDQ Bondi</strong>. Las dos muestran el arribo en tiempo real
                de las líneas de colectivo de la ciudad, pero no son lo mismo. Esta es una comparación
                directa, sin vueltas.
            </p>

            <h2>Qué es &ldquo;Cuándo Llega&rdquo;</h2>
            <p>
                Es la aplicación oficial de la Municipalidad de General Pueyrredón (MGP) para consultar
                el transporte urbano de pasajeros. Está disponible en Google Play y App Store, y usa la
                misma fuente de datos GPS que alimenta al resto de las herramientas de la ciudad.
            </p>

            <h2>Qué es MDQ Bondi</h2>
            <p>
                Es una Progressive Web App (PWA) gratuita e independiente, sin afiliación con la
                Municipalidad. Esta versión es un fork personal, sin uso comercial, de un proyecto
                que nació como respuesta de la comunidad tech local marplatense para consultar
                arribos, recorridos y paradas cercanas.
            </p>

            <h2>En qué se parecen</h2>
            <p>
                Ambas son <strong>gratuitas</strong> y usan los <strong>mismos datos oficiales en tiempo
                real de la MGP</strong>: si el colectivo está atrasado, las dos lo van a mostrar atrasado.
                Ninguna inventa horarios propios.
            </p>

            <h2>Diferencias, punto por punto</h2>

            <h3>Instalación</h3>
            <p>
                &ldquo;Cuándo Llega&rdquo; requiere descargarla desde Google Play o App Store. MDQ Bondi
                es una PWA: se instala directo desde el navegador (o se usa sin instalar nada), sin pasar
                por ninguna tienda de aplicaciones.
            </p>

            <h3>Registro</h3>
            <p>
                MDQ Bondi no pide cuenta ni registro para usarse. Abrís el sitio y consultás.
            </p>

            <h3>Cobertura de líneas</h3>
            <p>
                MDQ Bondi suma la línea 221 (Costa Azul) mediante un trazado manual propio, ya que esa
                línea no forma parte de la API oficial de la MGP.
            </p>

            <h3>Código</h3>
            <p>
                MDQ Bondi es{" "}
                <a
                    href="https://github.com/cuando-llega-mi-bondi/cuando-llega-mi-bondi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    código abierto
                </a>
                : cualquiera puede revisar cómo funciona o proponer una mejora.
            </p>

            <h2>De dónde sale MDQ Bondi</h2>
            <p>
                Esta es un fork personal, sin uso comercial, del proyecto de código
                abierto creado originalmente por Nicolás Jiménez y Matias Celiz Ramos,
                dos desarrolladores de Mar del Plata. Más sobre el proyecto original
                en <Link href="/acerca">/acerca</Link>.
            </p>

            <h2>Cuál conviene usar</h2>
            <p>
                Las dos hacen el trabajo con los mismos datos oficiales. Si ya tenés &ldquo;Cuándo
                Llega&rdquo; instalada y te sirve, no hay ningún motivo para cambiar. Si preferís no
                instalar una app de tienda, no querés crear cuenta, o tomás la línea 221, MDQ Bondi te
                puede resultar más cómoda. Probá las dos y quedate con la que mejor te funcione.
            </p>

            <p>
                <Link href="/consultar">Consultá tu colectivo ahora en MDQ Bondi →</Link>
            </p>
        </>
    );
}
