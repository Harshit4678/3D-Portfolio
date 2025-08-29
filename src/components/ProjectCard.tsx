// components/ProjectCard.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useState } from "react";

type Props = {
  project: Project;
  onOpenCaseStudy?: (id: string) => void;
};

export default function ProjectCard({ project, onOpenCaseStudy }: Props) {
  const [loadingExplain, setLoadingExplain] = useState(false);
  const [explain, setExplain] = useState<string | null>(null);

  async function handleExplain() {
    try {
      setLoadingExplain(true);
      setExplain(null);
      const res = await fetch("/api/ai/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: project.id }),
      });
      const data = await res.json();
      setExplain(data.summary);
    } catch (err) {
      console.error(err);
      setExplain("Could not fetch explanation. Try later.");
    } finally {
      setLoadingExplain(false);
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg border border-gray-700"
    >
      {/* Image */}
      <div className="relative w-full h-44 rounded-md overflow-hidden mb-4">
        {project.images && project.images[0] ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
            No preview
          </div>
        )}
      </div>

      {/* Title + Desc */}
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{project.shortDesc}</p>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-md bg-purple-600 text-white text-sm"
          >
            Live Demo
          </a>
        )}
        {onOpenCaseStudy && (
          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="px-3 py-2 rounded-md border border-gray-600 text-sm"
          >
            Case Study
          </button>
        )}
        <button
          onClick={handleExplain}
          disabled={loadingExplain}
          className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm ml-auto"
        >
          {loadingExplain ? "Thinking..." : "AI Explain"}
        </button>
      </div>

      {/* AI Explain Result */}
      {explain && (
        <div className="mt-4 p-3 rounded-md bg-gray-900 border border-gray-700 text-sm text-gray-200">
          {explain}
        </div>
      )}
    </motion.div>
  );
}
