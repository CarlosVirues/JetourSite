import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { finalidades, finalidadesPorCategoria } from "./tablas";

// Texto literal del aviso entregado por ECIJA (nov-2026). No corregir redacción sin aprobación del cliente.
const PDF_URL = "/documentos/aviso-proteccion-datos-clientes-ecuabeiben.pdf";

export const metadata = {
  title: "Aviso de Protección y Uso de Datos Personales para Clientes - Jetour",
  description:
    "Aviso de Protección y Uso de Datos Personales para clientes de ECUABEIBEN CIA. LTDA. conforme a la Ley Orgánica de Protección de Datos Personales.",
};

const H2 = ({ children }) => (
  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">{children}</h2>
);

const Lista = ({ items }) => (
  <ul className="list-disc ml-6 space-y-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Tabla = ({ columnas, filas }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[640px] border-collapse text-base">
      <thead>
        <tr>
          {columnas.map(([, titulo]) => (
            <th
              key={titulo}
              scope="col"
              className="border border-gray-700 bg-gray-900 p-3 text-left font-semibold text-white"
            >
              {titulo}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filas.map((fila, i) => (
          <tr key={i}>
            {columnas.map(([clave]) => (
              <td key={clave} className="border border-gray-700 p-3 align-top">
                {fila[clave]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Definicion = ({ termino, children }) => (
  <p>
    <strong className="text-white">{termino}:</strong> {children}
  </p>
);

const Enlace = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline break-all"
  >
    {href}
  </a>
);

const BotonPdf = () => (
  <a
    href={PDF_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
  >
    Descargar aviso en PDF
  </a>
);

export default function AvisoProteccionDatosClientesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      <section className="relative h-64 lg:h-80 bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center pt-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Aviso de Protección y Uso de Datos Personales para Clientes por
              parte de ECUABEIBEN CIA. LTDA.
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-gray-300 text-lg leading-relaxed space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-blue-400 font-medium">
                Ultima actualización: noviembre de 2026
              </p>
              <BotonPdf />
            </div>

            <p>
              Conforme lo establecido en la Ley Orgánica de Protección de Datos
              Personales, informamos lo siguiente:
            </p>

            <section className="space-y-4">
              <H2>
                1. ¿Quién es el responsable del tratamiento de mis datos
                personales?
              </H2>
              <p>
                Según la Ley Orgánica de Protección de Datos Personales,
                ECUABEIBEN CIA. LTDA. es la empresa responsable de recopilar,
                usar, tratar y cuidar la información personal. Esto significa
                que nos encargamos de que el uso de los datos sea adecuado,
                seguro y conforme a la ley.
              </p>
              <p>Adicionalmente informamos lo siguiente:</p>
              <Lista
                items={[
                  <><strong className="text-white">Denominación social</strong>: ECUABEIBEN CIA. LTDA.</>,
                  <><strong className="text-white">Dirección:</strong> Av. España 8-99 y Sevilla</>,
                  <><strong className="text-white">Teléfono:</strong> (07) 280-7317</>,
                ]}
              />
            </section>

            <section className="space-y-4">
              <H2>2. Delegado de Protección de Datos Personales.</H2>
              <Lista
                items={[
                  <><strong className="text-white">Nombre:</strong> Pablo Andrés Dent Pons</>,
                  <>
                    <strong className="text-white">Correo Electrónico:</strong>{" "}
                    <a href="mailto:protecciondedatos@gruporoldan.com.ec" className="text-blue-400 underline break-all">
                      protecciondedatos@gruporoldan.com.ec
                    </a>
                  </>,
                  <><strong className="text-white">Teléfono:</strong> (02) 298-6528</>,
                  <>
                    <strong className="text-white">Dirección:</strong> Av. 12 de
                    Octubre, N26-97 y Lincoln, Ed. Torre 1492, 170516. Piso 10
                    Oficina 1005 Quito, Ecuador.
                  </>,
                ]}
              />
            </section>

            <section className="space-y-4">
              <H2>3. Definiciones</H2>
              <Definicion termino="Dato personal">
                Dato que identifica o hace identificable a una persona natural,
                directa o indirectamente.
              </Definicion>
              <Definicion termino="Datos sensibles">
                Datos relativos a: etnia, identidad de género, identidad
                cultural, religión, ideología, filiación política, pasado
                judicial, condición migratoria, orientación sexual, salud, datos
                biométricos, datos genéticos y aquellos cuyo tratamiento indebido
                pueda dar origen a discriminación, atenten o puedan atentar
                contra los derechos y libertades fundamentales.
              </Definicion>
              <Definicion termino="Base de datos o fichero">
                Conjunto estructurado de datos cualquiera que fuera la forma,
                modalidad de creación, almacenamiento, organización, tipo de
                soporte, tratamiento, procesamiento, localización o acceso,
                centralizado, descentralizado o repartido de forma funcional o
                geográfica.
              </Definicion>
              <Definicion termino="Titular">
                Persona natural cuyos datos son objeto de tratamiento.
              </Definicion>
              <Definicion termino="Responsable de tratamiento de datos personales">
                persona natural o jurídica, pública o privada, autoridad
                pública, u otro organismo, que solo o conjuntamente con otros
                decide sobre la finalidad y el tratamiento de datos personales.
              </Definicion>
              <Definicion termino="Encargado del tratamiento de datos personales">
                Persona natural o jurídica, pública o privada, autoridad
                pública, u otro organismo que solo o conjuntamente con otros
                trate datos personales a nombre y por cuenta de un responsable
                de tratamiento de datos personales.
              </Definicion>
              <Definicion termino="Destinatario">
                Persona natural o jurídica que ha sido comunicada con datos
                personales.
              </Definicion>
              <Definicion termino="Consentimiento">
                Manifestación de la voluntad libre, específica, informada e
                inequívoca, por el que el titular de los datos personales
                autoriza al responsable del tratamiento de los datos personales a
                tratar los mismos.
              </Definicion>
              <Definicion termino="Transferencia o comunicación">
                Manifestación, declaración, entrega, consulta, interconexión,
                cesión, transmisión, difusión, divulgación o cualquier forma de
                revelación de datos personales realizada a una persona distinta
                al titular, responsable o encargado del tratamiento de datos
                personales. Los datos personales que comuniquen deben ser
                exactos, completos y actualizados.
              </Definicion>
              <Definicion termino="Tratamiento">
                Cualquier operación o conjunto de operaciones realizadas sobre
                datos personales, ya sea por procedimientos técnicos de carácter
                automatizado, parcialmente automatizado o no automatizado, tales
                como: la recogida, recopilación, obtención, registro,
                organización, estructuración, conservación, custodia,
                adaptación, modificación, eliminación, indexación, extracción,
                consulta, elaboración, utilización, posesión, aprovechamiento,
                distribución, cesión, comunicación o transferencia, o cualquier
                otra forma de habilitación de acceso, cotejo, interconexión,
                limitación, supresión, destrucción y, en general, cualquier uso
                de datos personales.
              </Definicion>
            </section>

            <section className="space-y-4">
              <H2>4. ¿A quiénes aplica este aviso de privacidad?</H2>
              <p>
                Este aviso de privacidad aplica a los clientes y/o potenciales
                clientes de ECUABEIBEN CIA. LTDA. Sus datos serán incorporados
                en nuestros ficheros y bases de datos.
              </p>
            </section>

            <section className="space-y-4">
              <H2>5. ¿Cómo obtenemos los datos personales?</H2>
              <p>
                Los datos que ECUABEIBEN CIA. LTDA. tratará incluyen aquellos
                facilitados por el cliente o potencial cliente a través de
                cualquier canal, ya sea digital o físico. Asimismo, se tratarán
                los datos obtenidos de bases de datos de acceso público y de
                servicios de referencias crediticias, los cuales se utilizarán
                para realizar el análisis de vinculación y para gestionar la
                relación comercial con el cliente.
              </p>
            </section>

            <section className="space-y-4">
              <H2>6. ¿Qué tipos de datos personales son tratados?</H2>
              <p className="underline">Datos Personales no sensibles:</p>
              <Lista
                items={[
                  "Datos identificativos: nombres, apellidos, número de cédula, RUC, imagen, firma;",
                  "Datos de contacto: correo electrónico, teléfono fijo, teléfono celular, dirección;",
                  "Datos de características personales: datos de familia, estado civil, ciudad, fecha de nacimiento, lugar de nacimiento, edad, sexo, nacionalidad, características físicas;",
                  "Datos de circunstancias sociales: vivienda, propiedades, posesiones;",
                  "Datos profesionales: cargo o profesión, información laboral, actividad económica, experiencia profesional;",
                  "Datos económicos: salario, ingresos mensuales, declaración de impuesto a la renta, declaración de impuesto al valor agregado, rol de pagos, activos, pasivos, patrimonio, referencias bancarias.",
                ]}
              />
              <p className="underline">Datos personales sensibles:</p>
              <Lista
                items={[
                  "Antecedentes legales (como pasado judicial)",
                  "Antecedentes penales",
                  "Datos Crediticios",
                  "Datos de Salud",
                ]}
              />
            </section>

            <section className="space-y-4">
              <H2>7. Información general sobre el uso de datos personales.</H2>
              <p>
                Es responsabilidad exclusiva de los titulares que los datos
                personales proporcionados a ECUABEIBEN CIA. LTDA. sean
                completos, correctos y actualizados, y en caso de proporcionar
                información de terceros, será responsabilidad exclusiva de los
                titulares previamente informar sobre las condiciones del
                tratamiento de los datos personales del tercero y que se obtuvo
                el consentimiento de estos para compartir los mismos
                especialmente si se trata de datos sensibles.
              </p>
              <p>
                La no entrega de datos personales requeridos por ECUABEIBEN CIA.
                LTDA. como Responsable de tratamiento puede generar la
                imposibilidad de cumplir con las obligaciones existentes entre el
                titular y la empresa.
              </p>
            </section>

            <section className="space-y-4">
              <H2>8. Protección de datos personales de categorías especiales.</H2>
              <p>
                La normativa sobre tratamiento de datos clasifica como
                “categorías especiales” ciertos datos sensibles, los cuales
                describimos dentro del apartado 4 del presente aviso. ECUABEIBEN
                CIA. LTDA. no recopilará ni utilizará este tipo de datos, a
                menos que lo necesitemos y exista una excepción de la normativa.
                Adicionalmente, la obtención y el tratamiento de estos datos
                personales se realizará conforme a los requisitos establecidos
                en la normativa vigente, para lo cual el titular podrá consentir
                explícitamente para el tratamiento de los datos personales.
              </p>
            </section>

            <section className="space-y-6">
              <H2>9. ¿Cómo se utilizan los datos personales?</H2>
              <p className="font-semibold text-white">
                Se utilizan los datos personales para las siguientes
                finalidades:
              </p>
              <Tabla
                columnas={[
                  ["finalidad", "Finalidades"],
                  ["base", "Base de legitimación"],
                ]}
                filas={finalidades}
              />
              <p>
                De conformidad con la Resolución No. SPDP-SPD-2026-0005-R
                emitida por la Superintendencia de Protección de Datos
                Personales (SPDP), le informamos que todas nuestras actividades
                de tratamiento son identificadas como de gran escala. Para
                garantizar la protección efectiva de sus datos, aplicamos de
                manera estricta medidas técnicas, organizativas y legales
                reforzadas. Los detalles sobre las categorías de datos,
                finalidades titulares afectados y derechos de protección de datos
                se encuentran en las secciones posteriores de este aviso de
                protección de datos personales.
              </p>
              <Tabla
                columnas={[
                  ["finalidad", "Finalidades"],
                  ["categoria", "Categoría de Datos"],
                  ["base", "Base de legitimación"],
                ]}
                filas={finalidadesPorCategoria}
              />
            </section>

            <section className="space-y-4">
              <H2>10. ¿Cuánto tiempo conservamos los datos personales?</H2>
              <p>
                ECUABEIBEN CIA. LTDA. considera distintos plazos de conservación
                según el tipo de tratamiento de datos personales que se refiera y
                la norma que lo regule.
              </p>
              <p>
                Los datos personales tratados se conservarán mientras sean
                necesarios para la oferta o prestación de nuestros productos,
                para satisfacer alguna de las finalidades de tratamiento
                indicadas en este documento, así como para la formulación, el
                ejercicio o la defensa de reclamaciones o mientras el Potencial
                Cliente y/o Cliente no retire su consentimiento, cuando este
                último ocurra, los datos serán eliminados, lo que implica su
                bloqueo, a menos que exista una obligación legal de conservación.
              </p>
              <p>
                Para determinar el plazo en base a la obligación legal de
                conservación, a modo ejemplificativo, mas no taxativo o
                limitativo, se podrá establecer, por ejemplo:
              </p>
              <p>
                Los datos recabados para la gestión de la relación comercial
                serán bloqueados cuando hayan dejado de ser necesarios para la
                finalidad para la cual fueron recogidos. Dicho bloqueo supondrá
                que los datos personales serán conservados únicamente a
                disposición de las autoridades de control, autoridades
                judiciales, policía nacional, entre otros, para la atención por
                parte de esta entidad de las posibles responsabilidades nacidas
                del tratamiento, durante el plazo de prescripción de éstas.
              </p>
              <p>
                Transcurridos dichos plazos, cesará el tratamiento y se procederá
                conforme a los establecido en la Ley Orgánica de Protección de
                Datos Personales.
              </p>
            </section>

            <section className="space-y-4">
              <H2>11. ¿Qué terceros pueden acceder a los datos personales?</H2>
              <p>
                ECUABEIBEN CIA. LTDA., únicamente compartirá con terceros los
                datos personales del Titular y de su representado si existe un
                fundamento jurídico para ello o en todos aquellos casos en que
                nos ha otorgado el consentimiento. Se entenderá que existe un
                fundamento jurídico para realizar tales comunicaciones cuando una
                norma jurídica obligue a la comunicación o resulte necesaria para
                la prestación del servicio contratado.
              </p>
              <p>Entre los destinatarios se encontrarán, los siguientes:</p>
              <Lista
                items={[
                  "Entidades e instituciones de la administración pública, en razón de sus competencias (Servicio de Rentas Internas, Unidad de Análisis Financiero y Económico, Superintendencia de Compañías, Valores y Seguros, Jueces y Tribunales, Fiscalía General del Estado, entre otras).",
                  "Auditores, contadores y abogados externos en cumplimiento de obligaciones contractuales y legales aplicables a ECUABEIBEN CIA. LTDA.",
                  "Proveedores de sistemas informáticos los cuales pueden estar localizados afuera del Ecuador.",
                  "En caso de que ECUABEIBEN CIA. LTDA.: (i) esté sujeto a negociaciones para la venta del negocio o parte de este a un tercero; (ii) se venda a un tercero; o (iii) lleve a cabo una reorganización, es posible que debamos transferir toda o parte de los datos personales del usuario al tercero correspondientes (o a sus consejeros) como parte de los procedimientos de debida diligencia en lo que respecta al análisis de cualquier venta o reorganización propuesta. También es posible que debamos transferir los datos personales del usuario a dicha entidad reorganizada o tercero tras la venta o reorganización para que la utilicen con los mismos fines establecidos en este aviso.",
                  "Entidades bancarias, financieras o cooperativas de ahorro y crédito en aquellos casos en que el Titular manifieste su preferencia por obtener financiamiento a través de terceros para la adquisición de los productos que comercializa ECUABEIBEN CIA. LTDA. Esta comunicación se realiza con la finalidad de que dichas instituciones evalúen el perfil crediticio, viabilidad y gestión del otorgamiento del crédito solicitado.",
                  "Terceros adquirentes de cartera, cesionarios o entidades financieras especializadas, en el supuesto de que ECUABEIBEN CIA. LTDA. realice operaciones de venta, cesión, transferencia o titularización de sus derechos de crédito (cartera de clientes vigente, vencida o en mora).",
                  "Asimismo, se informa que ECUABEIBEN CIA. LTDA. y prestadores de servicios tecnológicos relacionados a los que se transmitan los datos para llevar a cabo cada transacción, pueden estar obligados por la legislación Ecuatoriana a facilitar información sobre transacciones monetarias a las autoridades u organismos de control, en el marco de la lucha contra los delitos de lavado de activos, omisión de control de lavado de activos, terrorismo, financiación del terrorismo, delincuencia organizada y otro tipo de delitos que generan recursos económicos que pueden ser objeto de lavado de activos.",
                ]}
              />
              <p>
                Al momento de compartir los datos personales, nos aseguraremos de
                que exista la protección adecuada para proteger la información
                personal de acuerdo con las leyes de protección de datos
                personales.
              </p>
              <p>
                Finalmente informamos que ECUABEIBEN CIA. LTDA. utiliza los
                servicios de terceras empresas para la gestión comercial con el
                Titular, para lo cual dichos terceros podrán tener que acceder a
                datos personales. Dichas empresas proveedoras podrán clasificarse
                en las siguientes categorías: proveedores de servicios
                tecnológicos e informáticos, empresas de seguridad, empresas de
                mensajería, servicios de atención y emisión de llamadas
                telefónicas, empresas de gestión y mantenimiento de sistemas,
                infraestructuras e inmuebles, servicios logísticos, servicios de
                tasación, servicios de gestión de cobro y recuperación de cartera
                por cuenta de terceros, proveedores de servicio de medios de
                pago, proveedores de servicios de facturación electrónica,
                entidades bancarias o financieras, servicios de asesoramiento
                jurídico y tributario, agencias de publicidad y de servicios de
                marketing y comunicación así como servicios profesionales
                generales.
              </p>
              <p>
                Toda transferencia de los datos personales fuera del Ecuador se
                realizará conforme a la normativa vigente y a las disposiciones
                emitidas por la Superintendencia de Protección de Datos.
              </p>
            </section>

            <section className="space-y-4">
              <H2>12. Transferencias Internacionales</H2>
              <p>
                En el desarrollo de nuestras actividades, no requerimos comunicar
                datos personales a terceros ubicados fuera del territorio
                ecuatoriano. En caso de que, a futuro, sea necesario realizar
                transferencias internacionales, nos comprometemos a cumplir
                estrictamente con lo establecido en la Ley Orgánica de Protección
                de Datos Personales (LOPDP), su Reglamento y la Norma General de
                Transferencia emitida por la SPDP. Dichas transferencias se
                ejecutarán bajo garantías adecuadas y serán comunicadas
                oportunamente a los titulares de los datos.
              </p>
            </section>

            <section className="space-y-4">
              <H2>13. ¿Qué derechos se pueden ejercer sobre los datos personales?</H2>
              <p>
                El TITULAR podrá ejercer los siguientes derechos en relación con
                el tratamiento de los datos personales:
              </p>
              <Lista
                items={[
                  "El derecho de acceso a los datos contenidos en los ficheros/bancos/bases de datos de ECUABEIBEN CIA. LTDA.",
                  "El derecho de información: El titular tiene derecho a ser informado sobre los fines del tratamiento de sus datos personales, el tipo de datos tratados, el tiempo de conservación, el origen de los datos cuando no provienen directamente de él, las transferencias o comunicaciones nacionales e internacionales, así como los datos de contacto del responsable y del delegado de protección de datos. También debe conocer las consecuencias de proporcionar o no su información, los efectos de entregar datos incorrectos, la posibilidad de revocar su consentimiento, los medios para ejercer los derechos (acceso, rectificación, eliminación, oposición, limitación, portabilidad y decisiones automatizadas) y los mecanismos para presentar reclamos ante el responsable o la Autoridad de Protección de Datos.",
                  "El derecho de rectificación y actualización de aquellos datos que puedan ser incorrectos o incompletos.",
                  "El derecho de eliminación, en los casos previstos en la Ley Orgánica de Protección de Datos Personales.",
                  "El derecho de oposición que le permite solicitar que se cese en todos o algunos de los tratamientos, como el envío de comunicaciones comerciales, que se llevan a cabo con los datos personales.",
                  "El derecho de suspensión del tratamiento de datos, durante un período de tiempo limitado y en los casos que establece la normativa vigente.",
                  "El derecho a no ser objeto de una decisión basada únicamente en valoraciones automatizadas, en la forma establecida en la ley.",
                  "El derecho a la portabilidad, que permitirá solicitar que remitamos los datos personales en un formato compatible, actualizado, estructurado, común, interoperable y de lectura mecánica, preservando sus características, bien directamente al Titular o a otra entidad, en su nombre, conforme a los requerimientos establecidos en la normativa vigente.",
                ]}
              />
              <p>
                Asimismo, se podrá solicitar la revocación del consentimiento
                otorgado para el tratamiento de los datos personales.
              </p>
              <p>
                Para ejercer los indicados derechos o plantear cualquier cuestión
                relativa al tratamiento de los datos personales, el Titular debe
                dirigirse al Delegado de Protección de Datos Personales enviando
                un correo electrónico a{" "}
                <a href="mailto:protecciondedatos@gruporoldan.com.ec" className="text-blue-400 underline break-all">
                  protecciondedatos@gruporoldan.com.ec
                </a>{" "}
                acreditando su identidad.
              </p>
              <p>
                Asimismo, se podrá presentar una reclamación ante la
                Superintendencia de Protección de Datos a través de los medios
                que esta haya habilitado para el efecto.
              </p>
            </section>

            <section className="space-y-4">
              <H2>14. ¿Cómo protegen los datos personales?</H2>
              <p>
                ECUABEIBEN CIA. LTDA. utiliza medidas de seguridad técnicas,
                organizativas, administrativas y jurídicas para proteger la
                seguridad, así como la confidencialidad, integridad, y
                disponibilidad de los datos personales. Estas medidas han sido
                implementadas para proteger la Información Personal contra el
                acceso, revelación, uso y modificación no autorizada; son
                revisadas periódicamente.
              </p>
              <p>
                No obstante, no es posible asegurar la protección total de la
                información proporcionada. En consecuencia, no garantizamos que
                las comunicaciones realizadas a través de nuestros sitios web,
                aplicaciones o herramientas digitales sean absolutamente seguras,
                ni que los datos que se transmitan o almacenen mediante estos
                medios estén libres de riesgos de pérdida, uso indebido o acceso
                no autorizado por terceros.
              </p>
            </section>

            <section className="space-y-4">
              <H2>15. ¿Quién controla o supervisa su cumplimiento?</H2>
              <p>
                El titular podrá presentar una reclamación ante la Autoridad de
                Protección de Datos a través de la página web de la
                Superintendencia de Protección de Datos Personales dentro del
                formulario de denuncias que esta habilitó para el efecto:{" "}
                <Enlace href="https://spdp.gob.ec/emergente_denuncias/" />
              </p>
            </section>

            <section className="space-y-4">
              <H2>16. Modificación del Aviso de Protección de Datos Personales</H2>
              <p>
                ECUABEIBEN CIA. LTDA. se reserva el derecho a modificar su Aviso
                de Protección de Datos Personales, de acuerdo con su propio
                criterio, o motivado por un cambio dispuesto por la
                Superintendencia de Protección de Datos, reforma legislativa o
                disposición jurisprudencial en el supuesto que dicha
                actualización suponga un cambio sustancial en la misma.
                Cualquier modificación del Aviso de Protección de Datos
                Personales será publicada, previo a su efectiva aplicación. Es
                responsabilidad del titular consultarla periódicamente en nuestro
                sitio web <Enlace href="https://www.jetourecuador.com/" /> en la
                sección de Avisos o a través del siguiente enlace:{" "}
                <Enlace href="https://drive.google.com/file/d/10mVszzrbnS_gCxRG4SdrNiGvpFnpiIgO/view?usp=drive_link" />
              </p>
              <p className="text-blue-400 font-medium">
                Ultima actualización: noviembre de 2026
              </p>
            </section>

            <div className="text-center pt-4">
              <BotonPdf />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
