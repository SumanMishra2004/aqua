"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Wifi,
  WifiOff,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Server,
} from "lucide-react";
import { toast } from "sonner";

type ConnectionStatus = "disconnected" | "connecting" | "connected" | "error";

export default function HardwareConnection() {
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("disconnected");
  const [deviceId, setDeviceId] = useState("");
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = async () => {
    if (!deviceId || !location) {
      toast.error("Missing Information", {
        description: "Please fill in all required fields",
      });
      return;
    }

    setConnectionStatus("connecting");

    // Simulate connection process
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Simulate success (90% success rate)
    if (Math.random() > 0.1) {
      setConnectionStatus("connected");
      toast.success("Connection Successful!", {
        description: `Device ${deviceId} is now connected and transmitting data.`,
      });
    } else {
      setConnectionStatus("error");
      toast.error("Connection Failed", {
        description: "Unable to connect to device. Please check your settings and try again.",
      });
    }
  };

  const handleDisconnect = () => {
    setConnectionStatus("disconnected");
    setDeviceId("");
    setLocation("");
    toast.info("Device Disconnected", {
      description: "Device has been safely disconnected.",
    });
  };

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case "connected":
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case "connecting":
        return <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />;
      case "error":
        return <AlertCircle className="w-6 h-6 text-red-500" />;
      default:
        return <WifiOff className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (connectionStatus) {
      case "connected":
        return "Connected";
      case "connecting":
        return "Connecting...";
      case "error":
        return "Connection Error";
      default:
        return "Disconnected";
    }
  };

  const getStatusColor = () => {
    switch (connectionStatus) {
      case "connected":
        return "text-green-600";
      case "connecting":
        return "text-blue-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Connect Your Hardware</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Link your IoT devices to start monitoring your aquatic environment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass-blue border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Device Connection</CardTitle>
                <div className="flex items-center gap-3">
                  {getStatusIcon()}
                  <span className={`font-semibold ${getStatusColor()}`}>
                    {getStatusText()}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Connection Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="deviceId">Device ID</Label>
                  <Input
                    id="deviceId"
                    placeholder="e.g., AQUA-2024-001"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    disabled={connectionStatus === "connected"}
                    className="glass"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Pond A, Farm 1"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    disabled={connectionStatus === "connected"}
                    className="glass"
                  />
                </div>
              </div>

              {/* Sensor Calibration Status */}
              <div className="space-y-3">
                <Label>Sensor Calibration Status</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["pH Sensor", "Temperature", "DO Sensor", "Turbidity"].map(
                    (sensor) => (
                      <div
                        key={sensor}
                        className="glass rounded-lg p-3 flex items-center gap-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            connectionStatus === "connected"
                              ? "bg-green-500 animate-pulse"
                              : "bg-gray-300"
                          }`}
                        />
                        <span className="text-sm text-gray-700">{sensor}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Connection Progress */}
              {connectionStatus === "connecting" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Establishing connection...</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2.5 }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Connection Details */}
              {connectionStatus === "connected" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-blue rounded-lg p-4 space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Device ID:</span>
                    <span className="font-semibold text-gray-800">
                      {deviceId}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold text-gray-800">
                      {location}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Signal Strength:</span>
                    <span className="font-semibold text-green-600">
                      Excellent
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Data Rate:</span>
                    <span className="font-semibold text-gray-800">
                      1 reading/sec
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                {connectionStatus !== "connected" ? (
                  <Button
                    onClick={handleConnect}
                    disabled={connectionStatus === "connecting"}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                  >
                    {connectionStatus === "connecting" ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Wifi className="mr-2 w-5 h-5" />
                        Connect Device
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={handleDisconnect}
                    variant="outline"
                    className="flex-1 border-2"
                  >
                    <WifiOff className="mr-2 w-5 h-5" />
                    Disconnect
                  </Button>
                )}

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-2">
                      <Server className="mr-2 w-5 h-5" />
                      Setup Guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Hardware Setup Guide</DialogTitle>
                      <DialogDescription>
                        Follow these steps to connect your IoT device
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">
                          Step 1: Power On
                        </h4>
                        <p className="text-sm text-gray-600">
                          Connect your Raspberry Pi and ensure all sensors are
                          properly connected.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">
                          Step 2: Network Setup
                        </h4>
                        <p className="text-sm text-gray-600">
                          Configure LoRa/GSM connection or connect to WiFi
                          network.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">
                          Step 3: Device Registration
                        </h4>
                        <p className="text-sm text-gray-600">
                          Enter your unique device ID and location in the form
                          above.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">
                          Step 4: Connect
                        </h4>
                        <p className="text-sm text-gray-600">
                          Click &quot;Connect Device&quot; and wait for
                          confirmation.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
