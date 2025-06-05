"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="h-[80vh]">
            <CardHeader className="bg-[#0B274D] text-white">
              <CardTitle className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jaime Dunn" />
                  <AvatarFallback className="bg-[#F2C14E] text-[#0B274D]">JD</AvatarFallback>
                </Avatar>
                Conversa con el Equipo de Jaime Dunn
              </CardTitle>
              <p className="text-blue-100">
                Pregunta sobre nuestras propuestas, agenda de eventos o cómo participar en la campaña
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[60vh] p-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 mt-8">
                    <p className="text-lg mb-4">¡Hola! Soy el asistente virtual de la campaña de Jaime Dunn.</p>
                    <p>Puedes preguntarme sobre:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Propuestas de gobierno</li>
                      <li>Biografía y experiencia de Jaime Dunn</li>
                      <li>Próximos eventos y agenda</li>
                      <li>Cómo participar como voluntario</li>
                      <li>Información sobre donaciones</li>
                    </ul>
                  </div>
                )}
                {messages.map((m) => (
                  <div key={m.id} className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[80%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <Avatar className="w-8 h-8">
                        {m.role === "user" ? (
                          <AvatarFallback className="bg-blue-500 text-white text-sm">Tú</AvatarFallback>
                        ) : (
                          <AvatarFallback className="bg-[#F2C14E] text-[#0B274D] text-sm">JD</AvatarFallback>
                        )}
                      </Avatar>
                      <div
                        className={`p-3 rounded-lg ${
                          m.role === "user" ? "bg-[#0B274D] text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-[#F2C14E] text-[#0B274D] text-sm">JD</AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t">
              <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Escribe tu pregunta sobre la campaña..."
                  className="flex-grow"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading} className="bg-[#0B274D] hover:bg-[#0B274D]/90">
                  Enviar
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
