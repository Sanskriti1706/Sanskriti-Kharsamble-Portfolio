"use client"

import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Briefcase, Calendar, Cloud, Code2, Cpu, GraduationCap, MapPin, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const focusAreas = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expertise in React, Node.js, and Spring Boot for scalable applications",
    color: "text-purple-400"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "AWS certified professional with focus on serverless and microservices",
    color: "text-blue-400"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Implementing ML models and AI solutions in production environments",
    color: "text-green-400"
  }
]

const achievements = [
  {
    icon: Award,
    title: "Smart India Hackathon 2022",
    description: "All India Rank 1 - Developed an application to ensure security in digital payments while promoting ease of doing business payments.",
    color: "text-yellow-400"
  },
  {
    icon: Sparkles,
    title: "Research Publication",
    description: [
      "I co-authored a research paper titled \"Drona-Chariot: A Medical Equipment Carrier Drone\", focusing on autonomous UAV delivery of critical medical supplies to inaccessible trauma zones. Our drone system successfully simulated out-of-sight missions using GPS-coordinates, delivering items like tourniquets and blood products in emergency scenarios.",
      "This innovation supports rapid, risk-free aid in both military and civilian operations, bridging critical gaps in remote medical care."
    ],
    color: "text-pink-400"
  }
]

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-base text-gray-400 max-w-3xl mx-auto font-['__inter_20b187']">
              A passionate full-stack developer crafting innovative solutions with modern technologies.
            </p>
          </motion.div>

          {/* Main Content */}
          <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Column - About */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-purple-400" />
                    About
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-base font-['__inter_20b187']"
                    >
                      Hey there! 👋 I'm Sanskriti — a code-loving, problem-solving, innovation-hunting developer with a spark for turning ideas into impact.<br/><br/>
                      Currently pursuing my Master's in Computer Science at Indiana State University, I've worn multiple hats: from engineering offline peer-to-peer payment apps that won All India Rank 1 at the Smart India Hackathon, to crafting sleek UIs that make users stay a little longer (and smile a little more).<br/><br/>
                      My toolkit? Java, React, Spring Boot, AWS, MongoDB, and a deep love for meaningful design and clean code. Whether it's flying medical drones, building intelligent traffic systems, or scaling cloud-powered dashboards, I bring creativity, structure, and intent to every project.<br/><br/>
                      I believe great software isn't just about code — it's about storytelling, accessibility, and making lives simpler. If you're looking for someone who codes with purpose and designs with empathy, let's connect — I'm all ears (and keyboard).
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-blue-400" />
                    Experience
                  </h2>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Marketing Graduate Assistant - Residential Life</h3>
                      <p className="text-blue-400 font-semibold mb-2">Indiana State University</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Terre Haute, IN</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>October 2024 - May 2025</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Front-End Web Developer</h3>
                      <p className="text-blue-400 font-semibold mb-2">AdiFlex Technologies</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Mumbai, India</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>June 2022 - January 2023</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Python Developer Intern</h3>
                      <p className="text-blue-400 font-semibold mb-2">Sahu Technologies</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Remote</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>July 2021 - Dec 2021</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Business Growth Intern</h3>
                      <p className="text-blue-400 font-semibold mb-2">Younity.in</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>New Delhi, Delhi</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>April 2021 - May 2021</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Graphic Designer</h3>
                      <p className="text-blue-400 font-semibold mb-2">Treemendous · Freelance</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Bengaluru</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Jan 2022 - Mar 2022</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 text-left">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3 items-center">
                  <Code2 className="h-6 w-6 text-purple-400" />
                  Key Focus Areas
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {focusAreas.map((area, index) => (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <area.icon className={`h-7 w-7 ${area.color} mb-3`} />
                      <h3 className="text-lg font-medium text-white mb-1">{area.title}</h3>
                      <p className="text-gray-400 text-base">{area.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Grid */}
          <div className="space-y-8 mb-16">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8 text-left">
                  <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-purple-400" />
                    Education
                  </h2>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Master of Science in Computer Science</h3>
                      <p className="text-purple-400 font-semibold mb-2">Indiana State University</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Terre Haute, IN</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>August 2023 - May 2025</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Bachelor of Engineering in Computer Engineering</h3>
                      <p className="text-purple-400 font-semibold mb-2">University of Mumbai</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Mumbai, India</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>August 2019 - May 2023</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Awards and Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-10 text-left">
                  <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3 items-center">
                    <Award className="h-6 w-6 text-yellow-400" />
                    Awards & Achievements
                  </h2>
                  <div className="space-y-8">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                          <h3 className="text-xl font-bold text-white mb-0 leading-none">{achievement.title}</h3>
                        </div>
                        {Array.isArray(achievement.description) ? (
                          <div className="space-y-3">
                            {achievement.description.map((paragraph, idx) => (
                              <p key={idx} className="text-gray-400 text-base leading-relaxed">{paragraph}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400 text-base leading-relaxed">{achievement.description}</p>
                        )}
                        {achievement.title === "Smart India Hackathon 2022" && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white rounded-full text-xs mt-4 inline-flex items-center gap-1 px-3 py-1 transition-all duration-300 hover:scale-105"
                          >
                            <a
                              href="https://www.linkedin.com/in/sanskriti-kharsamble-037935182/overlay/1711027557609/single-media-viewer/?profileId=ACoAACs1YOsBeOZxoovc5-wLP5ZWjsBJRhD9nL4"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Certificate
                            </a>
                          </Button>
                        )}
                        {achievement.title === "Research Publication" && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white rounded-full text-xs mt-4 inline-flex items-center gap-1 px-3 py-1 transition-all duration-300 hover:scale-105"
                          >
                            <a
                              href="https://journals.stmjournals.com/ijcsl/article=2023/view=112138/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Publication
                            </a>
                          </Button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}