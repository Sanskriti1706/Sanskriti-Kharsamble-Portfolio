"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative font-['__inter_20b187']">
      <AnimatedBackground />

      <div className="relative z-10 pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent font-['__inter_20b187']">
              Get In Touch
            </h1>
            <p className="text-base text-gray-400 max-w-3xl mx-auto font-['__inter_20b187']">
              Ready to collaborate on innovative projects or discuss opportunities in software engineering and cloud architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information (left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-600/20 rounded-lg">
                        <Mail className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="mb-0 text-sm text-gray-400">Email</p>
                        <Link
                          href="mailto:sanskritikharsamble@gmail.com"
                          className="text-base font-medium text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          sanskritikharsamble@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="mb-0 text-sm text-gray-400">Phone</p>
                        <Link href="tel:812-263-3223" className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors">
                          812-263-3223
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-600/20 rounded-lg">
                        <MapPin className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="mb-0 text-sm text-gray-400">Location</p>
                        <p className="text-base font-medium text-gray-300">Chicago, IL (Ready to Relocate)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
                  <div className="space-x-4 flex items-center">
                    <Link href="https://github.com/Sanskriti1706" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Github className="h-6 w-6 text-white" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sanskriti-kharsamble-037935182/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Linkedin className="h-6 w-6 text-blue-400" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form (right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 block">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white mb-2 block">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] focus:border-purple-400"
                        placeholder="Tell me about your project or opportunity..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white rounded-full transition-all duration-300 text-base font-['__inter_20b187'] tracking-wide w-full px-8 py-6"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
