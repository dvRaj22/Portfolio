"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Briefcase } from "lucide-react"

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section id="education" ref={sectionRef} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 to-transparent opacity-70"></div>
      </div>

      <div className="container relative">
        <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              Internships & Certifications
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
              My internship experience and relevant certifications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Internship Block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-primary to-purple-500 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Full Stack Developer Intern</h3>
                    <p className="text-muted-foreground">Invithi Solutions, Greater Noida</p>
                  </div>
                </div>

                <div className="pl-16 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Oct 2024 – Dec 2024</span>
                  </div>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <li>Developed a responsive and user-friendly frontend using React.js and Tailwind CSS.</li>
                    <li>Built and optimized backend services using Node.js and MongoDB for efficient data handling.</li>
                    <li>Integrated AI models and external APIs to enhance overall application functionality.</li>
                    <li>Deployed and maintained the platform ensuring high performance, scalability, and security.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications Block */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-primary to-purple-500 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Certifications</h3>
                    <p className="text-muted-foreground">Upskilling & Learning</p>
                  </div>
                </div>

                <div className="pl-16 space-y-6">
                  <div className="space-y-1">
                    <h4 className="font-medium">Blockchain Basics</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Coursera (March 2024)
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium">React JS</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Infosys SpringBoard (Sept 2024)
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium">JavaScript</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Infosys SpringBoard (April 2025)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
