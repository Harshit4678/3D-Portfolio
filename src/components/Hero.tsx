"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-20 filter"
        src="/videos/video3.mp4"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-60" />

      {/* Backdrop blur */}
      <div className="absolute inset-0 -z-10  " />

      <div className="max-w-4xl z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Harshit 👋
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full Stack Developer | MERN + AI + 3D | Building modern web
          experiences 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white/10 transition"
          >
            Let’s Connect
          </a>
        </motion.div>

        {/* Placeholder for AI Avatar / Mic Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <button className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition">
            🎤 Ask AI Avatar (Coming Soon)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
