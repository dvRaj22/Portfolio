"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Code2, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50"></div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <Link
            href="https://github.com/dvRaj22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors interactive"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/divyamraj22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors interactive"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://leetcode.com/u/dvRaj22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors interactive"
          >
            <Code2 className="h-6 w-6" />
            <span className="sr-only">LeetCode</span>
          </Link>
          <Link
            href="mailto:rajdivyam730@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors interactive"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Divyam Raj. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

