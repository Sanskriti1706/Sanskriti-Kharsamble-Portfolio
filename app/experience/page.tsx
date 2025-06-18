"use client"

import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"
import { AnimatedBackground } from "@/components/animated-background"

const experiences = [
  {
    title: "Marketing Graduate Assistant - Residential Life",
    company: "Indiana State University",
    location: "Terre Haute, IN",
    duration: "October 2024 - May 2025",
    description: "Spearheaded digital transformation and cross-functional collaboration for university marketing and housing initiatives.",
    highlights: [
      "Spearheaded the development of a Java-based content management system that reduced manual updates on internal tools by 38% and improved load time by 22% using Spring Boot and Thymeleaf.",
      "Built RESTful APIs in Spring Boot to connect internal databases (MySQL) with React dashboards used by 6+ departments, enhancing decision-making and transparency.",
      "Refactored legacy email automation scripts using Java and integrated third-party APIs (SendGrid), increasing campaign delivery efficiency by 31%.",
      "Led cross-functional collaboration between marketing, housing, and IT teams to modernize web modules using JavaScript and React, reducing bounce rates by 18%.",
      "Designed and implemented reusable UI components with JavaScript, HTML/CSS, and Adobe Creative Suite that scaled across 4 university microsites.",
      "Conducted A/B testing on marketing strategies and analyzed user engagement trends, contributing to a 12% rise in mobile interactions."
    ]
  },
  {
    title: "Front-End Web Developer",
    company: "AdiFlex Technologies",
    location: "Mumbai, India",
    duration: "June 2022 - January 2023",
    description: "Directed and delivered robust full-stack solutions for enterprise admin panels and analytics dashboards.",
    highlights: [
      "Directed the full-stack development of an enterprise admin panel using Spring Boot (backend) and React.js (frontend), resulting in a 42% improvement in user onboarding speed.",
      "Developed scalable, reusable RESTful services using Java and Spring MVC to power dashboard analytics, reducing data fetch latency by 27%.",
      "Integrated MongoDB with backend microservices and implemented caching strategies, improving overall performance for high-traffic components."
    ]
  },
  {
    title: "Python Developer Intern",
    company: "Sahu Technologies",
    location: "Remote",
    duration: "July 2021 - Dec 2021",
    description: "Engineered backend solutions and microservices for financial and internal tooling platforms.",
    highlights: [
      "Designed and implemented RESTful APIs using Java Spring Boot alongside Python-Flask microservices to optimize cross-platform integration for internal tools.",
      "Built backend logic for a financial reporting module with Spring Data JPA and PostgreSQL, reducing query response times by 45%.",
      "Collaborated with frontend developers to expose APIs via Swagger and Postman for seamless testing and integration.",
      "Assisted in transitioning core services from monolithic architecture to microservices using Spring Boot, Docker, and Jenkins (CI/CD), improving deployment reliability."
    ]
  },
  {
    title: "Business Growth Intern",
    company: "Younity.in",
    location: "New Delhi, Delhi",
    duration: "April 2021 - May 2021",
    description: "Drove technical and content initiatives to boost engagement, SEO, and content delivery for a fast-growing startup.",
    highlights: [
      "Developed a blog recommendation engine using Spring Boot and MySQL, increasing average content visibility by 28% through intelligent keyword mapping.",
      "Contributed to frontend updates using Angular and Bootstrap for content-heavy landing pages, improving page load speeds by 35%.",
      "Performed market analysis using Java-based parsers and created structured reports that influenced long-term SEO strategy.",
      "Drafted and edited over 10 technical blog pieces based on trend analysis, reaching an audience of over 50,000 monthly readers."
    ]
  }
]

export default function ExperiencePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-white">
      <AnimatedBackground />
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-base text-gray-400 max-w-3xl mx-auto font-['__inter_20b187']">
              A journey through my professional experiences, from internships to full-time roles, showcasing growth and impact.
            </p>
          </motion.div>

          <div ref={ref} className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-pink-400 font-semibold mb-4">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-pink-400 text-sm mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        {/* <p className="text-pink-400 font-bold mb-4">{exp.description}</p> */}
                        <ul className="list-disc pl-6 space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-400 ml-2">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
