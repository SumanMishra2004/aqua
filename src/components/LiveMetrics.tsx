"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Wind, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: React.ElementType;
  accuracy: string;
  min: number;
  max: number;
  optimal: { min: number; max: number };
  color: string;
}

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: "ph",
      label: "pH Level",
      value: 7.2,
      unit: "",
      icon: Droplets,
      accuracy: "±0.05",
      min: 6.5,
      max: 8.5,
      optimal: { min: 7.0, max: 7.5 },
      color: "#1E88E5",
    },
    {
      id: "temp",
      label: "Temperature",
      value: 26.5,
      unit: "°C",
      icon: Thermometer,
      accuracy: "±0.1°C",
      min: 20,
      max: 32,
      optimal: { min: 25, max: 28 },
      color: "#00ACC1",
    },
    {
      id: "do",
      label: "Dissolved Oxygen",
      value: 7.8,
      unit: "mg/L",
      icon: Wind,
      accuracy: "±0.2 mg/L",
      min: 5,
      max: 10,
      optimal: { min: 7, max: 9 },
      color: "#26C6DA",
    },
    {
      id: "turbidity",
      label: "Turbidity",
      value: 15,
      unit: "NTU",
      icon: Activity,
      accuracy: "±5 NTU",
      min: 0,
      max: 50,
      optimal: { min: 5, max: 20 },
      color: "#4FC3F7",
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: parseFloat(
            (
              metric.value +
              (Math.random() - 0.5) * 0.5
            ).toFixed(1)
          ),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatus = (metric: Metric) => {
    if (
      metric.value >= metric.optimal.min &&
      metric.value <= metric.optimal.max
    ) {
      return "optimal";
    } else if (metric.value >= metric.min && metric.value <= metric.max) {
      return "acceptable";
    }
    return "warning";
  };

  const getProgressPercentage = (metric: Metric) => {
    return ((metric.value - metric.min) / (metric.max - metric.min)) * 100;
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="metrics" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Water Quality</span> Monitoring
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time data from IoT sensors with industry-leading accuracy
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const status = getStatus(metric);
            const progress = getProgressPercentage(metric);

            return (
              <motion.div key={metric.id} variants={itemVariants}>
                <Card className="glass-blue border-2 hover:shadow-2xl smooth-transition hover:-translate-y-2 overflow-hidden relative">
                  {/* Animated Background Gradient */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: `linear-gradient(135deg, ${metric.color} 0%, transparent 100%)`,
                    }}
                  />

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-700">
                        {metric.label}
                      </CardTitle>
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${metric.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: metric.color }}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    {/* Value Display with Animation */}
                    <motion.div
                      key={metric.value}
                      initial={{ scale: 1.1, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-4xl font-bold"
                          style={{ color: metric.color }}
                        >
                          {metric.value}
                        </span>
                        <span className="text-xl text-gray-500">
                          {metric.unit}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Accuracy: {metric.accuracy}
                      </div>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{metric.min}</span>
                        <span className="font-medium">
                          {status === "optimal" && "✓ Optimal"}
                          {status === "acceptable" && "○ Acceptable"}
                          {status === "warning" && "⚠ Warning"}
                        </span>
                        <span>{metric.max}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: metric.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          status === "optimal"
                            ? "bg-green-500 animate-pulse"
                            : status === "acceptable"
                            ? "bg-yellow-500"
                            : "bg-red-500 animate-pulse"
                        }`}
                      />
                      <span className="text-xs text-gray-600">
                        Live monitoring active
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-blue">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              All systems operational • Last updated: just now
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
