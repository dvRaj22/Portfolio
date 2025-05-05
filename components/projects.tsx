"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import prepInImg from "../public/prepIn.jpg"
import thinkifyImg from "../public/Thinkify.jpg"
import Image from "next/image"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const projects = [
    {
      title: "PrepIn: AI Career Coach",
      description:
        "An AI-powered career coach platform helping users create professional resumes, cover letters, and practice mock interviews with real-time feedback and market insights.",
      image: prepInImg,
      tags: ["Next.js", "Clerk", "NeonDB", "Gemini API", "Inngest"],
      liveDemo: "https://prepin.vercel.app/",
      github: "https://github.com/dvRaj22/PrepIn",
      features: [
        "Generated AI-optimized resumes and cover letters tailored to specific job descriptions.",
        "Provided market insights including trending skills, domain growth rates, and personalized career advice using Gemini API.",
        "Constantly updated market trends and growth data in real-time via Inngest workflows.",
        "Developed an AI-driven mock interview feature allowing users to practice interviews with instant performance feedback.",
      ],
    },
    {
      title: "Thinkify",
      description:
        "A full-stack collaborative platform fostering meaningful conversations, knowledge sharing, and community-driven engagement.",
      image: thinkifyImg,
      tags: ["MERN Stack", "JWT Auth", "Cloudinary", "Vercel"],
      liveDemo: "https://thinkify.vercel.app/",
      github: "https://github.com/dvRaj22/Thinkify",
      features: [
        "Built a collaborative platform with secure JWT-based authentication and role-based access control.",
        "Integrated Cloudinary for media upload handling with rich post, poll, assignment, and task management features.",
        "Designed personalized dashboards for both admins and users.",
      ],
    },
    {
      title: "Kizuna Chat Application",
      description:
        "A real-time chat application built with the PERN stack and Socket.io",
      image: thinkifyImg,
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
      liveDemo: "https://kizuna.work.gd",
      github: "https://github.com/Sahilsaw/Kizuna",
      features: [
        "Developed a real-time chat app using the PERN stack with Socket.io, handling 100+ concurrent users.",
        "Deployed on AWS EC2 with Nginx and PM2, improving server uptime by 99.9%.",
        "Implemented JWT authentication, reducing authentication time by 30%.",
        "Secured the application with CORS, cookie-based authentication, and HTTPS, ensuring end-to-end encryption.",
      ],
    },
  ]

  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 min-h-screen flex items-center relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
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
              Projects
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
              Showcasing my technical skills and problem-solving abilities
              through real-world applications.
            </motion.p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl backdrop-blur-md bg-background/30 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <motion.div
                  key={`image-${activeProject}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full min-h-[300px] md:min-h-[400px]"
                >
                 <Image
  src={projects[activeProject].image}
  alt={projects[activeProject].title}
  className="w-full h-full object-cover rounded-l-xl"
  width={600}
  height={400}
/>

{/* <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent md:bg-gradient-to-t md:from-background md:to-transparent"></div> */}
                </motion.div>

                <motion.div
                  key={`content-${activeProject}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 md:p-8"
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {projects[activeProject].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeProject].tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Key Features:</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      {projects[activeProject].features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={projects[activeProject].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gap-2 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-primary/20"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {projects.length > 1 && (
              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevProject}
                  className="rounded-full backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-primary/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProject(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeProject
                          ? "bg-primary scale-125"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextProject}
                  className="rounded-full backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-primary/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
