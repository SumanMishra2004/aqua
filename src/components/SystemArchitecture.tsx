"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Gauge, 
  Cpu, 
  Brain, 
  Zap, 
  ArrowRight, 
  Waves,
  Wifi,
  Antenna,
  GitBranch,
  Sun,
  Navigation,
  AlertCircle,
  Trash2
} from "lucide-react";

const architectureSteps = [
  {
    icon: Gauge,
    title: "IoT Sensor Network",
    description: "pH, Temperature, DO, Turbidity, Ammonia sensors with LoRa/GSM/Wi-Fi communication",
    details: ["pH Sensor: ±0.05 units", "Temperature: ±0.1°C", "Turbidity: ±5 NTU", "DO: ±0.2 mg/L"],
    color: "#1E88E5",
  },
  {
    icon: Cpu,
    title: "Real-Time Data Processing",
    description: "Raspberry Pi/Microcontroller processes data with threshold monitoring and cloud storage",
    details: ["Threshold monitoring", "Alert generation", "Cloud-based analytics", "Historical data storage"],
    color: "#00ACC1",
  },
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Random Forest, SVM & Neural Networks for predictive analytics and recommendations",
    details: ["83% prediction accuracy", "Fish species recommendation", "Disease detection", "Trend forecasting"],
    color: "#26C6DA",
  },
  {
    icon: Zap,
    title: "Automatic Control Modules",
    description: "Automated feeding, waste management, aeration and water circulation systems",
    details: ["Feed control system", "Waste removal", "Water circulation", "Automated aeration"],
    color: "#4FC3F7",
  },
];

const systemComponents = [
  {
    icon: Navigation,
    title: "Rover & Sensor Module",
    description: "Autonomous navigation for large water body inspection with depth analysis and surveillance capabilities",
    color: "#0288D1",
  },
  {
    icon: AlertCircle,
    title: "Emergency Response System",
    description: "Activates aerators during low oxygen conditions and dispenses chemicals to neutralize harmful substances",
    color: "#0277BD",
  },
  {
    icon: Antenna,
    title: "Communication Module",
    description: "GPS, GSM, and LoRa technologies for remote monitoring, location-based alerts, and real-time data transfer",
    color: "#01579B",
  },
  {
    icon: Sun,
    title: "Power Management Module",
    description: "Renewable solar energy integration with efficient power management for uninterrupted sustainable operation",
    color: "#1976D2",
  },
];

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #1E88E5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
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
            <span className="gradient-text">System Architecture</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From data collection to intelligent automation - see how it all works
            together
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="relative">
          {/* Connection Lines for Desktop */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 transform -translate-y-1/2 z-0" /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    className="absolute -top-4 -right-4 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  >
                    {index + 1}
                  </motion.div>

                  <Card className="glass-blue border-2 p-6 h-full hover:shadow-2xl smooth-transition hover:-translate-y-2 group">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-6 inline-flex p-4 rounded-2xl"
                      style={{
                        backgroundColor: `${step.color}20`,
                      }}
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color: step.color }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 smooth-transition">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow Indicator (Mobile) */}
                    {index < architectureSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <ArrowRight className="w-6 h-6 text-blue-400 animate-pulse" />
                      </div>
                    )}
                  </Card>

                  {/* Arrow Between Cards (Desktop) */}
                  {index < architectureSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + 0.3,
                        }}
                        className="w-8 h-8 rounded-full bg-white border-4 border-cyan-400 flex items-center justify-center shadow-lg"
                      >
                        <ArrowRight className="w-4 h-4 text-cyan-600" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="glass p-6 text-center border-2 hover:shadow-lg smooth-transition">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-gray-600">Sensor Types</div>
          </Card>
          <Card className="glass p-6 text-center border-2 hover:shadow-lg smooth-transition">
            <div className="text-3xl font-bold text-cyan-600 mb-2">&lt;1s</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </Card>
          <Card className="glass p-6 text-center border-2 hover:shadow-lg smooth-transition">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Continuous Operation</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
