import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function Proposals() {
  const proposals = [
    {
      id: "economia",
      title: "Economía Liberal Responsable",
      icon: "💼",
      summary: "Reducir el tamaño del Estado y empoderar al emprendedor",
      challenge:
        "Modelo estatista que castiga al trabajador y empresario productivo. Empresas públicas deficitarias y monopolios que asfixian la competencia.",
      solution: [
        "Congelar y recortar gastos públicos superfluos",
        "Auditoría de empresas estatales y privatización de inviables",
        "Reforma tributaria: simplificar impuestos, ampliar base tributaria",
        "Decreto de Emergencia Económica en primeros 30 días",
        "Fortalecer asociaciones público-privadas con reglas claras",
      ],
      impact: [
        "Ahorro de 12-15% del PIB en gasto público ineficiente",
        "150,000 nuevos empleos formales en dos años",
        "Reducción de inflación a un dígito en 12 meses",
        "USD 1,200 MM en IED proyectada para 2025-2026",
      ],
    },
    {
      id: "justicia",
      title: "Justicia Independiente",
      icon: "⚖️",
      summary: "Refundar el sistema judicial para acabar con la impunidad",
      challenge:
        "Judicialización política, corrupción endémica y falta de sanciones reales generan impunidad generalizada.",
      solution: [
        "Suprimir Ministerio de Justicia, crear Consejo de Integridad Judicial",
        "Eliminar elección popular de jueces, instaurar mecanismo meritocrático",
        "Depuración judicial con apoyo de expertos internacionales",
        "Responsabilidad penal y civil para jueces corruptos",
        "Incentivar métodos alternativos de resolución de conflictos",
      ],
      impact: [
        "45% incremento en confianza ciudadana en sistema judicial",
        "30% disminución en procesos congestionados",
        "Recuperación de USD 150 MM malversados en primer año",
      ],
    },
    {
      id: "educacion",
      title: "Educación y Salud como Inversión",
      icon: "🎓",
      summary: "Formación de capital humano y sistema sanitario mixto",
      challenge:
        "Baja calidad educativa, sistema de salud saturado sin incentivos a la eficiencia ni innovación tecnológica.",
      solution: [
        "Reforma curricular enfocada en STEM y emprendimiento",
        "Alianzas con sector privado para becas técnicas internacionales",
        "Vouchers educativos para escoger escuelas con métrica de calidad",
        "Sistema de salud mixto: cobertura básica universal + seguros privados",
        "Programa nacional de salud preventiva con telemedicina",
      ],
      impact: [
        "25% mejora en PISA y pruebas SABER en tres años",
        "18% reducción mortalidad infantil y materna",
        "20,000 empleos directos en salud y educación",
      ],
    },
    {
      id: "internacional",
      title: "Apertura Internacional",
      icon: "🌐",
      summary: "Insertar a Bolivia en el mercado global",
      challenge: "Aislamiento por políticas proteccionistas, bajos niveles de IED y dependencia de pocos mercados.",
      solution: [
        "Negociar TLCs con EE.UU., UE, Mercosur y bloque del Pacífico",
        "Ventanilla Única de Inversión Externa en línea 24/7",
        "Zonas Francas Logísticas con incentivos fiscales moderados",
        "Reforma Ley de Inversiones con arbitraje internacional",
        "Embajadores de Inversión en consulados del exterior",
      ],
      impact: [
        "35% aumento en exportaciones no tradicionales",
        "USD 1,500 MM en IED para infraestructura y energía",
        "25,000 empleos en Zonas Francas y polos tecnológicos",
      ],
    },
    {
      id: "descentralizacion",
      title: "Descentralización Radical",
      icon: "🏛️",
      summary: "Devolver poder y recursos a departamentos y municipios",
      challenge: "Altísimo centralismo en La Paz, procesos administrativos duplicados y falta de autonomía municipal.",
      solution: [
        "Pacto Fiscal 50/50: transferir 50% ingresos a gobiernos locales",
        "Plataforma única digital para trámites, reduciendo tiempos 40-50%",
        "Reingeniería del Estado: consolidar ministerios redundantes",
        "Fondos de Inversión Local con auditorías sociales",
        "Capacitación continua para funcionarios locales",
      ],
      impact: [
        "45% incremento recursos directos a municipios",
        "50% disminución en plazos de proyectos locales",
        "30% mejoramiento acceso a saneamiento rural",
      ],
    },
  ]

  return (
    <section id="proposals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">Ideario y Propuestas Clave 2025</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Jaime Dunn propone un cambio de modelo integral: Estado mínimo, economía de mercado responsable, justicia
              independiente y oportunidades reales para todos. Sus líneas maestras se basan en principios liberales
              clásicos adaptados a la realidad boliviana.
            </p>
          </div>

          {/* Icons Overview */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {proposals.map((proposal) => (
              <div key={proposal.id} className="text-center">
                <div className="text-4xl mb-2">{proposal.icon}</div>
                <p className="text-sm text-gray-600 max-w-32">{proposal.title}</p>
              </div>
            ))}
          </div>

          {/* Detailed Proposals */}
          <Tabs defaultValue="economia" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {proposals.map((proposal) => (
                <TabsTrigger key={proposal.id} value={proposal.id} className="text-xs lg:text-sm">
                  {proposal.icon} {proposal.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {proposals.map((proposal) => (
              <TabsContent key={proposal.id} value={proposal.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#0B274D]">
                      <span className="text-3xl">{proposal.icon}</span>
                      {proposal.title}
                    </CardTitle>
                    <p className="text-lg text-gray-600">{proposal.summary}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">🚨 Reto Actual</h4>
                      <p className="text-gray-700 bg-red-50 p-4 rounded-lg">{proposal.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-[#0B274D] mb-3 flex items-center gap-2">💡 Nuestra Solución</h4>
                      <div className="grid gap-2">
                        {proposal.solution.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                            <Badge variant="outline" className="mt-0.5 text-xs">
                              {index + 1}
                            </Badge>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">📈 Impacto Esperado</h4>
                      <div className="grid gap-2">
                        {proposal.impact.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
