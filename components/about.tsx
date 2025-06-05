import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  const timeline = [
    { year: "1968", event: "Nace en Camiri, Santa Cruz" },
    { year: "1985-1986", event: "Bachillerato en Cazenovia High School, NY (Beca AFS)" },
    { year: "1986-1990", event: "B.A. Relaciones Internacionales, Colgate University" },
    { year: "1990-1991", event: "Operador bursátil registrado NYSE/NASD" },
    { year: "1996-1998", event: "MBA UCB/Harvard, graduado con honores" },
    { year: "1998", event: "Coautor Ley 1834 del Mercado de Valores" },
    { year: "1999", event: "Oficial Mayor Financiero El Alto y Prefecto a.i. La Paz" },
    { year: "2009", event: "Entre los 10 más influyentes de finanzas bolivianas" },
    { year: "2010", event: "Best Investment Bank of Bolivia en Londres" },
    { year: "2025", event: "Candidato Presidencial con Nueva Generación Patriótica" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">Sobre Jaime Dunn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Analista financiero internacional, consultor y líder con más de 30 años de experiencia en el sector
              público y privado, comprometido con el desarrollo de Bolivia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Image and Basic Info */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src="/foto_gente.jpg"
                  alt="Jaime Dunn"
                  className="w-full h-auto rounded-xl shadow-xl object-cover"
                />

              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Perfil Breve</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Jaime Guillermo Dunn de Ávila</strong>
                    <br />
                    Nacido el 21 de mayo de 1968 en Camiri, Santa Cruz.
                    <br />
                    Analista financiero internacional, consultor y candidato presidencial 2025.
                    <br />
                    Bilingüe Español–Inglés.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B274D] mb-8">Trayectoria Profesional</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#F2C14E] rounded-full flex items-center justify-center">
                        <span className="text-[#0B274D] font-bold text-sm">{item.year}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#0B274D] mb-8 text-center">Logros y Contribuciones Destacadas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Coautor de la Ley del Mercado de Valores (1998)",
                "Best Investment Bank of Bolivia 2010",
                "Consultor regional en legislación financiera",
                "Director Proyecto BRIDGE (2011-2014)",
                "Modernización finanzas municipales sin corrupción",
                "Top 10 personajes financieros más influyentes",
              ].map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-[#F2C14E]">
                  <CardContent className="pt-6">
                    <p className="text-gray-700">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
