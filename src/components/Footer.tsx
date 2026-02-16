import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="relative w-10 h-10 bg-white/10 rounded p-1">
                                <Image src="/logo.svg" alt="Silver Yards" fill className="object-cover p-1" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-serif">Silver Yards</h3>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Real Estate Experts</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium real estate solutions for residential, commercial, and industrial needs.
                            Transforming dreams into addresses since 2010.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-secondary-dark transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            {['Home', 'About Us', 'Projects', 'Services', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 bg-accent-gold rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Our Services</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            {['Residential Sales', 'Commercial Leasing', 'Industrial Plots', 'Property Management', 'Legal Consultation', 'Investment Advisory'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent-gold shrink-0 mt-1" size={18} />
                                <span>123 Silver Avenue, Business District,<br />New Delhi, 110001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-accent-gold shrink-0" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-accent-gold shrink-0" size={18} />
                                <span>info@silveryards.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <p>© {new Date().getFullYear()} Silver Yards. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
