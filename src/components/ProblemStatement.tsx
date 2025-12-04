"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Clock, 
  Fish, 
  Trash2, 
  MapPin, 
  Siren,
  Zap,
  Database,
  Activity,
  Search
} from "lucide-react";

interface Problem {
  icon: React.ElementType;
  title: string;
  problem: string;
  solution: string;
  color: string;
}

const problems: Problem[] = [
  {
    icon: Clock,
    title: "Real-Time Monitoring of Critical Water Parameters",
    problem: "Manual methods are inefficient in detecting abnormalities in parameters like pH, turbidity, dissolved oxygen, ammonia, and temperature, leading to delayed interventions.",
    solution: "The system employs IoT-based real-time monitoring to track these critical parameters and send alerts for timely intervention.",
    color: "#1E88E5",
  },
  {
    icon: Activity,
    title: "Lack of Predictive Insights in Fish Farming",
    problem: "Current systems provide real-time data but lack predictive capabilities for long-term planning and optimization.",
    solution: "Machine learning algorithms analyse historical and real-time data to predict trends in water quality, fish health, and suitable species for farming.",
    color: "#00ACC1",
  },
  {
    icon: Fish,
    title: "Overfeeding and Food Scatter",
    problem: "Manual feeding leads to overfeeding, increasing costs and water pollution due to leftover feed.",
    solution: "Automated feeding systems ensure optimal feeding schedules and amounts, minimizing waste and environmental harm.",
    color: "#26C6DA",
  },
  {
    icon: Trash2,
    title: "Poor Waste Management",
    problem: "Inefficient waste management in aquaculture contributes to water pollution and environmental degradation.",
    solution: "The system includes an automated waste removal module to maintain water purity and minimize pollutants.",
    color: "#4FC3F7",
  },
  {
    icon: MapPin,
    title: "Monitoring Distant Aquaculture Centres",
    problem: "Remote aquaculture centres lack adequate infrastructure and telecommunication facilities, making monitoring and management difficult.",
    solution: "GPS, GSM, and LoRa communication technologies enable real-time updates and remote control capabilities for seamless operations.",
    color: "#0288D1",
  },
  {
    icon: Siren,
    title: "Absence of Emergency Response Mechanisms",
    problem: "Delayed responses to critical conditions like low oxygen levels or chemical imbalances result in significant fish mortality and economic losses.",
    solution: "An emergency response mechanism detects critical conditions and automatically initiates corrective actions, such as aeration or chemical adjustments.",
    color: "#0277BD",
  },
  {
    icon: Zap,
    title: "High Energy Consumption and Environmental Impact",
    problem: "Continuous operation of sensors and control systems leads to high energy consumption, especially in remote areas with unreliable power sources.",
    solution: "Renewable energy sources like solar power, coupled with efficient power management, ensure sustainable and cost-effective operations.",
    color: "#01579B",
  },
  {
    icon: Database,
    title: "Limited Data Integration for Decision-Making",
    problem: "Many systems collect data but fail to provide actionable insights or connect directly to automated control mechanisms.",
    solution: "IoT data integrated with ML-based analytics supports decision-making for chemical dosing, fish stocking densities, and environmental adjustments.",
    color: "#1976D2",
  },
  {
    icon: AlertTriangle,
    title: "Challenges in Monitoring Fish Health",
    problem: "Early detection of diseases and poor fish health is labour-intensive and requires advanced systems.",
    solution: "AI-based fish health monitoring detects diseases and abnormal behaviour, providing timely alerts for intervention.",
    color: "#2196F3",
  },
  {
    icon: Search,
    title: "Manual Inspection and Mobility Constraints",
    problem: "Inspecting large water bodies is labour-intensive, time-consuming, and prone to errors.",
    solution: "A rover and sensor module enables autonomous inspection and monitoring of large water bodies, reducing human effort and increasing accuracy.",
    color: "#42A5F5",
  },
];

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
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
            <AlertTriangle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Challenges & Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Problems Addressed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Smart Water Monitoring System addresses critical challenges in aquaculture and water resource 
            management through advanced technological solutions combining IoT and Machine Learning
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <item.icon 
                        className="w-6 h-6" 
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-sm font-semibold text-red-600">Problem</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-red-200">
                        {item.problem}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-semibold text-green-600">Solution</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-green-200">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 glass-blue rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">10</div>
            <div className="text-sm text-gray-600">Critical Challenges</div>
          </div>
          <div className="text-center p-6 glass-blue rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-gray-600">Automated Solutions</div>
          </div>
          <div className="text-center p-6 glass-blue rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-gray-600">Real-Time Monitoring</div>
          </div>
          <div className="text-center p-6 glass-blue rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">83%</div>
            <div className="text-sm text-gray-600">Prediction Accuracy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
