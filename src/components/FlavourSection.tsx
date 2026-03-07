'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlavourCard from './FlavourCard';

const flavours = [
    { id: 1, name: 'Rich Chocolate', price: '$4.50', image: '/images/flavours/chocolate.png' },
    { id: 2, name: 'Fresh Strawberry', price: '$4.50', image: '/images/flavours/strawberry.png' },
    { id: 3, name: 'Classic Vanilla', price: '$4.00', image: 'https://images.unsplash.com/photo-1570197788417-0e02375c839c?w=400&h=600&fit=crop' },
    { id: 4, name: 'Mint Choco Chip', price: '$4.75', image: 'https://images.unsplash.com/photo-1532678465554-94840274c297?w=400&h=600&fit=crop' },
    { id: 5, name: 'Salted Caramel', price: '$5.00', image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=400&h=600&fit=crop' },
    { id: 6, name: 'Pistachio Dream', price: '$5.25', image: 'https://images.unsplash.com/photo-1560008581-09826d13699b?w=400&h=600&fit=crop' },
    { id: 7, name: 'Coffee Blast', price: '$4.75', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=600&fit=crop' },
    { id: 8, name: 'Mango Sorbet', price: '$4.50', image: 'https://images.unsplash.com/photo-1505394033223-289f3cd62702?w=400&h=600&fit=crop' },
    { id: 9, name: 'Berry Mix', price: '$5.00', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=600&fit=crop' },
    { id: 10, name: 'Cookies & Cream', price: '$4.75', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=600&fit=crop' },
];

const FlavourSection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleHover = (id: number | null) => {
        setHoveredIndex(id);
    };

    return (
        <section className="relative min-h-screen bg-[var(--chocolate-brown)] pt-40 pb-24 overflow-visible flex flex-col items-center justify-start border-t border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[var(--strawberry-accent)] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[var(--vanilla-cream)] rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: 'spring', damping: 25, stiffness: 100, duration: 0.8 }}
                className="container mx-auto px-4 relative z-10 text-center mb-6 md:mb-8"
            >
                <p className="text-[var(--vanilla-cream)]/70 uppercase tracking-[0.3em] font-medium mb-1 text-xs md:text-sm">
                    Indulge in our artisan creations
                </p>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-[var(--vanilla-cream)] mb-1 tracking-tight">
                    Our <span className="text-[var(--strawberry-accent)] italic">Delicious</span> Flavours
                </h2>
            </motion.div>

            {/* Deck Containers - 2 Rows of 5 */}
            <div className="flex flex-col gap-12 mt-8 pb-20">
                {/* Row 1: First 5 cards */}
                <div className="flex justify-center items-center h-[350px] md:h-[400px] overflow-visible">
                    <div className="flex -space-x-12 md:-space-x-20 px-10">
                        {flavours.slice(0, 5).map((flavour, index) => (
                            <FlavourCard
                                key={flavour.id}
                                {...flavour}
                                index={index}
                                hoveredIndex={hoveredIndex !== null && hoveredIndex < 5 ? hoveredIndex : null}
                                onHover={handleHover}
                            />
                        ))}
                    </div>
                </div>

                {/* Row 2: Last 5 cards */}
                <div className="flex justify-center items-center h-[350px] md:h-[400px] overflow-visible">
                    <div className="flex -space-x-12 md:-space-x-20 px-10">
                        {flavours.slice(5, 10).map((flavour, index) => (
                            <FlavourCard
                                key={flavour.id}
                                {...flavour}
                                index={index + 5}
                                hoveredIndex={hoveredIndex !== null && hoveredIndex >= 5 ? hoveredIndex : null}
                                onHover={handleHover}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-[var(--vanilla-cream)]/40 text-xs md:text-sm animate-bounce"
            >
                {hoveredIndex === null ? 'Hover over a card to reveal the sweetness' : 'Looking delicious!'}
            </motion.div>
        </section>
    );
};

export default FlavourSection;
