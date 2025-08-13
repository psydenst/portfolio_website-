"use client";

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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting features.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Angular", "D3.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  }
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