"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Server, Palette, Wrench, Zap, ArrowRight, MessageSquare, ExternalLink, Cable } from "lucide-react"
import Link from "next/link"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    iconColor: "text-white",
    iconBgClass: "bg-purple-600",
    gradientColor: "bluePurple",
    description: "Building responsive and interactive user interfaces with modern web technologies.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Redux",
      "Material UI",
      "Chakra UI",
      "Styled Components",
      "SASS/SCSS",
      "Framer Motion",
      "Storybook",
      "Webpack",
      "Vite",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    iconColor: "text-white",
    iconBgClass: "bg-orange-500",
    gradientColor: "yellowOrange",
    description: "Developing robust and scalable server-side applications and APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "Spring Boot",
      "Django",
      "FastAPI",
      "NestJS",
      "Flask",
      "JWT Auth",
      "OAuth",
      "Microservices",
      "Socket.io",
      "Apollo Server",
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    iconColor: "text-white",
    iconBgClass: "bg-green-500",
    gradientColor: "green",
    description: "Designing, managing, and optimizing various database systems for efficient data storage.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase",
      "Prisma",
      "SQLite",
      "Supabase",
      "Cassandra",
      "DynamoDB",
      "Elasticsearch",
      "TypeORM",
      "Mongoose",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    iconColor: "text-white",
    iconBgClass: "bg-yellow-600",
    gradientColor: "yellow",
    description: "Automating development workflows and managing infrastructure for seamless deployments.",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Linux",
      "Jenkins",
      "Kubernetes",
      "GitHub Actions",
      "Azure DevOps",
      "Nginx",
      "Netlify",
      "Vercel",
      "Bash/Shell",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana"
    ],
  },
  {
    title: "UI/UX Design Principles",
    icon: Palette,
    iconColor: "text-white",
    iconBgClass: "bg-pink-600",
    gradientColor: "pink",
    description: "Crafting intuitive and aesthetically pleasing user experiences.",
    skills: [
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "UI Components",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "Design Systems",
      "Zeplin",
      "InVision",
      "Accessibility (a11y)",
      "Color Theory",
      "Typography",
    ],
  },
  {
    title: "Other Technologies & AI",
    icon: Zap,
    iconColor: "text-white",
    iconBgClass: "bg-cyan-600",
    gradientColor: "cyan",
    description: "Exploring and implementing cutting-edge technologies and AI solutions.",
    skills: [
      "Temporal",
      "Model Context Protocol (MCP)",
      "Power Automate",
      "Multi-vector Retrieval",
      "Hybrid Lexical-Semantic Search",
      "Azure Bot Service",
      "OpenAI",
      "LangChain",
      "Pinecone",
    ],
  },
]

export default function SkillsPage() {
  const getGradientColors = (color: string) => {
    switch (color) {
      case 'bluePurple': return '#818cf8, #c084fc';
      case 'yellowOrange': return '#fcd34d, #f97316';
      case 'green': return '#34d399, #10b981';
      case 'purple': return '#a78bfa, #e879f9';
      case 'blue': return '#60a5fa, #3b82f6';
      case 'pink': return '#f472b6, #ec4899';
      case 'cyan': return '#22d3ee, #67e8f9';
      default: return '#a78bfa, #e879f9';
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative h-full flex"
              >
                <div className="group relative w-full rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-[1.5px] transition-all duration-300 hover:scale-[1.01] overflow-hidden"
                  style={{ backgroundImage: `linear-gradient(to right, ${getGradientColors(category.gradientColor)})` }}>
                  <Card className="bg-[#0a0a0a] border-none rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-lg backdrop-blur-md transition-all duration-300 h-full w-full flex flex-col">
                    <CardContent className="p-8 relative z-20 flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${category.iconBgClass}`}>
                        {category.icon && <category.icon className={`h-6 w-6 ${category.iconColor}`} />}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{category.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center justify-center h-8 rounded-full bg-white/10 text-gray-200 px-4 text-sm font-medium transition-colors duration-200 hover:bg-white/20 hover:text-white border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}