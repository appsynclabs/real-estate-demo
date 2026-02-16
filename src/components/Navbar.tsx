"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useBooking } from "@/context/BookingContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openBooking } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-md py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded transform transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.svg"
                            alt="Silver Yards Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold leading-none tracking-tight ${isScrolled ? 'text-secondary' : 'text-white'}`}>
                            Silver <span className="text-accent font-light">Yards</span>
                        </span>
                        <span className={`text-[0.6rem] uppercase tracking-widest ${isScrolled ? 'text-secondary-light' : 'text-gray-200'}`}>
                            Real Estate Experts
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent-gold ${isScrolled ? "text-secondary" : "text-white/90"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={openBooking}
                        className="bg-accent-gold hover:bg-yellow-500 text-secondary-dark px-5 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                        <Phone size={16} />
                        Book a Visit
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-accent-gold"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-secondary font-medium text-lg hover:text-accent-gold transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    openBooking();
                                }}
                                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold mt-2 hover:bg-secondary-light transition-colors"
                            >
                                Book a Visit
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
