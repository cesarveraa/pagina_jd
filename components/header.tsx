"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre Jaime", href: "#about" },
  { name: "Propuestas", href: "#proposals" },
  { name: "Declaraciones", href: "#declarations" },
  { name: "Agenda", href: "#events" },
  { name: "Participa", href: "#participate" },
  { name: "Dona", href: "#donate" },
  { name: "Contacto", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#EAEBEC] text-[#62676C] z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FB7E13] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#62676C]">Jaime Dunn</h1>
                <p className="text-xs text-gray-600">Presidente 2025</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm hover:text-[#FB7E13] transition-colors">
                {item.name}
              </a>
            ))}
            <Link href="/chatbot">
              <Button
                variant="outline"
                size="sm"
                className="border-[#FB7E13] text-[#FB7E13] hover:bg-[#FB7E13] hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chatbot
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/chatbot">
              <Button
                variant="outline"
                size="sm"
                className="border-[#FB7E13] text-[#FB7E13] hover:bg-[#FB7E13] hover:text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-[#62676C]">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#EAEBEC] text-[#62676C]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg hover:text-[#FB7E13] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
