import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaime Dunn - Presidente 2025 | Libertad, Trabajo y Oportunidad",
  description:
    "Una nueva generación de liderazgo tecnócrata para rescatar a Bolivia. Conoce las propuestas de Jaime Dunn para transformar el país con transparencia y eficiencia.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
