import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política General de Protección de Datos Personales - Jetour",
  description:
    "Política General de Protección de Datos Personales de Jetour - Información sobre el tratamiento y protección de datos personales",
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-64 lg:h-80 bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center pt-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Política General de Protección de Datos Personales
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-white space-y-8">
              <div className="text-gray-300 text-lg leading-relaxed">
                <p>
                  En el presente documento se instrumenta la Política de
                  Protección de Datos Personales (la "Política"), la cual será
                  de obligatorio cumplimiento para todos los trabajadores,
                  proveedores y clientes de Grupo Roldán. La Política
                  establecerá la guía y los principios bajo los cuales Grupo
                  Roldán se regirá en sus relaciones y procesos en los cuales se
                  realice un tratamiento de datos personales.
                </p>
              </div>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  1. Objeto
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">
                      1.1. General
                    </h3>
                    <p>
                      Grupo Roldán tiene como objetivo principal el cumplir con
                      los derechos, principios y obligaciones establecidas en la
                      Ley Orgánica de Protección de Datos Personales ("LOPDP"),
                      normativa secundaria y resoluciones emitidas por la
                      Autoridad de Protección de Datos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">
                      1.2. Específicos
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Establecer los principios que guiarán a Grupo Roldán en
                        el manejo de los datos personales de sus clientes,
                        trabajadores y/o proveedores.
                      </li>
                      <li>
                        Establecer las guías para crear los mecanismos de
                        control relacionados con los datos personales.
                      </li>
                      <li>
                        Establecer los principales lineamientos para la
                        contratación de proveedores con enfoque a la protección
                        de datos personales.
                      </li>
                      <li>
                        Establecer las guías para implementar los mecanismos de
                        seguridad técnicas, físicas y organizativas para
                        garantizar la confidencialidad y seguridad de los datos
                        personales.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  2. Ámbito de Aplicación
                </h2>
                <p className="text-gray-300">
                  La Política es de aplicación obligatoria para todos sus
                  clientes, trabajadores, proveedores, personas relacionadas con
                  Grupo Roldán (accionistas y órganos directivos) y compañías
                  relacionadas.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  3. Definiciones
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Se toma las definiciones de la LOPDP, en especial las
                    siguientes:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Dato Personal
                      </h4>
                      <p>
                        Dato que identifica o hace identificable a una persona
                        natural, directa o indirectamente. Por ejemplo: nombre,
                        cédula de identidad, dirección, correo electrónico,
                        número de teléfono, estado civil, datos de salud, huella
                        dactilar, salario, bienes, estados financieros, etc.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Dato Sensible
                      </h4>
                      <p>
                        Datos relativos a: etnia, identidad de género, identidad
                        cultural, religión, ideología, filiación política,
                        pasado judicial, condición migratoria, orientación
                        sexual, salud, datos biométricos, datos genéticos y
                        aquellos cuyo tratamiento indebido pueda dar origen a
                        discriminación, atenten o puedan atentar contra los
                        derechos y libertades fundamentales.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Custodio de Datos
                      </h4>
                      <p>
                        Rol encargado de garantizar funcionalmente la
                        implementación de Gobierno de Datos. En Grupo Roldán
                        este rol se encuentra actualmente designado a
                        Departamento Legal.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Encargado del Tratamiento
                      </h4>
                      <p>
                        Persona natural o jurídica, pública o privada, que por
                        sí misma o en asocio con otros, realice el Tratamiento
                        de Datos Personales por cuenta del Responsable del
                        Tratamiento (Grupo Roldán), como aliado o proveedor.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Titular
                      </h4>
                      <p>
                        Persona natural cuyos datos son objeto del tratamiento.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Tratamiento
                      </h4>
                      <p>
                        Cualquier operación o conjunto de operaciones realizadas
                        sobre datos personales, ya sea por procedimientos
                        técnicos de carácter automatizado, parcialmente
                        automatizado o no automatizado, tales como: la recogida,
                        recopilación, obtención, registro, organización,
                        estructuración, conservación, custodia, adaptación,
                        modificación, eliminación, indexación, extracción,
                        consulta, elaboración, utilización, posesión,
                        aprovechamiento, distribución, cesión, comunicación o
                        transferencia, o cualquier otra forma de habilitación de
                        acceso, cotejo, interconexión, limitación, supresión,
                        destrucción y, en general, cualquier uso de datos
                        personales.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  4. Principios del Tratamiento de Datos Personales
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Los principios que rigen esta política y el tratamiento de
                    datos personales realizados por Grupo Roldán son los
                    siguientes:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.1. Lealtad
                      </h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Los datos personales serán recopilados de una manera
                          leal y lícita para una o más finalidades específicas
                          informadas al titular de los datos.
                        </li>
                        <li>
                          No se tratarán datos personales que sean considerados
                          como sensibles, salvo en casos que la ley lo ordene o
                          se cuente con autorización expresa del titular.
                        </li>
                        <li>
                          Para la recolección de datos personales, se informará
                          al titular respecto del tipo de datos, tiempo de
                          conservación, base del tratamiento y todos los
                          requisitos establecidos en la LOPDP.
                        </li>
                        <li>
                          El titular será responsable de proporcionar datos
                          exactos y correctos.
                        </li>
                        <li>
                          Grupo Roldán no adquirirá datos personales que no
                          cuenten con los mecanismos de legitimación
                          correspondiente.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.2. Transparencia
                      </h3>
                      <p>
                        El tratamiento será transparente respecto del titular.
                        Grupo Roldán informará de manera clara y sencilla todo
                        lo que el titular requiera saber sobre el tratamiento de
                        sus datos personales.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.3. Finalidad
                      </h3>
                      <p>
                        Grupo Roldán informará al titular las finalidades para
                        las cuales los datos han sido recopilados y serán
                        tratados. Las finalidades serán determinadas y
                        específicas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.4. Minimización y Proporcionalidad
                      </h3>
                      <p>
                        Se procesarán únicamente los datos necesarios para las
                        finalidades informadas. No se recopilarán datos en
                        exceso o innecesarios.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.5. Confidencialidad
                      </h3>
                      <p>
                        Grupo Roldán realizará los mejores esfuerzos para
                        garantizar la confidencialidad de los datos personales,
                        limitando el acceso a terceros no autorizados.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.6. Seguridad
                      </h3>
                      <p>
                        Se adoptarán las medidas de seguridad necesarias para
                        garantizar la confidencialidad de los datos personales,
                        considerando el tipo de datos y que las medidas sean
                        técnica y económicamente viables.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.7. Conservación
                      </h3>
                      <p>
                        Los datos se conservarán de acuerdo con las finalidades
                        para los cuales fueron proporcionados. Una vez cumplido
                        el período de conservación, se eliminarán de los
                        sistemas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">
                        4.8. Responsabilidad Proactiva y Demostrada
                      </h3>
                      <p>
                        Grupo Roldán obtendrá los medios de verificación
                        necesarios para demostrar el cumplimiento de la Ley de
                        Protección de Datos Personales.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  5. Comunicación de Datos Personales
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Grupo Roldán podrá realizar transferencia de datos
                    personales tanto nacionales como internacionales con el
                    objetivo de cumplir obligaciones contractuales. En caso de
                    transferencia internacional, se cerciorará que sea efectuada
                    a jurisdicciones que tutelen la protección y privacidad de
                    datos personales.
                  </p>
                  <p>
                    Los destinatarios estarán sujetos a las mismas obligaciones
                    y medidas de seguridad descritas en la LOPDP.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  6. Clientes
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Los datos personales de clientes actuales y potenciales
                    serán gestionados de acuerdo con la naturaleza de los datos
                    y las finalidades establecidas en esta Política.
                  </p>

                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Finalidades del tratamiento:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enviar propuestas de servicios</li>
                    <li>Contacto para responder consultas</li>
                    <li>Cumplimiento de obligaciones comerciales</li>
                    <li>
                      Procesar y asegurar el cumplimiento de servicios
                      adquiridos
                    </li>
                    <li>Envío de publicidad sobre productos y servicios</li>
                    <li>
                      Comunicar actividades comerciales, concursos y eventos
                    </li>
                    <li>Envío de encuestas de satisfacción</li>
                    <li>Análisis de capacidad crediticia</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  7. Ejercicio de Derechos
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    El titular de los datos personales podrá ejercer sus
                    derechos contactando a:
                  </p>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-2">
                    <p>
                      <strong className="text-blue-400">Dirección:</strong> AV.
                      ESPAÑA 8-99 y SEVILLA, DIAGONAL AL CUERPO DE BOMBEROS
                    </p>
                    <p>
                      <strong className="text-blue-400">Email:</strong>{" "}
                      <a
                        href="mailto:protecciondedatos@gruporoldan.com.ec"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        protecciondedatos@gruporoldan.com.ec
                      </a>
                    </p>
                    <p>
                      <strong className="text-blue-400">Teléfono:</strong>{" "}
                      072807317 EXT 1511/1508/1509/1514
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Derechos disponibles:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Transparencia de la información:</strong> Derecho
                      a ser informado sobre el tratamiento
                    </li>
                    <li>
                      <strong>Acceso:</strong> Obtener confirmación y copia de
                      datos personales
                    </li>
                    <li>
                      <strong>Rectificación y actualización:</strong> Corregir
                      datos inexactos o incompletos
                    </li>
                    <li>
                      <strong>Eliminación:</strong> Supresión de datos
                      personales
                    </li>
                    <li>
                      <strong>Oposición:</strong> Oponerse al tratamiento en
                      circunstancias particulares
                    </li>
                    <li>
                      <strong>Portabilidad:</strong> Recibir datos en formato
                      compatible
                    </li>
                    <li>
                      <strong>Suspensión:</strong> Suspender el tratamiento de
                      datos
                    </li>
                    <li>
                      <strong>Revisión de decisiones automatizadas:</strong>{" "}
                      Revisar decisiones basadas en tratamiento automatizado
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  8. Seguridad de los Datos Personales
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Grupo Roldán implementa medidas de seguridad técnicas,
                    físicas y organizativas que incluyen:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        Almacenamiento:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Encriptación del disco</li>
                        <li>Protocolos de encriptación (AES, RSA)</li>
                        <li>Enmascaramiento dinámico de bases de datos</li>
                        <li>Protección antivirus</li>
                        <li>Respaldo de información</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        Eliminación:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Eliminación a bajo nivel (Borrado seguro)</li>
                        <li>Procesos definidos para eliminación</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  9. Niños, Niñas y Adolescentes
                </h2>
                <p className="text-gray-300">
                  Grupo Roldán no recopilará datos personales relacionados con
                  niños, niñas y adolescentes, excepto información de cargas
                  familiares para el cumplimiento de obligaciones derivadas de
                  la relación laboral y de seguridad social.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  10. Vigencia
                </h2>
                <div className="text-gray-300 space-y-2">
                  <p>
                    Esta Política ha sido aprobada el{" "}
                    <strong className="text-blue-400">
                      24 de mayo de 2023
                    </strong>
                    .
                  </p>
                  <p>
                    La última modificación fue realizada el{" "}
                    <strong className="text-blue-400">
                      08 de febrero de 2024
                    </strong>
                    .
                  </p>
                  <p>
                    La Política será revisada con periodicidad anual de acuerdo
                    con las actividades comerciales y objetivos estratégicos de
                    Grupo Roldán.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
