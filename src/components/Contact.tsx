"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-32 z-0 hidden lg:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-accent-gold font-bold tracking-widest uppercase text-sm">Get In Touch</span>
                        <h2 className="text-4xl font-serif font-bold text-secondary mt-2 mb-6">Let's Discuss Your Dream Property</h2>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            Whether you're looking to buy, sell, or lease, our expert consultants are here to guide you through every step of the process.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100/50 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-gold shadow-sm shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary mb-1">Call Us</h4>
                                    <p className="text-gray-500 text-sm mb-1">Mon-Sat from 9am to 7pm</p>
                                    <a href="tel:+919876543210" className="text-lg font-semibold text-secondary hover:text-accent-gold transition-colors block">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100/50 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-gold shadow-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary mb-1">Email Us</h4>
                                    <p className="text-gray-500 text-sm mb-1">Online support 24/7</p>
                                    <a href="mailto:info@silveryards.com" className="text-lg font-semibold text-secondary hover:text-accent-gold transition-colors block">
                                        info@silveryards.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100/50 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-gold shadow-sm shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary mb-1">Visit Us</h4>
                                    <p className="text-gray-500 text-sm mb-1 leading-relaxed">
                                        123 Silver Avenue, Business District,<br />New Delhi, 110001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl"></div>

                        <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your property needs..."></textarea>
                            </div>

                            <button className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-secondary-light transition-all flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
