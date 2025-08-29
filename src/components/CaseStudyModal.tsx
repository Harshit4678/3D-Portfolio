"use client";
import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function CaseStudyModal({ project, isOpen, onClose }: Props) {
  const [currentImg, setCurrentImg] = useState(0);

  if (!project) return null;

  const images = project.images || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl max-w-3xl w-full overflow-y-auto max-h-full p-6 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">
              {project.longDesc || project.shortDesc}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Admin Demo Video */}
            {project.adminDemoVideo && (
              <div className="mb-4">
                <h3 className="text-sm text-gray-400 mb-2">Admin Demo</h3>
                <div className="relative w-full h-64">
                  <iframe
                    src={project.adminDemoVideo}
                    title="Admin Demo"
                    className="w-full h-full rounded-md"
                    allow="autoplay; encrypted-media; fullscreen"
                  />
                </div>
              </div>
            )}

            {/* Images Carousel */}
            {images.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm text-gray-400 mb-2">Screenshots</h3>
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src={images[currentImg]}
                    alt={`${project.title} screenshot ${currentImg + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Prev/Next buttons */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImg(
                            (prev) => (prev - 1 + images.length) % images.length
                          )
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 p-1 rounded-full hover:bg-gray-600"
                      >
                        ◀
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImg((prev) => (prev + 1) % images.length)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 p-1 rounded-full hover:bg-gray-600"
                      >
                        ▶
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Admin Read-Only Demo */}
            {project.adminDemoReadOnlyUrl && (
              <a
                href={project.adminDemoReadOnlyUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm block text-center mt-4"
              >
                Open Admin Demo (Read-Only)
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
