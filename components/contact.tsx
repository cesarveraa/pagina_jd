import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">Contacto y Suscripción</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ponte en contacto con nuestro equipo de campaña o suscríbete a nuestro boletín para recibir las últimas
              noticias y actualizaciones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0B274D]">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Nombre</Label>
                    <Input id="contact-name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-subject">Asunto</Label>
                  <Input id="contact-subject" placeholder="Asunto de tu mensaje" />
                </div>

                <div>
                  <Label htmlFor="contact-message">Mensaje</Label>
                  <Textarea id="contact-message" placeholder="Escribe tu mensaje aquí..." rows={6} />
                </div>

                <Button className="w-full bg-[#0B274D] hover:bg-[#0B274D]/90">Enviar Mensaje</Button>
              </CardContent>
            </Card>

            {/* Contact Info and Newsletter */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F2C14E] mt-1" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">Calle Libertad N° 456, La Paz, Bolivia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#F2C14E] mt-1" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">+591 2 7654321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#F2C14E] mt-1" />
                    <div>
                      <p className="font-medium">Horarios</p>
                      <p className="text-gray-600">Lun–Vie 9:00–18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Suscríbete al Boletín</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Recibe las últimas noticias, propuestas y eventos de la campaña directamente en tu email.
                  </p>
                  <div className="flex gap-2">
                    <Input placeholder="Ingresa tu email" className="flex-1" />
                    <Button className="bg-[#F2C14E] text-[#0B274D] hover:bg-[#F2C14E]/90">Suscribirme</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Síguenos en Redes Sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button size="icon" variant="outline" className="hover:bg-blue-600 hover:text-white">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-black hover:text-white">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-pink-600 hover:text-white">
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-black hover:text-white">
                      <span className="text-xs font-bold">TT</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
