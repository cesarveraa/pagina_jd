"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export default function Declarations() {
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
  ];

  const tiktoks = [
    { label: "TikTok 1", src: "https://www.tiktok.com/embed/v2/7416875505917447430/" },
    { label: "TikTok 2", src: "https://www.tiktok.com/embed/v2/7394641552066399493/" },
    { label: "TikTok 3", src: "https://www.tiktok.com/embed/v2/7395273931772464390/" },
    { label: "TikTok 4", src: "https://www.tiktok.com/embed/v2/7509476684781997368/" },
    { label: "TikTok 5", src: "https://www.tiktok.com/embed/v2/7512070187483483448/" },
    { label: "TikTok 6", src: "https://www.tiktok.com/embed/v2/7505535076436888887" },
  ];

  return (
    <section id="declarations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#62676C] mb-4">
              Declaraciones y Estilo de Comunicación
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Jaime Dunn comunica con claridad, didáctica y firmeza sus ideas. Su estilo tecnocrático, combinado con frases concretas, busca enseñar al electorado y al mismo tiempo mostrar determinación ante el statu quo.
            </p>
          </div>

          {/* Quotes Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#62676C] mb-8 text-center">Frases Destacadas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <Card key={index} className="border-l-4 border-l-[#FB7E13] hover:shadow-lg transition-shadow">
                  <CardContent>
                    <Badge className="bg-[#62676C] text-white mb-4">{quote.context}</Badge>
                    <blockquote className="text-lg text-gray-700 italic mb-4">"{quote.text}"</blockquote>
                    <p className="text-sm text-gray-500 font-medium">{quote.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* TikTok Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#62676C] mb-6 text-center">TikToks</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tiktoks.map((item, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-3">{item.label}</h3>
                    <div className="aspect-[9/16] mb-3">
                      <iframe
                        className="w-full h-full"
                        src={item.src}
                        title={item.label}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
