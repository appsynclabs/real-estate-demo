"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image Placeholder - Replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-gray-900 to-black z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-27bfef40e5c6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-xl md:text-2xl font-light text-accent-silver tracking-[0.2em] mb-4 uppercase">
                        Welcome to Silver Yards
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
                        Elevating Real Estate <br />
                        <span className="text-accent-gold">Standards</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
                        Your trusted partner for Residential, Commercial, and Industrial properties.
                        Experience the art of living with our curated selection of premium spaces.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-4 bg-accent-gold text-secondary-dark font-bold rounded-lg hover:bg-white hover:text-secondary transition-all flex items-center justify-center gap-2 group">
                            Explore Projects
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center animate-bounce"
            >
                <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
}
