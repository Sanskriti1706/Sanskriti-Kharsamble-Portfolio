"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProjects = [
  {
    title: "Rutezz - Smart India Hackathon Winner",
    description:
      "All India Rank 1 winning solution for offline digital payments using Bluetooth, NFC, and Wi-Fi. Engineered secure peer-to-peer transactions for areas with poor internet connectivity.",
    tech: ["Android", "Firebase", "AWS EC2", "Java", "Nearby API"],
    image: "/placeholder.svg?height=300&width=500",
    github: "#",
    demo: "#",
  },
  {
    title: "Arcade Paradise",
    description:
      "Social-enabled gaming platform with integrated leaderboard, chat functionality, and responsive design. Built with modern full-stack technologies.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg?height=300&width=500",
    github: "#",
    demo: "#",
  },
  {
    title: "Medical Supplies Delivery Drone",
    description:
      "UAV capable of delivering up to 1kg of medical supplies with GPS navigation, real-time tracking dashboard, and fail-safe landing system.",
    tech: ["Arduino", "React", "Firebase", "3D Printing", "GPS"],
    image: "/placeholder.svg?height=300&width=500",
    github: "#",
    demo: "#",
  },
]

export function ProjectShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-slate-900"
                >
                  <Link href={project.github}>
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                  <Link href={project.demo}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
