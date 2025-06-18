"use client"

import { motion } from "framer-motion"
import { Award, Cloud, Code, Cpu, GraduationCap, Sparkles } from "lucide-react"

const focusAreas = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Expertise in React, Node.js, and Spring Boot for scalable applications"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "AWS certified professional with focus on serverless and microservices"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Implementing ML models and AI solutions in production environments"
  }
]

const achievements = [
  {
    icon: Award,
    title: "Smart India Hackathon 2022",
    description: "All India Rank 1 - Developed an AI-powered healthcare solution"
  },
  {
    icon: Sparkles,
    title: "Research Publication",
    description: "Published paper on Machine Learning in Healthcare Systems"
  }
]

export function AboutSection() {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Key Focus Areas */}
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            >
              Key Focus Areas
            </motion.h2>
            <div className="grid gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <area.icon className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                    <p className="text-gray-400 text-sm">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Masters in Computer Science</h3>
                    <p className="text-gray-400">Indiana State University</p>
                    <p className="text-sm text-gray-500">2022 - Present</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Recent Achievements
              </h2>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <achievement.icon className="w-6 h-6 text-purple-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 