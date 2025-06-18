"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <p className="text-gray-400 text-lg mb-4 font-['__inter_20b187'] tracking-wider">Hi, my name is</p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 relative group font-['__inter_20b187'] tracking-tight"
          >
            <span className="relative inline-block transform transition-transform duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
                Sanskriti Kharsamble
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 relative font-['__inter_20b187'] tracking-wide"
          >
            <span className="relative inline-block">
              Full Stack Developer & Cloud Enthusiast
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-red-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed relative font-['__inter_20b187']"
          >
            <span className="relative inline-block">
              As a Master's student in Computer Science at Indiana State University, I specialize in Java, React, Spring Boot, and AWS. I was honored to lead my team to victory at the Smart India Hackathon 2022, securing All India Rank 1. With a passion for leveraging technology to solve real-world problems, I'm dedicated to creating innovative solutions that drive meaningful impact.
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 text-lg font-['__inter_20b187'] tracking-wide"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Nebula-like glowing balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full">
          {/* Original balls */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Additional nebula elements */}
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-40 left-40 w-56 h-56 bg-violet-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-10 left-60 w-80 h-80 bg-fuchsia-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-30 left-30 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="absolute bottom-50 left-50 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.8s' }} />
        </div>
      </div>
    </div>
  )
}
