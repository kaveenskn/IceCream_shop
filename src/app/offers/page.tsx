'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { offersData } from '@/data/offers';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const OffersSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeOffer = offersData[activeIndex];

    return (
        <section id="offers" className="relative bg-[var(--chocolate-brown)] py-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 pt-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-[var(--strawberry-accent)] font-bold tracking-[0.3em] uppercase text-sm">
                                Who We Are
                            </span>

                            {/* Tab-like Navigation */}
                            <div className="flex gap-8 border-b border-white/10 pb-4">
                                {offersData.map((offer, index) => (
                                    <button
                                        key={offer.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative pb-4 text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-white/40 hover:text-white/70'
                                            }`}
                                    >
                                        {offer.category}
                                        {activeIndex === index && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--strawberry-accent)]"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeOffer.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6"
                            >
                                <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight uppercase">
                                    {activeOffer.title}
                                </h2>
                                <p className="text-[var(--vanilla-cream)]/70 text-base md:text-lg leading-relaxed max-w-lg">
                                    {activeOffer.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-[var(--strawberry-accent)] text-white font-bold rounded-xl shadow-lg shadow-[var(--strawberry-accent)]/20 hover:bg-[var(--strawberry-accent)]/90 transition-all"
                        >
                            Claim This Offer
                        </motion.button>
                    </div>

                    {/* Right Side: Slider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3] md:aspect-auto md:h-[450px]"
                    >
                        <Swiper
                            modules={[Autoplay, EffectFade, Pagination]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet !bg-white/30 !w-3 !h-3 !opacity-100',
                                bulletActiveClass: '!bg-[var(--strawberry-accent)] !w-8 !rounded-full',
                            }}
                            className="h-full w-full"
                        >
                            <AnimatePresence mode="wait">
                                {activeOffer.images.map((image, idx) => (
                                    <SwiperSlide key={`${activeOffer.id}-${idx}`}>
                                        <div className="relative h-full w-full group">
                                            <Image
                                                src={image}
                                                alt={`${activeOffer.title} slide ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={idx === 0}
                                                unoptimized={image.startsWith('http')}
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </AnimatePresence>
                        </Swiper>
                    </motion.div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--strawberry-accent)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--chocolate-brown)]/20 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default OffersSection;
