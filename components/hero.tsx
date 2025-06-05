import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 39, 77, 0.7), rgba(11, 39, 77, 0.7)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Jaime Dunn: Libertad, Trabajo y Oportunidad</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Una nueva generación de liderazgo tecnócrata para rescatar a Bolivia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-[#F2C14E] text-[#0B274D] hover:bg-[#F2C14E]/90 font-semibold px-8" asChild>
            <a href="#participate">Únete</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0B274D] px-8"
            asChild
          >
            <a href="#donate">Dona</a>
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8" asChild>
            <a href="#proposals">Ver Propuestas</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
