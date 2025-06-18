"use client"

import { motion } from "framer-motion"

const techStack = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Spring Boot",
  "Node.js",
  "AWS",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Jenkins",
  "Hibernate",
  "Angular",
  "Bootstrap",
]

export function TechStackSlider() {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-medium">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
