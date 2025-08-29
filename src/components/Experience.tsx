"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "KlikChat - Realtime Chat App",
    desc: "Built a real-time chat app with Google login, end-to-end encryption, and admin panel.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Marble Decor Admin Panel",
    desc: "Product management system with image uploads via Cloudinary, advanced UI dashboard.",
    tech: ["Next.js", "MongoDB", "Cloudinary"],
  },
  {
    title: "StayFinder Auth System",
    desc: "Implemented Airbnb-style login with OTP, Google, and Email integration.",
    tech: ["Next.js", "Firebase", "Tailwind"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-purple-400">Journey</span>
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-purple-500/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-300 mb-4">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
