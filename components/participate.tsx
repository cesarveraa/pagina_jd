import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function Participate() {
  const areas = [
    "Comunicación y Redes Sociales",
    "Logística y Eventos",
    "Marketing Digital",
    "Apoyo Financiero",
    "Capacitación y Educación",
    "Relaciones Públicas",
  ]

  return (
    <section id="participate" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">Participa como Voluntario</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Únete al equipo de Jaime Dunn. Completa el formulario para recibir entrenamiento, materiales de campaña y
              coordinar actividades en tu departamento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Volunteer Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0B274D]">Formulario de Voluntario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Tu apellido" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+591 ..." />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ciudad</Label>
                    <Input id="city" placeholder="Tu ciudad" />
                  </div>
                  <div>
                    <Label htmlFor="department">Departamento</Label>
                    <Input id="department" placeholder="Tu departamento" />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Áreas de Interés</Label>
                  <div className="grid grid-cols-1 gap-3 mt-3">
                    {areas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`area-${index}`} />
                        <Label htmlFor={`area-${index}`} className="text-sm font-normal">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (Opcional)</Label>
                  <Textarea id="message" placeholder="Cuéntanos por qué quieres ser voluntario..." rows={4} />
                </div>

                <Button className="w-full bg-[#0B274D] hover:bg-[#0B274D]/90">Enviar Solicitud</Button>
              </CardContent>
            </Card>

            {/* Campaign Centers Map */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Centros de Campaña</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#0B274D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">📍</span>
                      </div>
                      <p className="text-gray-600">Mapa interactivo de centros</p>
                      <p className="text-sm text-gray-500 mt-2">Próximamente disponible</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">La Paz</span>
                      <span className="text-sm text-gray-600">Calle Libertad 456</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Santa Cruz</span>
                      <span className="text-sm text-gray-600">Av. Monseñor Rivero 123</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Cochabamba</span>
                      <span className="text-sm text-gray-600">Plaza Colón 789</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">¿Por qué ser voluntario?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#F2C14E] text-xl">✓</span>
                      <span className="text-gray-700">Capacitación gratuita en liderazgo político</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#F2C14E] text-xl">✓</span>
                      <span className="text-gray-700">Networking con profesionales de todo el país</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#F2C14E] text-xl">✓</span>
                      <span className="text-gray-700">Experiencia práctica en campañas políticas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#F2C14E] text-xl">✓</span>
                      <span className="text-gray-700">Certificado de participación oficial</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
