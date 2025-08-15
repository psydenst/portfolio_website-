"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Private ChatBot",
    description: "A full-stack private chatbot solution built with Next.js, Django.py, PostgreSQL and Docker. Features include user authentication, async streaming, and multiple LLMs interaction.",
    image: "/nymjai.png",
    technologies: ["React", "Django.py", "PostgreSQL", "Docker", "Next.js"],
    liveUrl: "https://ai.tupinymquim.com",
    githubUrl: "https://github.com/psydenst/Nymja_AI_MVP_v1"
  },
  {
    id: 2,
    title: "Noise Visualization",
    description: "A network traffic visualisation tool, used in the launch of NymVPN, demonstrating how NymVPN's Anonymous Mode anonymises its customers.",
    image: "/noise.png",
    technologies: ["Python", "Tshark", "Grafana"],
    liveUrl: "https://www.youtube.com/live/AD5ZrU7AZ4A?si=zLjFiN51bBXt6vsS&t=2012",
    githubUrl: "https://github.com/TupiNymQuim/noise-visualization"
  },
  {
    id: 3,
    title: "Interactive USA Law Map",
    description: " Developed an interactive map of the United States that dynamically visualizes state-by-state internet laws and regulations, offering users an engaging, intuitive platform to explore complex legal landscapes. Featured in a Nym Technologies blog post",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2Fstg%2Fimage6_e1ab4bd695.png&w=3840&q=75",
    technologies: ["CSS", "JS"],
    liveUrl: "https://nym.com/blog/freedom-of-information-and-misinformation",
    githubUrl: "https://github.com/psydenst/USA_interactive_map"
  },
];

export const ProjectCarousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
        <div className="relative h-64 overflow-hidden">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4">{currentProject.title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{currentProject.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {currentProject.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
