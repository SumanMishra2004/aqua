"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cpu, Wifi, Cloud, Brain, Gauge, Zap } from "lucide-react";

const techStack = [
  {
    category: "IoT Sensors",
    icon: Gauge,
    color: "#1E88E5",
    technologies: [
      "pH Sensor",
      "Temperature Sensor",
      "DO Sensor",
      "Turbidity Sensor",
      "Water Level Sensor",
    ],
  },
  {
    category: "Hardware",
    icon: Cpu,
    color: "#00ACC1",
    technologies: ["Raspberry Pi 4", "Arduino Uno", "ESP32", "Relay Modules"],
  },
  {
    category: "Connectivity",
    icon: Wifi,
    color: "#26C6DA",
    technologies: ["LoRa", "GSM Module", "WiFi", "Bluetooth"],
  },
  {
    category: "Machine Learning",
    icon: Brain,
    color: "#4FC3F7",
    technologies: [
      "Random Forest",
      "Support Vector Machine",
      "Convolutional Neural Networks",
      "TensorFlow",
      "Scikit-learn",
      "Python",
    ],
  },
  {
    category: "Cloud Platform",
    icon: Cloud,
    color: "#0A4D8C",
    technologies: [, "MongoDB", "REST API", "MQTT Protocol"],
  },
  {
    category: "Power System",
    icon: Zap,
    color: "#1E88E5",
    technologies: ["Solar Panels", "Battery Backup", "Power Management"],
  },
];

export default function TechnologyStack() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technologies for reliability and performance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <motion.div key={stack.category} variants={itemVariants}>
                <Card className="glass-blue border-2 p-6 h-full hover:shadow-2xl smooth-transition hover:-translate-y-2 group">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${stack.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: stack.color }} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 smooth-transition">
                      {stack.category}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 text-sm font-medium smooth-transition cursor-default"
                          style={{
                            backgroundColor: `${stack.color}15`,
                            color: stack.color,
                            borderColor: `${stack.color}30`,
                          }}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-6 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "25+", label: "Technologies" },
            { value: "90%+", label: "Accuracy" },
            { value: "100%", label: "Open Source" },
            { value: "40%", label: "Cost Savings" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass-blue rounded-2xl p-6 text-center border-2 smooth-transition"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
