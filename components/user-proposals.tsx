"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MessageSquare, Share2, Send, Users, Lightbulb, MapPin } from "lucide-react"

interface UserProposal {
  id: string
  name: string
  department: string
  category: string
  title: string
  description: string
  likes: number
  comments: number
  date: string
  status: "nueva" | "revisando" | "considerada"
}

export function UserProposals() {
  const [activeTab, setActiveTab] = useState<"enviar" | "ver">("enviar")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    category: "",
    title: "",
    description: "",
  })

  // Propuestas de ejemplo de la comunidad
  const communityProposals: UserProposal[] = [
    {
      id: "1",
      name: "María González",
      department: "La Paz",
      category: "Educación",
      title: "Programa de Becas Técnicas para Jóvenes Rurales",
      description:
        "Propongo crear un programa específico de becas técnicas para jóvenes de comunidades rurales, enfocado en agricultura tecnificada y energías renovables...",
      likes: 47,
      comments: 12,
      date: "2025-01-15",
      status: "considerada",
    },
    {
      id: "2",
      name: "Carlos Mendoza",
      department: "Santa Cruz",
      category: "Economía",
      title: "Microcréditos para Emprendedores Jóvenes",
      description:
        "Implementar un sistema de microcréditos con tasas preferenciales para emprendedores menores de 30 años, con mentorías incluidas...",
      likes: 32,
      comments: 8,
      date: "2025-01-12",
      status: "revisando",
    },
    {
      id: "3",
      name: "Ana Quispe",
      department: "Cochabamba",
      category: "Salud",
      title: "Clínicas Móviles con Telemedicina",
      description:
        "Expandir el programa de clínicas móviles incluyendo equipos de telemedicina para conectar con especialistas en hospitales principales...",
      likes: 28,
      comments: 5,
      date: "2025-01-10",
      status: "nueva",
    },
  ]

  const departments = ["La Paz", "Santa Cruz", "Cochabamba", "Potosí", "Oruro", "Chuquisaca", "Tarija", "Beni", "Pando"]

  const categories = [
    "Economía",
    "Educación",
    "Salud",
    "Justicia",
    "Infraestructura",
    "Medio Ambiente",
    "Tecnología",
    "Cultura",
    "Deporte",
    "Seguridad",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se enviaría la propuesta
    alert("¡Gracias por tu propuesta! La revisaremos y te contactaremos pronto.")
    setFormData({
      name: "",
      email: "",
      department: "",
      category: "",
      title: "",
      description: "",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "nueva":
        return "bg-blue-100 text-blue-800"
      case "revisando":
        return "bg-yellow-100 text-yellow-800"
      case "considerada":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "nueva":
        return "Nueva"
      case "revisando":
        return "En Revisión"
      case "considerada":
        return "Considerada"
      default:
        return "Pendiente"
    }
  }

  return (
    <section id="user-proposals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#62676C] mb-4">Tu Voz, Nuestras Propuestas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Jaime Dunn cree en la participación ciudadana activa. Comparte tus ideas y propuestas para construir
              juntos el Bolivia que queremos. Cada propuesta es revisada por nuestro equipo técnico y las mejores son
              integradas a nuestro plan de gobierno.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FB7E13]">247</div>
                <div className="text-sm text-gray-600">Propuestas Recibidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FB7E13]">43</div>
                <div className="text-sm text-gray-600">En Revisión</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FB7E13]">18</div>
                <div className="text-sm text-gray-600">Integradas al Plan</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={activeTab === "enviar" ? "default" : "ghost"}
                onClick={() => setActiveTab("enviar")}
                className={`px-6 py-2 ${activeTab === "enviar" ? "bg-[#FB7E13] text-white" : "text-[#62676C]"}`}
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Propuesta
              </Button>
              <Button
                variant={activeTab === "ver" ? "default" : "ghost"}
                onClick={() => setActiveTab("ver")}
                className={`px-6 py-2 ${activeTab === "ver" ? "bg-[#FB7E13] text-white" : "text-[#62676C]"}`}
              >
                <Users className="w-4 h-4 mr-2" />
                Ver Propuestas
              </Button>
            </div>
          </div>

          {/* Content */}
          {activeTab === "enviar" ? (
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader className="bg-[#EAEBEC] text-[#62676C]">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Comparte Tu Propuesta
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Todas las propuestas son revisadas por nuestro equipo técnico especializado
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#62676C] mb-2">Nombre Completo *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white border-gray-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#62676C] mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white border-gray-300"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#62676C] mb-2">Departamento *</label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) => setFormData({ ...formData, department: value })}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Selecciona tu departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#62676C] mb-2">Categoría *</label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#62676C] mb-2">Título de la Propuesta *</label>
                      <Input
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="bg-white border-gray-300"
                        placeholder="Título claro y descriptivo de tu propuesta"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#62676C] mb-2">Descripción Detallada *</label>
                      <Textarea
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="bg-white border-gray-300 min-h-32"
                        placeholder="Describe tu propuesta en detalle: problema que resuelve, beneficiarios, implementación sugerida, etc."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#FB7E13] hover:bg-[#e06d0a] text-white py-3">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Propuesta
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[#62676C] mb-2">Propuestas de la Comunidad</h3>
                <p className="text-gray-600">Conoce las ideas que otros bolivianos están compartiendo</p>
              </div>

              <div className="grid gap-6">
                {communityProposals.map((proposal) => (
                  <Card key={proposal.id} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-[#FB7E13] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                {proposal.name.charAt(0)}
                              </div>
                              <span className="font-medium text-[#62676C]">{proposal.name}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="w-3 h-3" />
                              {proposal.department}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {proposal.category}
                            </Badge>
                            <Badge className={`text-xs ${getStatusColor(proposal.status)}`}>
                              {getStatusText(proposal.status)}
                            </Badge>
                          </div>

                          <h4 className="text-lg font-semibold text-[#62676C] mb-2">{proposal.title}</h4>

                          <p className="text-gray-600 mb-4 line-clamp-2">{proposal.description}</p>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {proposal.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {proposal.comments}
                            </div>
                            <span>{new Date(proposal.date).toLocaleDateString("es-ES")}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-[#62676C]">
                            <Heart className="w-4 h-4 mr-1" />
                            Me gusta
                          </Button>
                          <Button variant="outline" size="sm" className="text-[#62676C]">
                            <Share2 className="w-4 h-4 mr-1" />
                            Compartir
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" className="text-[#62676C] border-[#62676C]">
                  Ver Más Propuestas
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
