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
import { UserProposals } from "@/components/user-proposals"
import ElevenLabsWrapper from "@/components/ElevenLabsWidget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Proposals />
      <UserProposals />
      <Declarations />
      <DepartmentSolutions />
      <Testimonials />
      <Events />
      <Participate />
      <Donate />
      <Contact />
      <ElevenLabsWrapper />
    </main>
  )
}
