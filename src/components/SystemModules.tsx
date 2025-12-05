"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Gauge, 
  Radio, 
  Brain, 
  Bell, 
  Utensils,
  Trash2,
  Droplets,
  AlertTriangle,
  Car,
  Battery,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

interface SubModule {
  name: string;
  specs: string[];
}

interface Module {
  id: number;
  icon: any;
  title: string;
  color: string;
  subModules: SubModule[];
  connections: number[];
}

const modules: Module[] = [
  {
    id: 1,
    icon: Gauge,
    title: "IoT Sensor Network",
    color: "blue",
    subModules: [
      {
        name: "pH Sensor Module",
        specs: ["Accuracy: ±0.05 pH units", "Real-time pH monitoring", "Acidity/alkalinity detection"]
      },
      {
        name: "Temperature Sensor Module",
        specs: ["Accuracy: ±0.1°C", "Thermal condition monitoring", "Temperature trend analysis"]
      },
      {
        name: "Dissolved Oxygen (DO) Sensor",
        specs: ["Accuracy: ±0.2 mg/L", "Oxygen level monitoring", "Critical threshold detection"]
      },
      {
        name: "Turbidity Sensor Module",
        specs: ["Accuracy: ±5 NTU", "Water clarity assessment", "Pollution detection"]
      },
      {
        name: "Ammonia Level Sensor",
        specs: ["Chemical concentration detection", "Toxicity monitoring", "Water quality assessment"]
      }
    ],
    connections: [2, 3]
  },
  {
    id: 2,
    icon: Cpu,
    title: "Data Processing Module",
    color: "cyan",
    subModules: [
      {
        name: "Local Processing Unit",
        specs: ["Raspberry Pi/Microcontroller", "Real-time data aggregation", "Edge computing capabilities"]
      },
      {
        name: "Threshold Monitoring System",
        specs: ["Parameter range checking", "Deviation detection", "Anomaly identification"]
      },
      {
        name: "Data Storage System",
        specs: ["Local data caching", "Cloud-based storage", "Historical data archiving"]
      }
    ],
    connections: [3, 4, 5]
  },
  {
    id: 3,
    icon: Radio,
    title: "Communication Module",
    color: "blue",
    subModules: [
      {
        name: "LoRa Communication System",
        specs: ["Long-range wireless (5 km)", "Low power consumption", "Reliable data transfer"]
      },
      {
        name: "GSM Module",
        specs: ["Mobile network connectivity", "SMS alert system", "Remote area connectivity"]
      },
      {
        name: "Wi-Fi Module",
        specs: ["Local network connectivity", "High-speed data transfer", "Web dashboard access"]
      },
      {
        name: "GPS Module",
        specs: ["Location tracking", "Geographical data integration", "Site-specific monitoring"]
      }
    ],
    connections: [4, 5]
  },
  {
    id: 4,
    icon: Brain,
    title: "Machine Learning & Analytics",
    color: "cyan",
    subModules: [
      {
        name: "Predictive Analytics Engine",
        specs: ["Water quality forecasting", "90%+ prediction accuracy", "Random Forest Regression"]
      },
      {
        name: "Fish Health Monitoring System",
        specs: ["Disease detection algorithms", "Behavioral analysis", "Growth pattern monitoring"]
      },
      {
        name: "Fish Species Recommendation",
        specs: ["Species suitability analysis", "Parameter-based suggestions", "Optimal stocking density"]
      },
      {
        name: "ML Model Training Module",
        specs: ["Historical data processing", "Model optimization", "Continuous learning"]
      }
    ],
    connections: [5, 6, 7, 8, 9]
  },
  {
    id: 5,
    icon: Bell,
    title: "Alert & Notification Module",
    color: "blue",
    subModules: [
      {
        name: "SMS Alert System",
        specs: ["Critical condition notifications", "Real-time farmer alerts", "Emergency messaging"]
      },
      {
        name: "Email Notification System",
        specs: ["Detailed reports", "Scheduled updates", "Historical data summaries"]
      },
      {
        name: "Mobile App Push Notifications",
        specs: ["Instant alerts", "In-app messaging", "Custom preferences"]
      },
      {
        name: "Web Dashboard Alerts",
        specs: ["Visual indicators", "Real-time status", "Alert history logs"]
      }
    ],
    connections: [9]
  },
  {
    id: 6,
    icon: Utensils,
    title: "Automated Feeding Module",
    color: "cyan",
    subModules: [
      {
        name: "Feed Dispensing System",
        specs: ["Automated feed release", "Portion control", "Scheduled feeding"]
      },
      {
        name: "Feed Optimization Algorithm",
        specs: ["Optimal feeding time", "Quantity optimization", "30% overfeeding reduction"]
      },
      {
        name: "Feed Monitoring System",
        specs: ["Consumption tracking", "Wastage detection", "Cost analysis"]
      }
    ],
    connections: [11]
  },
  {
    id: 7,
    icon: Trash2,
    title: "Waste Management Module",
    color: "blue",
    subModules: [
      {
        name: "Automated Waste Removal",
        specs: ["Debris collection mechanism", "Waste filtration", "20% water quality improvement"]
      },
      {
        name: "Waste Detection System",
        specs: ["Turbidity-based sensing", "Automated triggers", "Efficiency monitoring"]
      }
    ],
    connections: [11]
  },
  {
    id: 8,
    icon: Droplets,
    title: "Water Circulation & Aeration",
    color: "cyan",
    subModules: [
      {
        name: "Aeration Control System",
        specs: ["Oxygen level maintenance", "Automated aerator activation", "Emergency aeration (<5s)"]
      },
      {
        name: "Water Circulation System",
        specs: ["Stagnation prevention", "Flow optimization", "Temperature distribution"]
      },
      {
        name: "Pump Control Module",
        specs: ["Intelligent pump operation", "Energy-efficient scheduling", "Flow rate management"]
      }
    ],
    connections: [11]
  },
  {
    id: 9,
    icon: AlertTriangle,
    title: "Emergency Response Module",
    color: "blue",
    subModules: [
      {
        name: "Critical Condition Detection",
        specs: ["Threshold breach identification", "Multi-parameter analysis", "Priority assessment"]
      },
      {
        name: "Automated Response System",
        specs: ["Aerator activation (DO < 4 mg/L)", "Chemical dosing triggers", "Response time: <5s"]
      },
      {
        name: "Chemical Dispensing Module",
        specs: ["Automated pH adjustment", "Ammonia neutralization", "Controlled release"]
      }
    ],
    connections: [8, 11]
  },
  {
    id: 10,
    icon: Car,
    title: "Autonomous Rover Module",
    color: "cyan",
    subModules: [
      {
        name: "Navigation System",
        specs: ["Autonomous path planning", "Obstacle avoidance", "GPS-guided movement"]
      },
      {
        name: "Depth Analysis Module",
        specs: ["Water depth measurement", "Topographic mapping", "Stratification detection"]
      },
      {
        name: "Surveillance System",
        specs: ["Fish behavior monitoring", "Theft detection", "Real-time video streaming"]
      },
      {
        name: "Integrated Sensor Array",
        specs: ["Mobile water quality testing", "Point-specific measurements", "Large water body inspection"]
      }
    ],
    connections: [2, 11]
  },
  {
    id: 11,
    icon: Battery,
    title: "Power Management Module",
    color: "blue",
    subModules: [
      {
        name: "Solar Power System",
        specs: ["Solar panel integration", "40% energy cost reduction", "Sustainable operation"]
      },
      {
        name: "Battery Management System",
        specs: ["Charge optimization", "Power backup", "24/7 operational stability"]
      },
      {
        name: "Energy Efficiency Controller",
        specs: ["Low-power mode activation", "Component scheduling", "Power monitoring"]
      }
    ],
    connections: []
  }
];

export default function SystemModules() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  const getModulePosition = (id: number) => {
    const positions: Record<number, { x: number; y: number }> = {
      1: { x: 50, y: 5 },     // Top - IoT Sensors
      2: { x: 25, y: 20 },    // Left upper - Data Processing
      3: { x: 75, y: 20 },    // Right upper - Communication
      4: { x: 50, y: 35 },    // Center - ML & Analytics
      5: { x: 85, y: 50 },    // Right - Alerts
      6: { x: 20, y: 50 },    // Left - Feeding
      7: { x: 35, y: 65 },    // Left lower - Waste
      8: { x: 50, y: 65 },    // Center lower - Water Circulation
      9: { x: 65, y: 50 },    // Right center - Emergency
      10: { x: 15, y: 80 },   // Bottom left - Rover
      11: { x: 50, y: 95 }    // Bottom center - Power
    };
    return positions[id];
  };

  const isConnected = (moduleId: number) => {
    if (!hoveredModule && !selectedModule) return false;
    const activeId = selectedModule || hoveredModule;
    if (activeId === moduleId) return true;
    const activeModule = modules.find(m => m.id === activeId);
    return activeModule?.connections.includes(moduleId) || false;
  };

  return (
    <section id="system-modules" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2">
            System Architecture
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Complete Module Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive visualization of 11 interconnected modules with 40+ sub-systems working in harmony
          </p>
        </motion.div>

        {/* Interactive Graph Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="glass-blue border-2 border-blue-200 overflow-hidden">
            <CardContent className="p-8">
              <div className="relative" style={{ height: '800px' }}>
                {/* Connection Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {modules.map(module => {
                    const fromPos = getModulePosition(module.id);
                    return module.connections.map(toId => {
                      const toPos = getModulePosition(toId);
                      const isActive = isConnected(module.id) || isConnected(toId);
                      
                      return (
                        <motion.line
                          key={`${module.id}-${toId}`}
                          x1={`${fromPos.x}%`}
                          y1={`${fromPos.y}%`}
                          x2={`${toPos.x}%`}
                          y2={`${toPos.y}%`}
                          stroke={isActive ? "#0EA5E9" : "#CBD5E1"}
                          strokeWidth={isActive ? "3" : "2"}
                          strokeDasharray={isActive ? "0" : "5,5"}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: 1, 
                            opacity: isActive ? 0.8 : 0.3,
                            strokeWidth: isActive ? 3 : 2
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      );
                    });
                  })}
                </svg>

                {/* Module Nodes */}
                {modules.map((module, index) => {
                  const pos = getModulePosition(module.id);
                  const isActive = isConnected(module.id);
                  const Icon = module.icon;
                  
                  return (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="absolute"
                      style={{ 
                        left: `${pos.x}%`, 
                        top: `${pos.y}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10
                      }}
                      onMouseEnter={() => setHoveredModule(module.id)}
                      onMouseLeave={() => setHoveredModule(null)}
                      onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`cursor-pointer relative`}
                      >
                        <div className={`w-20 h-20 rounded-2xl ${
                          module.color === 'blue' 
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                            : 'bg-gradient-to-br from-cyan-500 to-cyan-600'
                        } flex items-center justify-center shadow-lg ${
                          isActive ? 'ring-4 ring-blue-400' : ''
                        } smooth-transition`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center whitespace-nowrap">
                          <Badge className={`text-xs ${
                            module.color === 'blue' ? 'bg-blue-600' : 'bg-cyan-600'
                          } text-white`}>
                            Module {module.id}
                          </Badge>
                          <p className="text-xs font-semibold text-gray-700 mt-1 max-w-32">
                            {module.title}
                          </p>
                        </div>

                        {/* Connection indicators */}
                        {module.connections.length > 0 && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                            {module.connections.length}
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-6 justify-center items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-cyan-500"></div>
                    <span className="text-gray-600">Active Connection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-gray-300 border-dashed border-t-2"></div>
                    <span className="text-gray-600">Inactive Connection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center font-bold">3</div>
                    <span className="text-gray-600">Connection Count</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Selected Module Details */}
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {modules
              .filter(m => m.id === selectedModule)
              .map(module => {
                const Icon = module.icon;
                return (
                  <Card key={module.id} className="border-2 border-blue-300 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl ${
                          module.color === 'blue' 
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                            : 'bg-gradient-to-br from-cyan-500 to-cyan-600'
                        } flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                          <p className="text-sm text-gray-600">Module {module.id} - {module.subModules.length} Sub-modules</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {module.subModules.map((sub, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <h4 className="font-bold text-gray-800">{sub.name}</h4>
                            </div>
                            <ul className="space-y-2 ml-8">
                              {sub.specs.map((spec, specIdx) => (
                                <li key={specIdx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>

                      {module.connections.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="font-bold text-gray-800 mb-3">Connected Modules:</h4>
                          <div className="flex flex-wrap gap-2">
                            {module.connections.map(connId => {
                              const connModule = modules.find(m => m.id === connId);
                              return connModule ? (
                                <Badge 
                                  key={connId} 
                                  variant="outline"
                                  className="cursor-pointer hover:bg-blue-50"
                                  onClick={() => setSelectedModule(connId)}
                                >
                                  Module {connId}: {connModule.title}
                                </Badge>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
          </motion.div>
        )}

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">11</div>
              <div className="text-sm text-gray-600">Main Modules</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-cyan-600 mb-2">40+</div>
              <div className="text-sm text-gray-600">Sub-Systems</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">28</div>
              <div className="text-sm text-gray-600">Interconnections</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Integration</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
