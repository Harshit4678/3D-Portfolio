"use client";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  ContactShadows,
} from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const highlights = [
  { title: "Projects", value: "15+", desc: "Real-world apps & freelance work" },
  { title: "Experience", value: "2+ yrs", desc: "Building modern web apps" },
  { title: "Certifications", value: "5+", desc: "MERN & AI specializations" },
];

const models = [
  "/thinking.glb",
  "/harshitwave.glb",
  "/running.glb",
  "/gym.glb",
];

function ModelLoop() {
  const group = useRef<THREE.Group>(null);
  const [current, setCurrent] = useState(0);

  // Load current model dynamically
  const { scene, animations } = useGLTF(models[current]);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      const animName = Object.keys(actions)[0];
      if (animName && actions[animName]) {
        actions[animName].reset().fadeIn(0.5).play();
        actions[animName].setLoop(THREE.LoopRepeat, Infinity);
      }
    }
  }, [actions, current]);

  // Switch models every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % models.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (group.current) {
      // subtle idle sway
      group.current.rotation.y = 0.03 * Math.sin(state.clock.elapsedTime * 0.5);

      // hand wave if exists
      const rightHand = scene.getObjectByName("mixamorigRightHand");
      if (rightHand instanceof THREE.Object3D) {
        rightHand.rotation.z = 0.15 * Math.sin(state.clock.elapsedTime * 2);
      }

      // slight up-down motion
      group.current.position.y =
        -0.8 + 0.03 * Math.sin(state.clock.elapsedTime * 1.2);
    }
  });

  return (
    <primitive ref={group} object={scene} scale={1.1} position={[0, -0.8, 0]} />
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-black px-6 md:px-16 py-10"
    >
      {/* Left Side: 3D Model */}
      <div className="w-full md:w-1/2 h-[80vh] flex items-end justify-center relative">
        <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[2, 5, 3]}
            intensity={1.2}
            color="#ffffff"
          />
          <directionalLight
            position={[-3, 2, -2]}
            intensity={0.8}
            color="#ffffff"
          />
          <pointLight position={[0, 3, 0]} intensity={0.5} color="#ffffff" />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          <ModelLoop />

          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <circleGeometry args={[2, 64]} />
            <meshStandardMaterial
              color="#111"
              emissive="#333333"
              emissiveIntensity={0.5}
              roughness={0.7}
              metalness={0.5}
            />
          </mesh>

          <ContactShadows
            position={[0, -1.01, 0]}
            opacity={0.5}
            scale={3}
            blur={2}
            far={3}
          />
        </Canvas>
      </div>

      {/* Right Side: Text Container */}
      <motion.div
        className="ml-0 md:ml-10 w-full md:w-1/2 h-full md:h-[85vh] mt-8 md:mt-0 perspective"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="p-10 rounded-[50px_20px_50px_20px] bg-black/50 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden"
          whileHover={{
            rotateX: -2,
            rotateY: 2,
            scale: 1.02,
            boxShadow:
              "0 30px 60px rgba(128,0,255,0.3), 0 15px 30px rgba(0,255,255,0.2)",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          {/* Light reflection effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 mix-blend-screen" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 relative z-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I’m <span className="font-semibold text-white">Harshit Kumar</span>,
            a passionate Full Stack Developer specializing in the MERN stack
            with AI & 3D integrations. I love building real-time, scalable, and
            interactive applications 🚀
          </motion.p>

          {/* Interactive 3D-ish highlight cards */}
          <div className="mt-10 flex flex-wrap gap-6 justify-between relative z-10 perspective">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="w-[30%] min-w-[150px] p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  rotateX: -6,
                  rotateY: 6,
                  boxShadow:
                    "0 25px 50px rgba(128,0,255,0.3), 0 12px 25px rgba(0,255,255,0.2)",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.2 + 0.6,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-2">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-300 font-semibold">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
