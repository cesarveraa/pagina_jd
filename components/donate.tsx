import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export function Donate() {
  const raised = 650000
  const target = 2000000
  const percentage = (raised / target) * 100

  const breakdown = [
    { label: "Publicidad Digital y TV", percent: 35, color: "bg-blue-500" },
    { label: "Logística de Eventos", percent: 25, color: "bg-green-500" },
    { label: "Plataformas Tecnológicas", percent: 20, color: "bg-purple-500" },
    { label: "Capacitación de Voluntarios", percent: 10, color: "bg-yellow-500" },
    { label: "Investigación y Desarrollo", percent: 10, color: "bg-red-500" },
  ]

  const amounts = [50, 100, 250, 500, 1000]

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">Dona para Impulsar el Cambio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tu aporte es fundamental para financiar actos públicos, publicidad y programas técnicos en cada región.
              Con transparencia total, mostramos el destino de cada boliviano.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0B274D]">Realizar Donación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-4 block">Selecciona un monto</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((amount) => (
                      <Button key={amount} variant="outline" className="h-12 hover:bg-[#0B274D] hover:text-white">
                        Bs. {amount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount">Monto personalizado</Label>
                    <Input id="custom-amount" placeholder="Ingresa tu monto" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="donor-name">Nombre completo</Label>
                  <Input id="donor-name" placeholder="Tu nombre completo" />
                </div>

                <div>
                  <Label htmlFor="donor-email">Email</Label>
                  <Input id="donor-email" type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <Label className="text-base font-medium">Método de pago</Label>
                  <div className="grid grid-cols-1 gap-3 mt-3">
                    <Button variant="outline" className="justify-start h-12">
                      💳 Tarjeta de crédito/débito
                    </Button>
                    <Button variant="outline" className="justify-start h-12">
                      🏦 Transferencia bancaria
                    </Button>
                    <Button variant="outline" className="justify-start h-12">
                      ₿ Criptomonedas
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-[#0B274D] hover:bg-[#0B274D]/90 h-12">Donar Ahora</Button>
              </CardContent>
            </Card>

            {/* Transparency and Progress */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Progreso de Recaudación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#0B274D]">Bs. {raised.toLocaleString()}</span>
                      <span className="text-gray-600">Meta: Bs. {target.toLocaleString()}</span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                    <p className="text-sm text-gray-600 text-center">{percentage.toFixed(1)}% completado</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Destino de los Fondos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {breakdown.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="text-sm text-gray-600">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B274D]">Transparencia Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>Reportes financieros mensuales públicos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>Auditoría independiente de todos los fondos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>Recibos detallados para todos los donantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span>Portal web con gastos en tiempo real</span>
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
