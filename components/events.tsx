"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

export function Events() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const events = [
    {
      title: "Debate Nacional - Propuestas Económicas",
      date: "15 de Enero, 2025",
      time: "19:00",
      location: "Teatro Municipal, La Paz",
      type: "Debate",
      status: "Próximo",
    },
    {
      title: "Mitin Popular Santa Cruz",
      date: "22 de Enero, 2025",
      time: "18:00",
      location: "Plaza 24 de Septiembre, Santa Cruz",
      type: "Mitin",
      status: "Próximo",
    },
    {
      title: "Foro Empresarial Cochabamba",
      date: "28 de Enero, 2025",
      time: "15:00",
      location: "Hotel Presidente, Cochabamba",
      type: "Foro",
      status: "Próximo",
    },
    {
      title: "Webinar: Reforma Judicial",
      date: "5 de Febrero, 2025",
      time: "20:00",
      location: "Online - Zoom",
      type: "Webinar",
      status: "Próximo",
    },
    {
      title: "Debate Universitario UMSA",
      date: "12 de Febrero, 2025",
      time: "16:00",
      location: "Aula Magna UMSA, La Paz",
      type: "Debate",
      status: "Próximo",
    },
    {
      title: "Mitin Tarija - Sector Energético",
      date: "18 de Febrero, 2025",
      time: "17:30",
      location: "Plaza Luis de Fuentes, Tarija",
      type: "Mitin",
      status: "Próximo",
    },
    {
      title: "Foro de Emprendedores",
      date: "25 de Febrero, 2025",
      time: "14:00",
      location: "Centro de Convenciones, Santa Cruz",
      type: "Foro",
      status: "Próximo",
    },
    {
      title: "Webinar: Descentralización Fiscal",
      date: "3 de Marzo, 2025",
      time: "19:30",
      location: "Online - YouTube Live",
      type: "Webinar",
      status: "Próximo",
    },
  ]

  const filters = ["Todos", "Debates", "Mítines", "Foros", "Webinars"]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Debate":
        return "bg-red-500"
      case "Mitin":
        return "bg-blue-500"
      case "Foro":
        return "bg-green-500"
      case "Webinar":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "Todos") return true
    if (activeFilter === "Debates") return event.type === "Debate"
    if (activeFilter === "Mítines") return event.type === "Mitin"
    if (activeFilter === "Foros") return event.type === "Foro"
    if (activeFilter === "Webinars") return event.type === "Webinar"
    return true
  })

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#62676C] mb-4">Agenda & Eventos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consulta las próximas actividades de la campaña: debates nacionales, mítines locales y foros sectoriales.
              Inscríbete para asistir o sigue en vivo por streaming.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-[#FB7E13] hover:bg-[#FB7E13]/90 text-white"
                    : "border-[#62676C] text-[#62676C] hover:bg-[#62676C] hover:text-white"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-[#62676C] text-lg">{event.title}</CardTitle>
                    <Badge className={`${getTypeColor(event.type)} text-white`}>{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="bg-[#FB7E13] hover:bg-[#FB7E13]/90 text-white">
                      Inscribirse
                    </Button>
                    {event.type === "Webinar" && (
                      <Button size="sm" variant="outline" className="border-[#62676C] text-[#62676C]">
                        Ver Online
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar Integration */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-[#62676C]">Calendario Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-[#EAEBEC] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-[#62676C] mx-auto mb-4" />
                    <p className="text-[#62676C]">Calendario interactivo de eventos</p>
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
