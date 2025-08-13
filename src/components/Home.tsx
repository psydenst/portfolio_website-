"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProjectCarousel } from "./ProjectCarousel";

export const Home = (): JSX.Element => {
  const images = [
    {
      className: "w-[322px] h-[322px] top-[130px] left-[150px] fill-white",
      src: "/image-removebg-preview--4--1.png",
      alt: "Image removebg",
    },
    {
      className: "w-[169px] h-[139px] top-0 left-[181px]",
      src: "/image-removebg-preview--6--1.png",
      alt: "Image removebg",
    },
    {
      className: "w-[216px] h-[188px] top-[121px] left-[413px]",
      src: "/image-removebg-preview--7--1.png",
      alt: "Image removebg",
    },
    {
      className: "w-[173px] h-[169px] top-[444px] left-[401px]",
      src: "/image-removebg-preview--8--1.png",
      alt: "Image removebg",
    },
    {
      className: "w-[154px] h-[179px] top-[416px] left-0",
      src: "/image-removebg-preview--9--1.png",
      alt: "Image removebg",
    },
		{
			className: "w-[118px] h-[113px] top-[119px] left-0",
			src: "/image-removebg-preview--5--1.png",
			alt: "Machine 1",
		},
  ];

  return (
    <div className="min-h-screen bg-[#13161a]">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="w-full px-6 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Images */}
            <div className="flex justify-center items-center h-full">
              <div className="relative w-[500px] h-[660px]">
                <div className="relative w-[470px] h-[460px] top-0 left-[30px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute object-cover ${getScaledImageClass(image.className)}`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-white space-y-8 px-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hey, I'm Pedro!<br />
                <span className="text-blue-400">A fullstack web developer</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              
              {/* Technology Icons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">Technologies I work with:</h3>
                <div className="grid grid-cols-6 gap-4 max-w-md">
                  {getTechIcons().map((tech, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-gray-400 mt-1">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-6">
                <Link href="/portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300">
                  View My Work
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/30 hover:border-white/50 text-white rounded-lg font-semibold transition-colors duration-300">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300">Some of my recent work</p>
            </div>
            <ProjectCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
// Helper function to scale image classes
const getScaledImageClass = (originalClass: string) => {
  // Extract dimensions and positions from the original class and scale them down
  const scaleFactor = 0.75; // Scale down to 75%
  
  // This is a simplified scaling - in a real app you'd parse the class string properly
  if (originalClass.includes("w-[322px] h-[322px] top-[130px] left-[150px]")) {
    return "w-[242px] h-[242px] top-[128px] left-[133px]";
  }
  if (originalClass.includes("w-[169px] h-[139px] top-0 left-[181px]")) {
    return "w-[127px] h-[104px] top-0 left-[180px]";
  }
  if (originalClass.includes("w-[216px] h-[188px] top-[121px] left-[413px]")) {
    return "w-[162px] h-[141px] top-[125px] left-[340px]";
  }
  if (originalClass.includes("w-[173px] h-[169px] top-[444px] left-[401px]")) {
    return "w-[130px] h-[127px] top-[370px] left-[310px]";
  }
  if (originalClass.includes("w-[154px] h-[179px] top-[416px] left-0")) {
    return "w-[116px] h-[134px] top-[352px] left-0";
  }
	if (originalClass.includes("w-[118px] h-[113px] top-[119px] left-0")) {
		return "w-[118px] h-[113px] top-[119px] left-0";
	}
  return originalClass;
};

// Helper function to get technology icons
const getTechIcons = () => {
  return [
    { name: "JS", icon: ({ className }: { className: string }) => <div className={`${className} bg-yellow-500 rounded text-black font-bold text-xs flex items-center justify-center`}>JS</div> },
    { name: "TS", icon: ({ className }: { className: string }) => <div className={`${className} bg-blue-600 rounded text-white font-bold text-xs flex items-center justify-center`}>TS</div> },
    { name: "React", icon: ({ className }: { className: string }) => <div className={`${className} bg-cyan-500 rounded text-white font-bold text-xs flex items-center justify-center`}>⚛</div> },
    { name: "Next", icon: ({ className }: { className: string }) => <div className={`${className} bg-black rounded text-white font-bold text-xs flex items-center justify-center`}>N</div> },
    { name: "Node", icon: ({ className }: { className: string }) => <div className={`${className} bg-green-600 rounded text-white font-bold text-xs flex items-center justify-center`}>N</div> },
    { name: "Python", icon: ({ className }: { className: string }) => <div className={`${className} bg-blue-500 rounded text-yellow-300 font-bold text-xs flex items-center justify-center`}>Py</div> },
    { name: "Django", icon: ({ className }: { className: string }) => <div className={`${className} bg-green-800 rounded text-white font-bold text-xs flex items-center justify-center`}>Dj</div> },
    { name: "FastAPI", icon: ({ className }: { className: string }) => <div className={`${className} bg-teal-600 rounded text-white font-bold text-xs flex items-center justify-center`}>FA</div> },
    { name: "Docker", icon: ({ className }: { className: string }) => <div className={`${className} bg-blue-400 rounded text-white font-bold text-xs flex items-center justify-center`}>🐳</div> },
    { name: "PostgreSQL", icon: ({ className }: { className: string }) => <div className={`${className} bg-blue-700 rounded text-white font-bold text-xs flex items-center justify-center`}>PG</div> },
    { name: "C++", icon: ({ className }: { className: string }) => <div className={`${className} bg-blue-800 rounded text-white font-bold text-xs flex items-center justify-center`}>C++</div> },
  ];
};
