"use client";

import { motion } from "framer-motion";
import { Droplets, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const teamMembers = [
    "Your Name",
    "Team Member 2",
    "Team Member 3",
    "Team Member 4",
  ];

  const links = [
    { label: "Documentation", href: "#" },
    { label: "Research Paper", href: "#" },
    { label: "GitHub Repository", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t-2 border-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                AquaSmart
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Smart Water Monitoring and Management System for Aquatic
              Environments using IoT and Machine Learning.
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 smooth-transition"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 smooth-transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 smooth-transition"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 smooth-transition text-sm"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Team Members</h3>
            <ul className="space-y-2">
              {teamMembers.map((member, index) => (
                <motion.li
                  key={member}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-gray-600 text-sm"
                >
                  {member}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* University Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Institution</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">
                    University of Engineering & Management
                  </p>
                  <p className="mt-1">Kolkata, West Bengal, India</p>
                </div>
              </div>
              <div className="glass-blue rounded-lg p-3 text-xs text-gray-600">
                <p className="font-semibold mb-1">Project Year</p>
                <p>2024-2025</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2024 AquaSmart Project. All rights reserved. Built with Next.js &
            shadcn/ui
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span className="text-xs text-gray-500">
              for sustainable aquaculture
            </span>
          </div>
        </motion.div>

        {/* Technology Stack Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-blue-100"
        >
          <p className="text-xs text-center text-gray-500 mb-3">
            Powered by cutting-edge technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "IoT Sensors",
              "Raspberry Pi",
              "Machine Learning",
              "LoRa/GSM",
              "React",
              "Next.js",
              "TailwindCSS",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wave Animation at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full h-12">
          <motion.path
            d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#1E88E5"
            fillOpacity="0.1"
            animate={{
              d: [
                "M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,16L48,21.3C96,27,192,37,288,32C384,27,480,5,576,0C672,5,768,27,864,32C960,37,1056,27,1152,21.3C1248,16,1344,16,1392,16L1440,16L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
          />
        </svg>
      </div>
    </footer>
  );
}
