"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "React"
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Web Design",
    excerpt: "Explore the latest CSS features including Grid, Flexbox, and custom properties to create stunning web layouts.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "CSS"
  },
  {
    id: 3,
    title: "Node.js Performance Optimization Tips",
    excerpt: "Discover proven strategies to optimize your Node.js applications for better performance and scalability.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Node.js"
  },
  {
    id: 4,
    title: "Database Design Best Practices",
    excerpt: "Learn essential database design principles that will help you build efficient and maintainable data structures.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2025-01-01",
    readTime: "12 min read",
    category: "Database"
  },
  {
    id: 5,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of web development in 2025 and beyond.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Trends"
  },
  {
    id: 6,
    title: "API Security Best Practices",
    excerpt: "Essential security measures every developer should implement when building and consuming APIs.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-12-25",
    readTime: "9 min read",
    category: "Security"
  }
];

export const Blog = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#13161a]">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and the ever-evolving digital landscape.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                    <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};