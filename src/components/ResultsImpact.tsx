"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Zap, Target, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
  trend: "up" | "down";
}

const stats: Stat[] = [
  {
    icon: TrendingDown,
    value: 30,
    suffix: "%",
    label: "Reduction in Overfeeding",
    description: "Automated feeding systems with optimal schedules reduce waste and costs significantly",
    color: "#1E88E5",
    trend: "down",
  },
  {
    icon: TrendingUp,
    value: 20,
    suffix: "%",
    label: "Water Quality Improvement",
    description: "Real-time monitoring ensures consistent optimal parameters for healthier aquatic ecosystems",
    color: "#00ACC1",
    trend: "up",
  },
  {
    icon: Zap,
    value: 40,
    suffix: "%",
    label: "Energy Savings",
    description: "Solar power integration with efficient power management dramatically reduces energy costs",
    color: "#26C6DA",
    trend: "down",
  },
  {
    icon: Target,
    value: 83,
    suffix: "%",
    label: "ML Model Accuracy",
    description: "Highly accurate water quality trend predictions using Random Forest Regression algorithms",
    color: "#4FC3F7",
    trend: "up",
  },
];

interface AccuracyMetric {
  parameter: string;
  accuracy: string;
  method: string;
}

const accuracyMetrics: AccuracyMetric[] = [
  { parameter: "pH Sensor", accuracy: "±0.05 units", method: "IoT Real-Time Monitoring" },
  { parameter: "Temperature", accuracy: "±0.1°C", method: "IoT Real-Time Monitoring" },
  { parameter: "Turbidity", accuracy: "±5 NTU", method: "IoT Real-Time Monitoring" },
  { parameter: "Dissolved Oxygen", accuracy: "±0.2 mg/L", method: "IoT Real-Time Monitoring" },
  { parameter: "Water Quality Trends", accuracy: "83%", method: "Random Forest Regression" },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function ResultsImpact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
            <span className="gradient-text">Measurable Results</span> & Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world performance metrics demonstrating the power of smart automation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="glass-blue border-2 h-full hover:shadow-2xl smooth-transition hover:-translate-y-2 group overflow-hidden relative">
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color} 0%, transparent 100%)`,
                    }}
                  />

                  <CardContent className="p-6 relative">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex p-3 rounded-xl mb-4"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: stat.color }} />
                    </motion.div>

                    {/* Value with Counter Animation */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <motion.span
                          className="text-5xl font-bold"
                          style={{ color: stat.color }}
                        >
                          {stat.prefix}
                          <AnimatedCounter value={stat.value} duration={2} />
                          {stat.suffix}
                        </motion.span>
                      </div>

                      {/* Trend Indicator */}
                      <div className="flex items-center gap-1 mt-2">
                        <TrendIcon
                          className={`w-4 h-4 ${
                            stat.trend === "up"
                              ? "text-green-500"
                              : "text-green-500"
                          }`}
                        />
                        <span className="text-xs text-gray-500 font-medium">
                          {stat.trend === "up" ? "Improved" : "Reduced"}
                        </span>
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 smooth-transition">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.color }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Real-Time Monitoring Accuracy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Testing Results & Accuracy Metrics</span>
          </h3>

          <Card className="glass-blue border-2 overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-4">
                {accuracyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-white/50 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                          {metric.parameter}
                        </div>
                        <div className="text-sm text-gray-500">{metric.method}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:ml-4">
                      <div className="px-4 py-2 rounded-lg bg-green-100 border border-green-200">
                        <span className="text-green-700 font-bold">{metric.accuracy}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Predictive Analytics Performance</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Machine learning models using <strong>Random Forest Regression</strong> demonstrated 
                      <strong> 83% accuracy</strong> in predicting water quality trends. This enables 
                      proactive interventions and significantly improves operational decision-making for 
                      aquaculture management.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 glass-blue rounded-3xl p-8 border-2"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Environmental & Economic Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={50} duration={2} />+
              </div>
              <div className="text-sm text-gray-600">
                Aquaculture Farms Ready
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">
                ₹<AnimatedCounter value={500} duration={2} />K
              </div>
              <div className="text-sm text-gray-600">
                Annual Cost Savings Potential
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={1000} duration={2} />+
              </div>
              <div className="text-sm text-gray-600">
                Tons of Water Conserved Annually
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
