"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  Gauge, 
  Shield, 
  Sun,
  Radio,
  CheckCircle2
} from "lucide-react";

const highlights = [
  {
    icon: Gauge,
    title: "Real-time Water Quality Monitoring",
    description: "IoT sensors track pH, temperature, dissolved oxygen, turbidity, and ammonia levels with high precision",
    metrics: "±0.05 pH accuracy, ±0.1°C temperature",
    color: "blue"
  },
  {
    icon: Brain,
    title: "AI/ML Predictive Analytics",
    description: "Random Forest, SVM, and Neural Networks for water quality forecasting and fish health prediction",
    metrics: "90%+ prediction accuracy",
    color: "cyan"
  },
  {
    icon: Zap,
    title: "Automated Control Systems",
    description: "Intelligent feeding, waste management, and aeration control for optimal fish farming",
    metrics: "30% reduction in overfeeding",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Emergency Response Mechanism",
    description: "Multi-channel alert generation with SMS, email, and app notifications for critical events",
    metrics: "<5 second response time",
    color: "cyan"
  },
  {
    icon: Sun,
    title: "Solar-Powered Operation",
    description: "Sustainable energy solution with 24/7 off-grid capability for remote aquaculture sites",
    metrics: "40% energy cost reduction",
    color: "blue"
  },
  {
    icon: Radio,
    title: "Remote Monitoring Capabilities",
    description: "GPS, GSM, and LoRa communication for monitoring distant aquaculture centers",
    metrics: "5 km communication range",
    color: "cyan"
  }
];

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Executive Summary
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A revolutionary IoT and Machine Learning-driven solution that transforms traditional aquaculture 
            into a smart, sustainable, and highly efficient ecosystem with{" "}
            <strong className="text-blue-600">90%+ prediction accuracy</strong> and{" "}
            <strong className="text-cyan-600">significant operational improvements</strong>
          </p>
        </motion.div>

        {/* Key Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl smooth-transition border-2 hover:border-blue-300 group">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                    highlight.color === 'blue' 
                      ? 'from-blue-500 to-blue-600' 
                      : 'from-cyan-500 to-cyan-600'
                  } flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full ${
                    highlight.color === 'blue' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-cyan-100 text-cyan-700'
                  } text-sm font-semibold`}>
                    <CheckCircle2 className="w-4 h-4" />
                    {highlight.metrics}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="glass-blue border-2 border-blue-200">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                  Comprehensive Impact on Aquaculture Industry
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">90%+</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Feed Waste Reduced</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">20%</div>
                    <div className="text-sm text-gray-600">Water Quality Improved</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600">Energy Cost Savings</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
