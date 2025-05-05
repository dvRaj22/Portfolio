"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Code,
  Zap,
  Cpu,
  GitBranch,
  TerminalSquare,
  Database,
  Globe,
  FileCode2,
  Layers3,
  Laptop2,
} from "lucide-react"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const technicalSkills = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <Code /> },
        { name: "Python", icon: <Cpu /> },
        { name: "JavaScript", icon: <Zap /> },
        { name: "HTML5", icon: <FileCode2 /> },
        { name: "CSS3", icon: <FileCode2 /> },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "ReactJS", icon: <Code /> },
        { name: "NextJS", icon: <Globe /> },
        { name: "NodeJS", icon: <TerminalSquare /> },
        { name: "ExpressJS", icon: <TerminalSquare /> },
        { name: "Bootstrap", icon: <Layers3 /> },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "VS Code", icon: <Laptop2 /> },
        { name: "Postman", icon: <TerminalSquare /> },
        { name: "GitHub", icon: <GitBranch /> },
        { name: "Jupyter Notebook", icon: <Cpu /> },
      ],
    },
    {
      title: "Computer Fundamentals",
      skills: [
        { name: "Computer Networks", icon: <Globe /> },
        { name: "DBMS", icon: <Database /> },
        { name: "OOPS", icon: <Code /> },
      ],
    },
    {
      title: "Cloud Databases",
      skills: [
        { name: "MySQL", icon: <Database /> },
        { name: "MongoDB", icon: <Database /> },
      ],
    },
  ]

  const softSkills = ["Leadership", "Teamwork", "Problem Solving", "Time Management"]

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)
    return () => window.removeEventListener("resize", setCanvasDimensions)
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      </div>

      <div className="container relative">
        <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              Skills
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              My technical expertise and professional competencies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 h-full">
                <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-8">
                  {technicalSkills.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="text-lg font-semibold mb-4">{group.title}</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {group.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="p-4 rounded-lg bg-background/40 backdrop-blur-md border border-primary/10 flex flex-col items-center justify-center"
                          >
                            <div className="text-primary mb-2">{skill.icon}</div>
                            <div className="font-medium text-center">{skill.name}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 h-full">
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/10"
                    >
                      <div className="mr-4 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-500"></div>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
