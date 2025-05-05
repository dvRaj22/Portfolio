import dynamic from "next/dynamic"
import { Suspense } from "react"
import Loader from "@/components/loader"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

// Dynamically import the Hero component with no SSR to allow Three.js to work
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
  loading: () => <Loader />,
})

export default function Home() {
  return (
    <div className="relative">
      <div className="noise-bg"></div>
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Achievements /> */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

