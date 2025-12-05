"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  BookOpen,
  Award,
  Building2
} from "lucide-react";

export default function ProjectSummary() {
  return (
    <section id="project-summary" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm">
            B.Tech Final Year Project
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A comprehensive research initiative by CSE students specializing in IoT, Computer Science, and Biotechnology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass-blue border-2 border-blue-200 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Institution */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 smooth-transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Institution</h3>
                    <p className="text-sm text-gray-600">University of Engineering & Management, Kolkata</p>
                  </div>
                </motion.div>

                {/* Department */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 smooth-transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Department</h3>
                    <p className="text-sm text-gray-600">CSE (IoT, CS, BT)</p>
                  </div>
                </motion.div>

                {/* Academic Year */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 smooth-transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Academic Year</h3>
                    <p className="text-sm text-gray-600">2022-2026 (7th Semester)</p>
                  </div>
                </motion.div>

                {/* Team Size */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 smooth-transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Team Size</h3>
                    <p className="text-sm text-gray-600">10 Students</p>
                  </div>
                </motion.div>

                {/* Project Type */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 smooth-transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Project Type</h3>
                    <p className="text-sm text-gray-600">Bachelor of Technology Final Year Project</p>
                  </div>
                </motion.div>

                {/* Supervisors */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 smooth-transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Project Supervisors</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Prof. (Dr.) Arijeet Ghosh</p>
                      <p>Prof. Apurba Nandi</p>
                      <p>Prof. (Dr.) Avik Kr. Das</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-8 border-t border-blue-200"
              >
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline" className="border-blue-500 text-blue-700 px-4 py-2">
                    IoT Integration
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-700 px-4 py-2">
                    Machine Learning
                  </Badge>
                  <Badge variant="outline" className="border-blue-500 text-blue-700 px-4 py-2">
                    Sustainable Technology
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-700 px-4 py-2">
                    Real-time Analytics
                  </Badge>
                  <Badge variant="outline" className="border-blue-500 text-blue-700 px-4 py-2">
                    Aquaculture Innovation
                  </Badge>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
