import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DepartmentSolutions() {
  const departments = [
    {
      id: "la-paz",
      name: "La Paz",
      solutions: [
        "Reducción del 25% en impuestos municipales para PYMEs paceñas",
        "Digitalización completa de trámites (ventanilla única)",
        "Plan de movilidad sostenible: expansión teleféricos y buses eléctricos",
        "Fondo de microcréditos con tasa subsidiada (4%) para emprendedores",
        "Centros de innovación universitarios para startups tecnológicas",
      ],
    },
    {
      id: "santa-cruz",
      name: "Santa Cruz",
      solutions: [
        "Ventanilla única para agroexportadores: trámites en 7 días",
        "Programa de industrialización de soya: planta de aceite y subproductos",
        "Ampliación aeropuerto Viru Viru: zona de carga especializada",
        "Pólos tecnológicos: incentivos fiscales para empresas de TI",
        "Proyecto represa Los Negros (USD 75 MM) para riego en época seca",
      ],
    },
    {
      id: "cochabamba",
      name: "Cochabamba",
      solutions: [
        "Impulso agroindustria: planta procesado quinua y frutas para exportación",
        "Inversión USD 50 MM en sistemas de riego tecnificado valle alto",
        "Becas técnicas en agroecología y energías renovables",
        "Planta tratamiento aguas residuales zona sur",
        "Corredor Logístico Central conectando con otros departamentos",
      ],
    },
    {
      id: "tarija",
      name: "Tarija",
      solutions: [
        "Reforma contrato gasífero: licitación transparente internacional",
        "Construcción parques solares zona este para energía limpia",
        "Formación técnica en hidrocarburos y geología (bilingüe)",
        "Impulso enoturismo: rutas bodegas y viñedos",
        "Fondo Tarijeño de Innovación (USD 20 MM) para startups energéticas",
      ],
    },
    {
      id: "potosi",
      name: "Potosí",
      solutions: [
        "Aplicar regalías 11% para Potosí en proyectos de litio",
        "Centro de Excelencia en Minería Responsable",
        "Reactivar producción plata y zinc con inversión privada USD 100 MM",
        "Electrificación rural con parques solares y microcentrales",
        "Turismo industrial: visitas minas históricas y museos interactivos",
      ],
    },
    {
      id: "oruro",
      name: "Oruro",
      solutions: [
        "Parque solar 50 MW en Salar de Coipasa",
        "Fortalecer Carnaval de Oruro como atractivo turístico",
        "Modernizar minería: clúster de innovación metales preciosos",
        "Parque Industrial y Logístico en Zona Franca",
        "Clínicas modulares y telemedicina para zonas rurales",
      ],
    },
    {
      id: "chuquisaca",
      name: "Chuquisaca",
      solutions: [
        "Renovación integral casco histórico de Sucre",
        "Certificación internacional artesanías para exportación",
        "Convenios UCAS: posgrados en Derecho de Integración",
        "Mejoras carreteras Sucre-Potosí y Sucre-Cochabamba",
        "Parque Agroindustrial Villa Montes para frutas tropicales",
      ],
    },
    {
      id: "beni",
      name: "Beni",
      solutions: [
        "Construcción defensas fluviales y drenajes en Trinidad",
        "Puertos secos en Guayaramerín para comercio con Brasil",
        "Fomento ecoturismo en Parque Nacional Noel Kempff Mercado",
        "Agricultura sostenible: cultivos hidropónicos",
        "Refuerzo vigilancia fronteriza contra narcotráfico",
      ],
    },
    {
      id: "pando",
      name: "Pando",
      solutions: [
        "Pavimentación Ruta 13 (Cobija-Riberalta)",
        "Internet satelital subvencionado para escuelas rurales",
        "Apoyo productores cacao y café con certificación comercio justo",
        "Conservación Parque Madidi mediante ecoturismo comunitario",
        "Mejorar vigilancia fronteriza con Brasil",
      ],
    },
  ]

  return (
    <section id="department-solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">Soluciones por Departamento</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Jaime Dunn presenta iniciativas adaptadas a las necesidades de cada departamento, potenciando sus
              fortalezas productivas y corrigiendo brechas locales.
            </p>
          </div>

          <Tabs defaultValue="la-paz" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-8">
              {departments.map((dept) => (
                <TabsTrigger key={dept.id} value={dept.id} className="text-xs">
                  {dept.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#0B274D] text-2xl">Propuestas para {dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {dept.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                          <div className="w-6 h-6 bg-[#F2C14E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#0B274D] font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-gray-700">{solution}</p>
                        </div>
                      ))}
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
