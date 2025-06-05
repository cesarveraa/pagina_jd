import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#62676C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#FB7E13] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jaime Dunn</h3>
                  <p className="text-xs text-gray-300">Presidente 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Una nueva generación de liderazgo tecnócrata para rescatar a Bolivia con libertad, trabajo y
                oportunidad.
              </p>
              <div className="text-sm text-gray-400">
                <p>Nueva Generación Patriótica S.R.L.</p>
                <p>RUT: 98765432-1</p>
                <p>Oficina Tributaria: Santa Cruz</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Sobre Jaime
                  </a>
                </li>
                <li>
                  <a href="#proposals" className="hover:text-white transition-colors">
                    Propuestas
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white transition-colors">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#participate" className="hover:text-white transition-colors">
                    Participa
                  </a>
                </li>
                <li>
                  <a href="#donate" className="hover:text-white transition-colors">
                    Dona
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/politica" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/chatbot" className="hover:text-white transition-colors">
                    Chatbot
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Campaña Jaime Dunn. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">Diseño y Desarrollo Web © 2025 Campaña Jaime Dunn</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
