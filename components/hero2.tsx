"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin,ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = ["Software Developer", "Competitive Programmer", "Full Stack Developer"]
  const fullText = texts[currentTextIndex]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setTypedText("")
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-[0.15]">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-primary/20" />
        ))}
      </div>

      {/* Geometric Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-lg" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-primary/20 rounded-lg" />
        <div className="absolute top-40 right-40 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
        <div className="absolute bottom-40 left-40 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </motion.div>

      
      <motion.div className="relative z-10 " style={{ y: textY }}>
        <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-primary">Currently working on EcoEngage</span>
          </motion.div>

          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold"
              >
                Divyam Raj
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-baseline gap-2 text-2xl md:text-3xl text-muted-foreground"
              >
                <span>I'm a</span>
                <span className="text-primary font-medium min-w-[300px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              I craft responsive websites where technologies meet creativity, specializing in building exceptional
              digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#contact">
                <Button size="lg" className="relative overflow-hidden group bg-primary hover:bg-primary/90">
                  Contact me!!
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
              <Link href="https://github.com/dvRaj22" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 relative overflow-hidden group bg-background/50 backdrop-blur-sm"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                  <div className="absolute inset-0 bg-primary/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/divyamraj22/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 relative overflow-hidden group bg-background/50 backdrop-blur-sm"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                  <div className="absolute inset-0 bg-primary/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Link href="#about" className="text-muted-foreground hover:text-primary interactive">
          <ChevronDown className="h-8 w-8" />
        </Link>
      </motion.div>
    </section>
  )
}

