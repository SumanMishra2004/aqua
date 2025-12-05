"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, User } from "lucide-react";

const teamMembers = [
  { name: "Anup Dutta", enrollment: "12022002029086" },
  { name: "Debanjan Karmakar", enrollment: "12022002029097" },
  { name: "Kiran Das", enrollment: "12022002029104" },
  { name: "Muskan Parvin", enrollment: "12022002029105" },
  { name: "Poulami Sinha", enrollment: "12022002029108" },
  { name: "Pranati Mondal", enrollment: "12022002029061" },
  { name: "Sarmistha Pal", enrollment: "12022002029131" },
  { name: "Soumyojit Sen Gupta", enrollment: "12022002029127" },
  { name: "Subhajit Santra", enrollment: "12022002029115" },
  { name: "Suman Mishra", enrollment: "12022002029031" }
];

export default function ResearchTeam() {
  return (
    <section id="research-team" className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Our Research Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Meet the Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of 10 students from CSE specializing in IoT, Computer Science, 
            and Biotechnology, working together to revolutionize aquaculture technology
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl smooth-transition border-2 hover:border-blue-300 group">
                <CardContent className="p-6 text-center">
                  {/* Avatar Circle */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-white text-blue-600 border border-blue-300 text-xs">
                        CSE
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">
                    {member.name}
                  </h3>
                  
                  <p className="text-xs text-gray-500 font-mono">
                    {member.enrollment}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Composition Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="glass-blue border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Team Collaboration</h3>
                  <p className="text-sm text-gray-600">
                    Cross-functional expertise in IoT, Machine Learning, and Aquaculture
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Research Focus</h3>
                  <p className="text-sm text-gray-600">
                    Sustainable technology solutions for modern aquaculture challenges
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Badge className="text-2xl font-bold">10</Badge>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Team Members</h3>
                  <p className="text-sm text-gray-600">
                    B.Tech students from UEM Kolkata working on final year project
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
