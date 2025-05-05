"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section id="about" ref={sectionRef} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
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
              About Me
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
              I'm a passionate Web Developer with experience in full-stack development.
              Currently pursuing B.Tech at Noida Institute of Engineering and Technology, I specialize in building
              responsive web applications and solving complex algorithmic problems.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="flex flex-col items-center relative z-10">
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <p className="text-muted-foreground text-center">+91 8877600969</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="flex flex-col items-center relative z-10">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-muted-foreground text-center">rajdivyam730@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="flex flex-col items-center relative z-10">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Location</h3>
                  <p className="text-muted-foreground text-center">Greater Noida, UP, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

