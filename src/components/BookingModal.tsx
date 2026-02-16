"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, X } from "lucide-react";
import { useBooking } from "../context/BookingContext";

export default function BookingModal() {
    const { isBookingOpen, closeBooking } = useBooking();

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBooking}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto w-full max-w-md h-fit bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden"
                    >
                        <div className="bg-secondary p-6 flex justify-between items-center text-white">
                            <div>
                                <h3 className="text-xl font-bold font-serif">Book a Site Visit</h3>
                                <p className="text-xs text-gray-300 uppercase tracking-widest mt-1">Experience Luxury</p>
                            </div>
                            <button
                                onClick={closeBooking}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form className="p-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                        <div className="relative">
                                            <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all pl-10" />
                                            <Calendar size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all pl-10 appearance-none bg-white">
                                                <option>10:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>02:00 PM</option>
                                                <option>04:00 PM</option>
                                            </select>
                                            <Clock size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Interested Project</label>
                                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all appearance-none bg-white">
                                        <option>Select a Project</option>
                                        <option>Silver Heights Luxury Apartments</option>
                                        <option>Grand Commerce Hub</option>
                                        <option>Green Valley Villas</option>
                                        <option>Tech Park Plot</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-accent-gold text-secondary-dark font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all shadow-md mt-2">
                                Confirm Booking
                            </button>

                            <p className="text-xs text-center text-gray-400">
                                Our team will confirm your slot via call/SMS shortly.
                            </p>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
