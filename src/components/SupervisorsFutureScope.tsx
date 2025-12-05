"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  GraduationCap, 
  Lightbulb,
  Blocks,
  Brain,
  Smartphone,
  Globe,
  Database,
  Target
} from "lucide-react";

const supervisors = [
  {
    name: "Prof. (Dr.) Arijeet Ghosh",
    role: "Project Supervisor",
    expertise: "IoT Systems & Smart Technologies"
  },
  {
    name: "Prof. Apurba Nandi",
    role: "Project Supervisor",
    expertise: "Machine Learning & Data Analytics"
  },
  {
    name: "Prof. (Dr.) Avik Kr. Das",
    role: "Project Supervisor",
    expertise: "Aquaculture & Biotechnology"
  }
];

const futureEnhancements = [
  {
    icon: Blocks,
    title: "Blockchain Integration",
    description: "Transparent supply chain tracking from farm to market with immutable records",
    impact: "Enhanced traceability and consumer trust"
  },
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Species-specific health monitoring and disease prediction with deep learning",
    impact: "Personalized care for different fish species"
  },
  {
    icon: Globe,
    title: "Ocean-Based Expansion",
    description: "Extend technology to offshore and ocean-based aquaculture operations",
    impact: "Scalable solution for marine farming"
  },
  {
    icon: Smartphone,
    title: "AR Mobile App",
    description: "Augmented reality visualization of underwater conditions and fish health",
    impact: "Immersive monitoring experience"
  },
  {
    icon: Database,
    title: "Government Integration",
    description: "Connect with national fisheries databases for policy compliance and reporting",
    impact: "Streamlined regulatory compliance"
  },
  {
    icon: Target,
    title: "Precision Aquaculture",
    description: "Individual fish tracking and personalized feeding using computer vision",
    impact: "Maximize growth efficiency"
  }
];

export default function SupervisorsFutureScope() {
  return (
    <section id="supervisors-future" className="py-20 px-4 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Supervisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Project Supervisors</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Academic Guidance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert supervision from distinguished faculty members with diverse expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supervisors.map((supervisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl smooth-transition border-2 hover:border-blue-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {supervisor.name}
                    </h3>
                    
                    <Badge className="mb-3 bg-blue-100 text-blue-700 border border-blue-300">
                      {supervisor.role}
                    </Badge>
                    
                    <p className="text-sm text-gray-600">
                      {supervisor.expertise}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* HOD Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Card className="glass-blue border-2 border-cyan-200">
              <CardContent className="p-6 text-center">
                <p className="text-gray-700">
                  <strong>Head of Department:</strong> Prof. (Dr.) Sandip Mandal
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Department of Computer Science & Engineering
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Future Scope Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6">
              <Lightbulb className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">Innovation Roadmap</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Future Enhancements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expanding horizons with cutting-edge technologies for next-generation aquaculture solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEnhancements.map((enhancement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl smooth-transition border-2 hover:border-cyan-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                      <enhancement.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {enhancement.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {enhancement.description}
                    </p>
                    
                    <div className="flex items-start gap-2">
                      <Target className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-cyan-700 font-medium">
                        {enhancement.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
