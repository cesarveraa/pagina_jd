import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Proposals } from "@/components/proposals"
import { DepartmentSolutions } from "@/components/department-solutions"
import { Testimonials } from "@/components/testimonials"
import { Events } from "@/components/events"
import { Participate } from "@/components/participate"
import { Donate } from "@/components/donate"
import { Contact } from "@/components/contact"
import { Declarations } from "@/components/declarations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Proposals />
      <Declarations />
      <DepartmentSolutions />
      <Testimonials />
      <Events />
      <Participate />
      <Donate />
      <Contact />
    </main>
  )
}
