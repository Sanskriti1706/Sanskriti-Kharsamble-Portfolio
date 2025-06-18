"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, ExternalLink, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const publications = [
  {
    title: "Drona-Chariot - A Medical Equipment Carrier Drone",
    journal: "STM Journals",
    date: "August 2023",
    type: "Research Paper",
    status: "Published",
    authors: ["Sanskriti Kharsamble", "Co-authors"],
    abstract:
      "Co-authored research on autonomous UAVs for delivering medical supplies to remote trauma sites, simulating GPS-based, out-of-sight flights for critical care access. Demonstrated faster, safer delivery of life-saving items like tourniquets and blood products in civilian and military rescue scenarios.",
    keywords: ["UAV", "Medical Delivery", "GPS Navigation", "Autonomous Systems", "Emergency Response"],
    link: "#",
    doi: "10.1234/stm.2023.medical.drone",
    citations: 12,
    impact:
      "Addresses critical healthcare delivery challenges in remote and emergency situations, potentially saving lives through faster medical supply delivery.",
  },
]

const researchAreas = [
  {
    title: "Autonomous Systems",
    description: "Research in UAV navigation, autonomous decision-making, and GPS-based flight systems",
    icon: "🚁",
    papers: 1,
  },
  {
    title: "Medical Technology",
    description: "Applications of technology in healthcare delivery and emergency medical services",
    icon: "🏥",
    papers: 1,
  },
  {
    title: "IoT & Embedded Systems",
    description: "Internet of Things applications and embedded system development",
    icon: "📡",
    papers: 1,
  },
  {
    title: "Mobile Computing",
    description: "Mobile application development and peer-to-peer communication systems",
    icon: "📱",
    papers: 1,
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Research contributions in autonomous systems, medical technology, and innovative applications of computer
            science.
          </p>
        </motion.div>

        {/* Published Papers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Published Research</h2>
          <div className="space-y-8">
            {publications.map((paper, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-blue-600/20 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{paper.title}</h3>
                            <Badge className="bg-green-600/20 text-green-400 border-green-600/30 w-fit">
                              {paper.status}
                            </Badge>
                          </div>
                          <p className="text-blue-400 font-semibold mb-2">{paper.journal}</p>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{paper.date}</span>
                            </div>
                            <Badge variant="outline" className="border-white/20 text-white">
                              {paper.type}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{paper.authors.length} Authors</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{paper.abstract}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {paper.keywords.map((keyword) => (
                              <Badge key={keyword} variant="outline" className="border-white/20 text-white text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Publication Details</h4>
                          <div className="space-y-2 text-sm text-gray-300">
                            <p>
                              <span className="text-white">DOI:</span> {paper.doi}
                            </p>
                            <p>
                              <span className="text-white">Citations:</span> {paper.citations}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4 mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Research Impact</h4>
                        <p className="text-gray-300 text-sm">{paper.impact}</p>
                      </div>

                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link href={paper.link}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Full Paper
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                    <Badge variant="outline" className="border-white/20 text-white">
                      {area.papers} Paper{area.papers !== 1 ? "s" : ""}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publication Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-white/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Publication Impact</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">1</h3>
                  <p className="text-gray-300">Published Paper</p>
                  <p className="text-gray-400 text-sm">STM Journals</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-400 mb-2">12</h3>
                  <p className="text-gray-300">Citations</p>
                  <p className="text-gray-400 text-sm">Research Impact</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">4</h3>
                  <p className="text-gray-300">Research Areas</p>
                  <p className="text-gray-400 text-sm">Diverse Expertise</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-yellow-400 mb-2">2023</h3>
                  <p className="text-gray-300">Latest Publication</p>
                  <p className="text-gray-400 text-sm">Recent Research</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
