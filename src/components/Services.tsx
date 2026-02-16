"use client";

import { Building2, Factory, Home, LandPlot } from "lucide-react";
// Note: Lucide doesn't have 'Key' exported as default sometimes or name might differ, let's use Home/Building 

const services = [
    {
        title: "Residential",
        description: "Premium flats, apartments, independent houses, and villas tailored for your lifestyle.",
        icon: Home,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Commercial",
        description: "Retail shops, office spaces, and showrooms in prime locations for business growth.",
        icon: Building2,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Industrial",
        description: "Warehouses, factories, and industrial plots with excellent connectivity.",
        icon: Factory,
        color: "bg-slate-50 text-slate-600",
    },
    {
        title: "Land & Plots",
        description: "Invest in high-appreciation residential and commercial land parcels.",
        icon: LandPlot,
        color: "bg-green-50 text-green-600",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
                    <h2 className="text-4xl font-serif font-bold text-secondary mt-2 mb-4">Comprehensive Real Estate Solutions</h2>
                    <div className="w-20 h-1 bg-accent-gold mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-6 leading-relaxed">
                        From finding your dream home to securing the perfect commercial space,
                        Silver Yards provides end-to-end services in Sale, Purchase, and Leasing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <span className="text-sm font-semibold text-secondary group-hover:text-accent-gold transition-colors flex items-center gap-2">
                                Learn More <span>&rarr;</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
