"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, Code } from "lucide-react"

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section id="achievements" ref={sectionRef} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
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
              Achievements
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
              Recognition and accomplishments throughout my journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-primary to-purple-500 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Competitive Programming</h3>
                  </div>
                </div>

                <div className="pl-16 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        AIR 66 (Global Rank 403) in Codeforces Round 981 (Div. 3)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Codeforces Specialist (1498 rating, top 4% in India) | CodeChef 3-star (1609 rating)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Solved 1000+ DSA problems across multiple platforms including Leetcode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-primary to-purple-500 p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Competitions</h3>
                  </div>
                </div>

                <div className="pl-16 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Meta Hacker Cup 2024: Global Rank 2377 (AIR 553) in Round 1.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Model United Nations (MUN) 2023: Secured 3rd place as Russia's delegate.
                      </p>
                    </div>
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

