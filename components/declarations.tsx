import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export function Declarations() {
  const quotes = [
    {
      text: "La riqueza no se distribuye, se crea. Bolivia no es pobre, ha sido empobrecida por un Estado que castiga al que trabaja.",
      author: "Jaime Dunn – Foro Bolivia 360, Harvard (Mar 2025)",
      context: "Economía",
    },
    {
      text: "Somos un proyecto que propone devolver la soberanía al individuo, reducir el tamaño del Estado y liberar las fuerzas productivas.",
      author: "Jaime Dunn – Entrevista en Correo del Sur (Abr 2025)",
      context: "Filosofía Política",
    },
    {
      text: "Mientras lea mi discurso de posesión, los corruptos identificados ya estarán siendo arrestados. No habrá impunidad.",
      author: "Jaime Dunn – Declaración Pública (May 2025)",
      context: "Justicia",
    },
    {
      text: "Un Estado mínimo, pero fuerte. Eso es lo único que garantiza libertad y prosperidad.",
      author: "Jaime Dunn – Entrevista en Erbol (May 2025)",
      context: "Gobierno",
    },
  ]

  const videos = [
    {
      title: "¿Por qué Bolivia necesita menos Estado?",
      platform: "YouTube",
      duration: "8:45",
      description: "Jaime explica cómo el exceso de Estado frena el crecimiento económico",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "https://youtube.com/watch?v=ejemplo1",
    },
    {
      title: "Reforma Judicial en 60 segundos",
      platform: "TikTok",
      duration: "1:00",
      description: "La propuesta de justicia independiente explicada de forma simple",
      thumbnail: "/placeholder.svg?height=200&width=200",
      url: "https://tiktok.com/@jaimedunn/video/ejemplo1",
    },
    {
      title: "Economía Liberal vs Estatismo",
      platform: "YouTube",
      duration: "12:30",
      description: "Comparación didáctica entre modelos económicos con ejemplos bolivianos",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "https://youtube.com/watch?v=ejemplo2",
    },
    {
      title: "¿Qué es la descentralización?",
      platform: "TikTok",
      duration: "0:45",
      description: "Cómo devolver poder a departamentos y municipios",
      thumbnail: "/placeholder.svg?height=200&width=200",
      url: "https://tiktok.com/@jaimedunn/video/ejemplo2",
    },
  ]

  return (
    <section id="declarations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#62676C] mb-4">
              Declaraciones y Estilo de Comunicación
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Jaime Dunn comunica con claridad, didáctica y firmeza sus ideas. Su estilo tecnocrático, combinado con
              frases concretas, busca enseñar al electorado y al mismo tiempo mostrar determinación ante el statu quo.
            </p>
          </div>

          {/* Quotes Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#62676C] mb-8 text-center">Frases Destacadas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <Card key={index} className="border-l-4 border-l-[#FB7E13] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#62676C] text-white">{quote.context}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg text-gray-700 italic mb-4">"{quote.text}"</blockquote>
                    <p className="text-sm text-gray-500 font-medium">{quote.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Content Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#62676C] mb-4 text-center">Aprende sobre Jaime y sus Ideas</h3>
            <p className="text-center text-gray-600 mb-8">
              Videos educativos donde Jaime explica sus propuestas de forma clara y didáctica
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                      <div className="w-12 h-12 bg-[#FB7E13] rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className={video.platform === "YouTube" ? "bg-red-600" : "bg-black"}>
                        {video.platform}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-[#62676C] mb-2">{video.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                    <Button size="sm" className="w-full bg-[#FB7E13] hover:bg-[#FB7E13]/90 text-white" asChild>
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Video
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Communication Style Notes */}
          <Card className="bg-[#EAEBEC]">
            <CardHeader>
              <CardTitle className="text-[#62676C]">Características de su Comunicación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#62676C] mb-3">Estilo Didáctico</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FB7E13] mt-1">•</span>
                      <span>Explica inflación, déficit y mercado en términos sencillos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FB7E13] mt-1">•</span>
                      <span>Uso de metáforas: "elefantes blancos" para empresas estatales ineficientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FB7E13] mt-1">•</span>
                      <span>Videos cortos en TikTok y Twitter para llegar a jóvenes profesionales</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#62676C] mb-3">Mensaje Directo</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FB7E13] mt-1">•</span>
                      <span>Franco contra el "masismo" y la vieja política</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FB7E13] mt-1">•</span>
                      <span>"Voy a cambiar la Constitución para eliminar la reelección indefinida"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FB7E13] mt-1">•</span>
                      <span>Comunicación digital estratégica en múltiples plataformas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
