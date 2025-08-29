"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  //   SiThreejs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400" />,
    level: 85,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    level: 70,
  },
  {
    name: "Three.js",
    // icon: <SiThreejs className="text-purple-400" />,
    level: 60,
  },
  {
    name: "Python (AI/ML)",
    icon: <FaPython className="text-yellow-400" />,
    level: 65,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-purple-600/30 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-400">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
