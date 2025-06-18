"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Medal, Star, Calendar, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const awards = [
  {
    title: "Winner - Smart India Hackathon 2022",
    organization: "AICTE, Startup India, DPIIT, Ministry of Commerce and Industry",
    year: "2022",
    rank: "All India Rank 1",
    category: "National Competition",
    description:
      "Spearheaded Team Rutezz in the national-level AICTE Smart India Hackathon (Software Edition), solving problem statement KK183 for secure digital payment applications.",
    achievements: [
      "Led a team of 6 members to national victory",
      "Engineered secure digital payment solution for offline transactions",
      "Authored top-ranked technical proposal surpassing hundreds of teams",
      "Demonstrated innovation in fintech security, UI/UX, and system design",
      "Earned recognition from government evaluators and industry experts",
    ],
    impact:
      "Addressed real-world challenges of digital payments in areas with poor connectivity, potentially benefiting millions of users across India.",
    technologies: ["Android", "Firebase", "AWS EC2", "Java", "Nearby API", "Bluetooth", "NFC"],
    icon: Trophy,
    color: "text-yellow-400",
    bgColor: "bg-yellow-600/20",
    borderColor: "border-yellow-600/30",
  },
]

const recognitions = [
  {
    title: "Top Technical Proposal",
    organization: "Ministry of Commerce and Industry",
    description: "Submitted the highest-ranked technical proposal in Smart India Hackathon 2022",
    icon: Star,
    color: "text-blue-400",
  },
  {
    title: "Innovation in Fintech Security",
    organization: "Government Evaluators Panel",
    description: "Recognized for innovative approach to secure offline digital transactions",
    icon: Medal,
    color: "text-green-400",
  },
  {
    title: "Outstanding Team Leadership",
    organization: "AICTE Smart India Hackathon",
    description: "Led cross-functional team of 6 developers to national championship",
    icon: Users,
    color: "text-purple-400",
  },
  {
    title: "Academic Excellence",
    organization: "Indiana State University",
    description: "Maintaining excellent academic standing in Masters program",
    icon: Award,
    color: "text-orange-400",
  },
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Awards & Achievements</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for innovation, leadership, and technical excellence in national competitions and academic
            pursuits.
          </p>
        </motion.div>

        {/* Major Award */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 ${award.bgColor} rounded-xl`}>
                          <IconComponent className={`h-8 w-8 ${award.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">{award.title}</h2>
                            <Badge className={`${award.bgColor} ${award.color} ${award.borderColor} w-fit`}>
                              {award.rank}
                            </Badge>
                          </div>
                          <p className="text-green-400 font-semibold text-lg mb-2">{award.organization}</p>
                          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{award.year}</span>
                            </div>
                            <Badge variant="outline" className="border-white/20 text-white">
                              {award.category}
                            </Badge>
                          </div>
                          <p className="text-gray-300 mb-6">{award.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
                          <ul className="space-y-2">
                            {award.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {award.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="border-white/20 text-white text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4 mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Impact</h3>
                        <p className="text-gray-300 text-sm">{award.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        {/* Other Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Other Recognitions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => {
              const IconComponent = recognition.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <IconComponent className={`h-6 w-6 ${recognition.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">{recognition.title}</h3>
                          <p className={`font-semibold mb-2 ${recognition.color}`}>{recognition.organization}</p>
                          <p className="text-gray-300 text-sm">{recognition.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-yellow-600/20 to-purple-600/20 border-white/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Achievement Highlights</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-yellow-400 mb-2">#1</h3>
                  <p className="text-gray-300">National Rank</p>
                  <p className="text-gray-400 text-sm">All India Competition</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-400 mb-2">6</h3>
                  <p className="text-gray-300">Team Members</p>
                  <p className="text-gray-400 text-sm">Successfully Led</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">100+</h3>
                  <p className="text-gray-300">Teams Defeated</p>
                  <p className="text-gray-400 text-sm">National Competition</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">2022</h3>
                  <p className="text-gray-300">Victory Year</p>
                  <p className="text-gray-400 text-sm">Smart India Hackathon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
