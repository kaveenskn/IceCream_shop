'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const menuCategories = [
    {
        title: 'Scoops & Cones',
        image: 'https://i.pinimg.com/736x/ee/60/9d/ee609d6c7bb9e5b178a6caf0980e5135.jpg',
        items: [
            { name: 'Rich Chocolate', price: '$4.50' },
            { name: 'Fresh Strawberry', price: '$4.50' },
            { name: 'Classic Vanilla', price: '$4.00' },
            { name: 'Mint Choco Chip', price: '$4.75' },
            { name: 'Pistachio Dream', price: '$5.25' },
        ]
    },
    {
        title: 'Sundae Delights',
        image: 'https://i.pinimg.com/736x/bc/8a/76/bc8a766c86538484f056511a2b09abbd.jpg',
        items: [
            { name: 'Caramel Fudge', price: '$6.50' },
            { name: 'Berry Explosion', price: '$6.25' },
            { name: 'Nutty Overload', price: '$7.00' },
            { name: 'Tropical Paradise', price: '$6.75' },
            { name: 'Cookie Monster', price: '$6.50' },
        ]
    },
    {
        title: 'Chiller Beverages',
        image: 'https://i.pinimg.com/736x/1a/4d/14/1a4d1465d13ee9d2e08f38de9a220e47.jpg',
        items: [
            { name: 'Milk Shake', price: '$5.50' },
            { name: 'Iced Coffee', price: '$4.75' },
            { name: 'Fruit Smoothie', price: '$5.25' },
            { name: 'Lemon Tea', price: '$3.50' },
            { name: 'Orange Juice', price: '$4.00' },
        ]
    },
    {
        title: 'Gourmet Specials',
        image: 'https://i.pinimg.com/736x/e1/d4/c0/e1d4c0e0b9deb14946a542567253bcf0.jpg',
        items: [
            { name: 'Gold Leaf Vanilla', price: '$12.00' },
            { name: 'Truffle Chocolate', price: '$15.00' },
            { name: 'Saffron Cream', price: '$10.00' },
            { name: 'Matcha Zen', price: '$8.50' },
            { name: 'Rose Petal Sorbet', price: '$9.00' },
        ]
    }
];

const MenuItem = ({ name, price }: { name: string; price: string }) => (
    <div className="flex justify-between items-center mb-3 group cursor-pointer">
        <span className="text-[var(--vanilla-cream)] group-hover:text-[var(--strawberry-accent)] transition-colors duration-300 font-medium text-sm md:text-base">
            {name}
        </span>
        <div className="flex-grow mx-4 border-b border-dotted border-[var(--vanilla-cream)]/20"></div>
        <span className="text-[var(--vanilla-cream)]/80 font-bold tabular-nums">
            {price}
        </span>
    </div>
);

const FlavourSection: React.FC = () => {
    return (
        <section id="flavours" className="relative min-h-screen bg-[var(--chocolate-brown)] pt-32 pb-24 overflow-hidden border-t border-white/5">
            {/* Background Texture/Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30" />
                <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[var(--strawberry-accent)] rounded-full blur-[150px] opacity-20" />
                <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-[var(--vanilla-cream)] rounded-full blur-[150px] opacity-10" />
            </div>

            {/* Decorative Borders like the reference image */}
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-[var(--strawberry-accent)]/20 pointer-events-none z-0 hidden md:block rounded-xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-[var(--vanilla-cream)]/70 uppercase tracking-[0.4em] font-medium mb-3 text-xs md:text-sm">
                        Indulge in our artisan creations
                    </p>
                    <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-4 tracking-tighter uppercase">
                        Our <span className="text-[var(--strawberry-accent)]">Delicious</span> Flavours
                    </h2>
                    <div className="w-24 h-1 bg-[var(--strawberry-accent)] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 max-w-6xl mx-auto">
                    {menuCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
                        >
                            {/* Category Image Wrapper */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
                                <div className="absolute inset-0 rounded-full border-2 border-[var(--strawberry-accent)] p-2 animate-[spin_20s_linear_infinite] opacity-40">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 bg-[var(--chocolate-brown)] flex items-center justify-center">
                                        <div className="w-2 h-2 bg-[var(--strawberry-accent)] rounded-full" />
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white/5 shadow-2xl">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    {/* Leaf Decorations */}
                                    <div className="absolute top-4 right-4 text-4xl transform rotate-45 select-none pointer-events-none">🍃</div>
                                    <div className="absolute bottom-4 left-4 text-4xl transform -rotate-12 select-none pointer-events-none">🌿</div>
                                </div>
                            </div>

                            {/* Menu Items Wrapper */}
                            <div className="flex-grow w-full">
                                <div className="inline-block px-6 py-1 bg-[var(--strawberry-accent)] text-white font-black text-lg md:text-xl rounded-sm mb-6 uppercase skew-x-[-12deg] shadow-lg">
                                    <span className="inline-block skew-x-[12deg]">{category.title}</span>
                                </div>
                                <div className="space-y-1">
                                    {category.items.map((item) => (
                                        <MenuItem key={item.name} name={item.name} price={item.price} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Elements / Accents */}
                <div className="mt-24 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border-2 border-[var(--strawberry-accent)] text-[var(--strawberry-accent)] font-bold text-lg hover:bg-[var(--strawberry-accent)] hover:text-white transition-all duration-300 rounded-full"
                    >
                        View Full Dessert Menu
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FlavourSection;
