"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProjectCarousel } from "./ProjectCarousel";

export const Portfolio = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#13161a]">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent projects and technical expertise in full-stack web development.
            </p>
          </div>

          {/* Projects Carousel */}
          <ProjectCarousel />

          {/* Skills Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
              <p className="text-gray-300">Technologies I work with</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Frontend", skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
                { category: "Backend", skills: ["Node.js", "Express.js", "Python", "PostgreSQL"] },
                { category: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
                { category: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android"] }
              ].map((skillGroup, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};