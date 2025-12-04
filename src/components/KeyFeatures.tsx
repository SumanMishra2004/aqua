"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  Brain,
  Droplets,
  Wifi,
  Zap,
  AlertTriangle,
  Server,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "24/7 continuous monitoring of water quality parameters with IoT sensors",
    color: "#1E88E5",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "AI/ML Analytics",
    description: "Machine Learning models predict trends and optimize conditions automatically",
    color: "#00ACC1",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Droplets,
    title: "Automated Feeding",
    description: "Smart feeding system reduces waste by 30% while maintaining optimal nutrition",
    color: "#26C6DA",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Server,
    title: "Waste Management",
    description: "Intelligent waste detection and removal system for cleaner environments",
    color: "#4FC3F7",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Response",
    description: "Instant alerts and automated responses to critical parameter changes",
    color: "#0A4D8C",
    gradient: "from-blue-700 to-blue-800",
  },
  {
    icon: Wifi,
    title: "Remote Access",
    description: "Monitor and control your system from anywhere via cloud platform",
    color: "#1E88E5",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Solar Powered",
    description: "40% energy savings with sustainable solar power integration",
    color: "#26C6DA",
    gradient: "from-cyan-500 to-blue-400",
  },
];

export default function KeyFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> for Smart
            Aquaculture
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation and monitoring capabilities designed for
            modern aquatic farming
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full glass border-2 hover:shadow-2xl smooth-transition hover:-translate-y-2 group overflow-hidden relative">
                  {/* Animated Background on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color} 0%, transparent 100%)`,
                    }}
                  />

                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} floating`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 smooth-transition">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Ready to transform your aquaculture operations?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl smooth-transition"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
