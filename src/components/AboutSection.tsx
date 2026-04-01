'use client';

import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="bg-[var(--chocolate-brown)] text-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* About Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-wide">
                            Visit Our <span className="text-[var(--strawberry-accent)] italic">Parlor</span>
                        </h2>
                        <div className="w-24 h-1 bg-[var(--strawberry-accent)] rounded-full"></div>
                    </div>
                    
                    <p className="text-lg md:text-xl leading-relaxed text-[var(--vanilla-cream)]/80 font-medium">
                        Since 2024, we've been crafting the finest artisanal ice cream. 
                        Every scoop is made with love, locally-sourced ingredients, and a dash of magic. 
                        Whether you are craving classic vanilla bean or our experimental seasonal flavors, 
                        we have something to make your day sweeter.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-[var(--strawberry-accent)] w-6 h-6 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-[var(--vanilla-cream)]">Location</h4>
                                <p className="text-[var(--vanilla-cream)]/70">123 Sweet Tooth Lane<br />Dessertville, NY 10001</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Clock className="text-[var(--strawberry-accent)] w-6 h-6 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-[var(--vanilla-cream)]">Hours</h4>
                                <p className="text-[var(--vanilla-cream)]/70">Mon-Sun: 11:00 AM - 10:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Phone className="text-[var(--strawberry-accent)] w-6 h-6 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-[var(--vanilla-cream)]">Contact</h4>
                                <p className="text-[var(--vanilla-cream)]/70">(555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform hover:scale-[1.02] duration-300">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175486196236!2d-73.98782292415516!3d40.74844047138766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1714502014652!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
