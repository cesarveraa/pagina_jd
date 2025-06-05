import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EmergencyPlan() {
  const actions = [
    {
      title: "Congelamiento de Gastos",
      description: "Congelamiento de nuevos gastos públicos no esenciales y revisión de contratos vigentes",
      days: "0-15",
    },
    {
      title: "Auditoría Empresas Estatales",
      description: "Auditoría exprés a 10 empresas estatales clave; plan de cierre o privatización según resultados",
      days: "15-30",
    },
    {
      title: "Renegociación Deuda Externa",
      description:
        "Renegociación de deuda externa con multilaterales para extender plazos y reducir quita de intereses",
      days: "30-60",
    },
    {
      title: "Fondo de Estabilización",
      description: "Lanzamiento del Fondo de Estabilización Económica (USD 500 MM) para inyección de liquidez",
      days: "60-80",
    },
    {
      title: "Incentivos PyMEs",
      description:
        "Incentivos fiscales temporales (50% reducción impuestos nómina y utilidades) para PyMEs y emprendedores",
      days: "80-100",
    },
  ]

  return (
    <section id="emergency-plan" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">URGENTE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B274D] mb-4">
              Plan de Emergencia: Primeros 100 Días
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              En los primeros 100 días, Jaime Dunn implementará un plan de choque para detener la pérdida de reservas,
              reactivar importaciones esenciales, sanear las finanzas públicas y generar confianza para atraer
              inversión.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {actions.map((action, index) => (
              <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#0B274D] flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {action.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-red-500 text-red-700">
                      Días {action.days}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Placeholder */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-[#0B274D]">Video: Plan de Emergencia Explicado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0B274D] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <p className="text-gray-600">Video explicativo del Plan de Emergencia</p>
                    <p className="text-sm text-gray-500 mt-2">Próximamente disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
