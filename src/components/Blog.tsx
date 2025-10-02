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
  category: Array<string> | string;
	link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why did we inherit a surveilled internet?",
    excerpt: "The beginnings of the Internet, the Cold War, and its military-commercial roots",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FNym_against_surveillance_Swiss_f089b4bd33.webp&w=3840&q=75",
    date: "2025-06-12",
    readTime: "8 min read",
    category: ["Cybersecurity"],
		link: "https://nym.com/blog/the-surveilled-internet"
  },
	{
		id: 7,
		title: "What is a Denial-of-Service (DoS) attack?",
		excerpt: "Understanding the history, evolution, and severity of denial-of-service attack",
		image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FVPN_2_85b5a04c09.svg&w=3840&q=75",
		date: "2025-09-01",
		readTime: "10 min read",
		category: ["Cybersecurity"],
		link: "https://nym.com/blog/denial-of-service-attacks"
  },
  {
    id: 7,
    title: "What is packet sniffing?",
    excerpt: "Tcpdump, Wireshark, and how your neighbor spies on you",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FNym_VPN_against_surveillance_2_98b83068b6.webp&w=3840&q=75",
    date: "2025-09-24",
    readTime: "9 min read",
    category: "Cybersecurity",
		link: "https://nym.com/blog/what-is-packet-sniffing"
  },
  {
    id: 2,
    title: "What is China’s Great Firewall?",
    excerpt: "How the world's largest censorship apparatus works — and how to circumvent it",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FNym_VPN_against_Censorship_e2a8f256f1.webp&w=3840&q=75",
    date: "2025-08-08",
    readTime: "6 min read",
    category: "Cybersecurity",
		link: "https://nym.com/blog/what-is-great-firewall-of-china"
  },
  {
    id: 3,
    title: "What is decentralization?",
    excerpt: "Understanding principles and technologies for freedom, power regulation, and autonomy today",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FNetwork_1_d56dcb6eb6.svg&w=3840&q=75",
    date: "2025-06-27",
    readTime: "10 min read",
    category: "Web3",
		link: "https://nym.com/blog/what-is-decentralization"
  },
	{
	id: 4,
	title: "What is Monero?",
	excerpt: "Private, secure, and untraceable: Discover Monero (XMR)",
	image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2Fmonero_b8867585fa.png&w=3840&q=75",
	date: "2025-08-08",
	readTime: "6 min read",
	category: "Web3",
	link: "https://nym.com/blog/what-is-monero"
	},
  {
    id: 5,
    title: "What is Litecoin (LTC)?",
    excerpt: "Alternative to Bitcoin: The history and technology behind crypto's digital “silver”",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FLitecoin_with_Nym_VPN_14167b1a2a.png&w=3840&q=75",
    date: "2025-08-03",
    readTime: "2 min read",
    category: "Web3",
		link: "https://nym.com/blog/what-is-litecoin-ltc"

  },
  {
    id: 6,
    title: "X Ban on Brazil",
    excerpt: "Reflections on the fight for democracy, online privacy, and freedom.",
    image: "https://nym.com/_next/image?url=https%3A%2F%2Fassets.nym.com%2FCommunity_2_ffcc873c2d.svg&w=3840&q=75",
    date: "2024-09-10",
    readTime: "9 min read",
    category: "Society",
		link: "https://nym.com/blog/nym-squads-speak-out-tupinymquim-on-the-ground-in-brazil"
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
              Thoughts, tutorials, and insights about web development, privacy, technology, and the ever-evolving digital landscape.
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
                  <a href="https://nym.com/blog/the-surveilled-internet" target="_blank">
										<button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
											Read More <ArrowRight size={18} />
										</button>
									</a>
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
										<a href={post.link} target="_blank">
											<button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300">
												Read More <ArrowRight size={14} />
											</button>
										</a>
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
