"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bath, BedDouble, MapPin, Square } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Silver Heights Luxury Apartments",
        location: "Sector 45, Gurgaon",
        price: "₹1.5 Cr onwards",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
        specs: { beds: 3, baths: 3, area: "1850 sq.ft" }
    },
    {
        id: 2,
        title: "Grand Commerce Hub",
        location: "Cyber City, Hyderabad",
        price: "₹2.2 Cr onwards",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        specs: { beds: 0, baths: 0, area: "1200 sq.ft" }
    },
    {
        id: 3,
        title: "Green Valley Villas",
        location: "Whitefield, Bangalore",
        price: "₹3.5 Cr onwards",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
        specs: { beds: 4, baths: 5, area: "3200 sq.ft" }
    },
    {
        id: 4,
        title: "Tech Park Plot",
        location: "Noida Expressway",
        price: "₹85 Lakhs",
        type: "Industrial",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        specs: { beds: 0, baths: 0, area: "450 sq.yds" }
    },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.type === filter);

    return (
        <section id="projects" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Featured Projects</span>
                        <h2 className="text-4xl font-serif font-bold text-secondary mt-2">Curated Properties for You</h2>
                    </div>

                    <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${filter === cat
                                    ? "bg-secondary text-white shadow-lg"
                                    : "bg-white text-gray-500 hover:bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 !bg-white-800 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {project.type}
                                    </div>
                                    <div className="absolute bottom-4 right-4 !bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {project.price}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold text-secondary line-clamp-1">{project.title}</h3>
                                        <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-accent-gold transition-colors">
                                            <ArrowUpRight size={18} />
                                        </a>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mb-6">
                                        <MapPin size={16} className="mr-1 text-accent-gold" />
                                        {project.location}
                                    </div>

                                    <div className="flex items-center justify-between text-gray-500 text-xs border-t border-gray-100 pt-4">
                                        {project.specs.beds > 0 && (
                                            <div className="flex items-center gap-1">
                                                <BedDouble size={16} />
                                                <span>{project.specs.beds} Beds</span>
                                            </div>
                                        )}
                                        {project.specs.baths > 0 && (
                                            <div className="flex items-center gap-1">
                                                <Bath size={16} />
                                                <span>{project.specs.baths} Baths</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1">
                                            <Square size={16} />
                                            <span>{project.specs.area}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-all">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
