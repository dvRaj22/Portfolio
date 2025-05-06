"use client"

import React, { useEffect, useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdOutlineSchool } from "react-icons/md"
import { useTheme } from "next-themes" 
import { motion } from "framer-motion"  


const WorkIcon = () => <MdOutlineSchool />

const education = [
  {
    id: 1,
    role: "Bachelor of Technology - BTech, Computer Science and Engineering",
    company: "Noida Institute of Engineering and Technology",
    date: "July 2022 - July 2026",
    desc: "Pursuing core subjects like Data Structures, Operating Systems, DBMS, and Web Development while building real-world projects. Engaged in research exploring the impact of Data Pre-Processing on Machine Learning Model performance using publicly available datasets.",
    skills: ["OS", "Java", "MERN", "DBMS"],
  },
  {
    id: 2,
    role: "Intermediate 12th Grade",
    company: "Mount Assisi School (ICSE)",
    date: "July 2019 - July 2021",
    desc: "Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics. Actively participated in academic and extracurricular activities, showcasing a strong foundation in computer science and leadership.",
    skills: ["Python", "Computer Science", "Leadership"],
  },
]

const EducationCard = ({ edu }) => (
  <div className="p-2">
    <h3 className="text-xl font-bold">{edu.role}</h3>
    <p className="text-sm text-muted-foreground">{edu.company}</p>
    <p className="text-sm text-muted-foreground mb-2">{edu.date}</p>
    <p className="text-sm">{edu.desc}</p>
    {edu.skills?.length > 0 && (
      <div className="mt-2">
        <h4 className="font-medium text-sm">Skills:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {edu.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
)

const Education = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevents hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme
  const lineColor = currentTheme === "light" ? "#2196F3" : "#374151"

  return (
    <div id="education" className="px-3 pt-0 md:pt-20">
     <motion.div className="text-center mb-16" style={{ opacity: 1, y: 0 }}>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
  >
    Education
  </motion.h2>

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "100px" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8"
  />

  <motion.h3
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
    className="text-lg text-muted-foreground max-w-2xl mx-auto"
  >
    My journey through education
  </motion.h3>
</motion.div>

      <VerticalTimeline lineColor={lineColor}>
        {education.map((edu) => (
          <VerticalTimelineElement
            key={edu.id}
            visible={true}
            contentStyle={{
              background: "transparent",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(33, 150, 243, 0.3)",
              color: "inherit",
            }}
            contentArrowStyle={{ borderRight: "12px solid #2196F3" }}
            iconStyle={{
              background: "#2196F3",
              color: "#fff",
            }}
            icon={<WorkIcon />}
          >
            <EducationCard edu={edu} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <div className="h-20 w-full" />
    </div>
  )
}

export default Education
