import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Jaime Dunn aporta soluciones técnicas que necesitamos para superar la crisis.",
      author: "María González",
      role: "Empresaria Paceña",
    },
    {
      quote: "Confío en su honestidad y en su visión de largo plazo para nuestro país.",
      author: "Dr. Carlos Mendoza",
      role: "Académico UMSA",
    },
    {
      quote: "Con Jaime, inicia una nueva etapa de transparencia y oportunidades reales.",
      author: "Ana Quispe",
      role: "Líder Comunitaria El Alto",
    },
    {
      quote: "Su perfil tecnócrata y ético da confianza a la clase media y emprendedores.",
      author: "Roberto Silva",
      role: "Empresario Cruceño",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-[#0B274D] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios y Endosos</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Líderes de diferentes sectores respaldan la propuesta de Jaime Dunn para transformar Bolivia con
              transparencia y eficiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="bg-[#F2C14E] text-[#0B274D]">
                      <AvatarFallback className="bg-[#F2C14E] text-[#0B274D] font-bold">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <blockquote className="text-lg mb-4 italic">"{testimonial.quote}"</blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-blue-200 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organization Logos */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-8">Organizaciones que nos respaldan</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {["Cámara de Comercio", "Fundación Boliviana", "Universidad Nacional", "COBOL"].map((org, index) => (
                <div key={index} className="bg-white/10 px-6 py-3 rounded-lg">
                  <span className="text-sm">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
