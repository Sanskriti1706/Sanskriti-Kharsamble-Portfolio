"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Arcade Paradise",
    description:
      "Designed and developed a responsive, social-enabled gaming platform with integrated leaderboard and chat functionality. Built RESTful APIs using Express and Node.js to handle user profiles, game stats, and achievements. Implemented MongoDB for data storage and integrated social login for user convenience. Focused on dynamic UX with smooth transitions and responsive layouts using Tailwind CSS.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/example/arcade-paradise",
    demo: "https://example.com/arcade-paradise",
    image: "/images/Arcade.png",
  },
  {
    title: "Locomotive JS Tutorial Hub",
    description:
      "Created a visually rich, single-page documentation site showcasing advanced Locomotive Scroll animations with custom animations and parallax effects. Utilized custom animations and parallax effects to enhance user interaction and modern web design practices. Hosted on Netlify with optimized SEO and mobile responsiveness for developer community access. Included code samples, demos, and structured navigation to improve educational value.",
    tech: ["HTML5", "CSS3", "JavaScript", "Locomotive Scroll", "Netlify"],
    github: "https://github.com/example/locomotive-js-tutorial",
    demo: "https://example.com/locomotive-js-tutorial",
    image: "/images/Locomotive.png",
  },
  {
    title: "Medical Supplies Delivery Drone",
    description:
      "Developed a UAV capable of delivering up to 1kg of medical supplies with GPS navigation, real-time tracking dashboard, and fail-safe landing system. Programmed GPS-based navigation using Arduino and integrated fail-safe landing system. Built a real-time tracking dashboard using React and Firebase to monitor drone location and delivery status. Designed and 3D-printed the drone chassis, ensuring aerodynamic structure and payload capacity.",
    tech: ["Arduino", "GPS", "React", "Node.js", "Firebase", "3D Printing"],
    github: "https://github.com/example/medical-drone",
    demo: "https://example.com/medical-drone",
    image: "/images/drone.jpg",
  },
  {
    title: "Rutezz – Winner, Smart India Hackathon 2022",
    description:
      "Led a team of 6 to victory in the AICTE Smart India Hackathon 2022, securing All India Rank 1 for solving a national-scale problem under the Ministry of Commerce and Industry. Engineered a peer-to-peer digital payment solution supporting offline transactions via Bluetooth, NFC, and Wi-Fi using the Nearby Connections API. Developed a secure mobile app enabling tokenized, encrypted offline transfers with seamless sync to cloud (Firebase) when internet is restored. Architected the backend on AWS EC2 for reliability and scalability, designed to handle updates from decentralized clients.",
    tech: ["Android", "Firebase", "Nearby API", "AWS EC2", "Java"],
    github: "https://github.com/example/rutezz",
    demo: "https://example.com/rutezz",
    image: "/images/rutezz.png",
  },
  {
    title: "Voice-Controlled Robotic Car",
    description:
      "Built a robotic car controlled through voice commands via Android app using Bluetooth communication. Programmed the Arduino microcontroller in C++ to interpret and execute directional commands. Designed a custom Android interface to capture voice input and transmit data to the car's microcontroller. Integrated sensors and manual override to ensure safety and maneuverability.",
    tech: ["Arduino", "C++", "Bluetooth Module", "Android App"],
    github: "https://github.com/example/robotic-car",
    demo: "https://example.com/robotic-car",
    image: "/images/robotic car.png",
  },
  {
    title: "Intelligent Traffic Management System",
    description:
      "Developed a smart traffic signal system that uses video processing to dynamically adjust light durations based on real-time traffic density. Utilized YOLOv3 and OpenCV for accurate vehicle detection from surveillance footage and displayed results via a Tkinter GUI. Integrated ThingSpeak cloud for real-time traffic analytics, enabling data-driven insights for smart urban planning.",
    tech: ["Python", "OpenCV", "YOLOv3", "Tkinter", "ThingSpeak"],
    github: "https://github.com/example/traffic-management",
    demo: "https://example.com/traffic-management",
    image: "/images/traffic.jpg",
  },
];

const badgeColors = [
  'bg-pink-500',
  'bg-purple-500',
  'bg-blue-500',
  'bg-cyan-500',
];

export default function ProjectsPage() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-['__inter_20b187']">
              Projects
            </h1>
            <p className="text-base text-gray-400 max-w-3xl mx-auto font-['__inter_20b187']">
              A showcase of innovative solutions, from award-winning hackathon projects to full-stack applications and
              research initiatives.
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <>
                <div className="w-full">
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row${index % 2 === 0 ? '-reverse' : ''} items-center min-h-[300px]`}
                  >
                    {/* Image Column */}
                    <div className={`relative w-full md:flex-[1.5] h-[340px] md:h-[400px] rounded-xl overflow-hidden shadow-xl group ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      {/* Glow effect */}
                      <div className="absolute inset-0 z-0 rounded-xl bg-purple-500/40 blur-2xl opacity-70 group-hover:opacity-90 transition duration-300" />
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover rounded-xl relative z-10 filter grayscale group-hover:filter-none transition duration-500"
                      />
                    </div>

                    {/* Content Column */}
                    <div className={`relative w-full md:flex-1 flex flex-col justify-center items-start text-left mt-6 md:mt-0 ${index % 2 === 0 ? 'md:pl-8 md:pr-0 md:mr-8' : 'md:pr-8 md:pl-0 md:ml-8'}`}>
                      <span className="text-pink-400 font-mono text-sm tracking-wide mb-1 md:mb-2">Featured Project</span>
                      <h3 className="text-white text-3xl font-bold font-['__inter_20b187'] mb-4">{project.title}</h3>
                      <div className="bg-gray-800/95 p-4 md:p-6 rounded-lg shadow-2xl border border-white/10 mb-4 relative">
                        <p className="text-gray-300 text-base font-['__inter_20b187'] leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-4 mt-4 w-full justify-start">
                          {project.tech.map((tech, i) => (
                            <Badge key={tech} className={`${badgeColors[i % badgeColors.length]} text-white text-xs px-3 py-1 rounded-full`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-6 absolute bottom-4 right-4">
                          {project.github !== '#' ? (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5 text-blue-200 hover:text-blue-300 transition" />
                            </Link>
                          ) : (
                            <span className="inline-flex items-center justify-center h-5 w-5 text-gray-500 opacity-50 cursor-not-allowed">
                              <Github className="h-5 w-5" />
                            </span>
                          )}
                          {project.demo !== '#' ? (
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-5 w-5 text-cyan-300 hover:text-cyan-400 transition" />
                            </Link>
                          ) : (
                            <span className="inline-flex items-center justify-center h-5 w-5 text-gray-500 opacity-50 cursor-not-allowed">
                              <ExternalLink className="h-5 w-5" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
