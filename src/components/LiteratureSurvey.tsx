"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Cpu, Brain, Network, Zap, Leaf } from "lucide-react";

interface Research {
  icon: React.ElementType;
  title: string;
  authors: string;
  year: string;
  description: string;
  impact: string;
  color: string;
}

const researches: Research[] = [
  {
    icon: Network,
    title: "IoT in Water Quality Monitoring",
    authors: "Gutiérrez et al.",
    year: "2018",
    description: "Demonstrated the use of IoT sensors to measure critical parameters such as pH, turbidity, dissolved oxygen, and temperature, essential for maintaining aquatic ecosystem health. These systems employ wireless communication protocols like LoRa, GSM, or ZigBee to transmit data for cloud-based analysis.",
    impact: "Revolutionized real-time data collection and remote analysis for water quality monitoring systems.",
    color: "#1E88E5",
  },
  {
    icon: Brain,
    title: "Machine Learning in Aquatic Environment Management",
    authors: "Kim et al.",
    year: "2020",
    description: "Utilized ML algorithms to predict dissolved oxygen levels, thereby improving fish survival rates. Demonstrated the power of predictive analysis in aquaculture management.",
    impact: "Enabled predictive capabilities for fish health and water quality, moving beyond reactive monitoring.",
    color: "#00ACC1",
  },
  {
    icon: Cpu,
    title: "IoT and ML Integration in Aquaculture",
    authors: "Wang et al.",
    year: "2021",
    description: "Highlighted improvements through IoT-enabled systems and ML models, including optimized feeding schedules and anomaly detection. Demonstrated the potential of combining IoT sensors with machine learning for comprehensive aquaculture management.",
    impact: "Showed significant potential for optimizing feeding schedules, reducing waste, and detecting anomalies early.",
    color: "#26C6DA",
  },
  {
    icon: Zap,
    title: "Renewable Energy and Power Management",
    authors: "Raza et al.",
    year: "2019",
    description: "Explored the use of renewable energy for powering IoT devices in remote locations. Suggested utilizing solar panels and energy-efficient components for sustainable long-term operations.",
    impact: "Enabled sustainable, cost-effective power solutions for remote aquaculture monitoring systems.",
    color: "#4FC3F7",
  },
  {
    icon: Leaf,
    title: "Automated Feeding and Waste Management",
    authors: "Ahmad et al.",
    year: "2020",
    description: "Focused on minimizing food waste and enhancing fish growth through IoT-enabled controls. Similarly explored waste management mechanisms to reduce pollution from aquaculture systems.",
    impact: "Reduced operational costs and environmental pollution through automation of feeding and waste removal.",
    color: "#0288D1",
  },
];

export default function LiteratureSurvey() {
  return (
    <section id="literature" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Research Foundation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Literature Survey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The pressing challenges of environmental conservation, food safety, and the rising demand for aquatic 
            products have underscored the need for extensive research on water quality monitoring and sustainable 
            aquaculture practices.
          </p>
        </motion.div>

        {/* Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 glass-blue rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Research Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">IoT Integration</h4>
              <p className="text-sm text-gray-600">
                Real-time monitoring with wireless sensor networks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
              <p className="text-sm text-gray-600">
                Predictive analytics for aquatic environments
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Sustainability</h4>
              <p className="text-sm text-gray-600">
                Renewable energy and automation systems
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research Papers Grid */}
        <div className="space-y-6">
          {researches.map((research, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon and Metadata */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4"
                        style={{ 
                          backgroundColor: `${research.color}15`,
                        }}
                      >
                        <research.icon 
                          className="w-10 h-10" 
                          style={{ color: research.color }}
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="text-sm font-semibold text-gray-700">{research.authors}</div>
                        <div className="text-xs text-gray-500">{research.year}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {research.title}
                      </h3>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: research.color }}></div>
                            <span className="text-sm font-semibold text-gray-700">Research Focus</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2" style={{ borderColor: `${research.color}40` }}>
                            {research.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-semibold text-green-700">Impact</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-green-200">
                            {research.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Our Contribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Our Innovation</h3>
          </div>
          <p className="text-white/90 leading-relaxed mb-6">
            While existing research has made significant strides in IoT monitoring and ML applications, our system 
            <strong className="text-white"> bridges critical gaps</strong> by integrating:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
              <span>Real-time IoT data with adaptive ML models for immediate predictive insights</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
              <span>Comprehensive monitoring beyond pH and temperature - including waste management and emergency response</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
              <span>Autonomous rover systems for large-scale water body inspection and surveillance</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
              <span>Unified platform combining automated feeding, waste control, and renewable energy management</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
