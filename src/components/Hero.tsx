"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-8 px-6 lg:px-20 pt-32 pb-8 lg:pt-40 lg:pb-10 bg-gradient-to-br from-[#3b1f16] via-[#5a2d21] to-[#2a120c] font-sans">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] lg:bg-fixed" />

            {/* Background Animated Blob */}
            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 60, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-32 left-10 w-72 h-72 bg-strawberry/5 rounded-full blur-3xl -z-10"
            />

            {/* Left Content Side */}
            <div className="w-full lg:w-[60%] flex flex-col items-center text-center space-y-5 lg:space-y-6 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-black text-white leading-[0.95] tracking-tighter text-[50px] sm:text-[64px] md:text-[84px] lg:text-[72px] xl:text-[100px]"
                >
                    Taste the <br />
                    Sweetest <br />
                    <span className="text-strawberry drop-shadow-[0_0_10px_rgba(255,77,77,0.3)]">Happiness</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-base sm:text-lg lg:text-xl text-vanilla/90 max-w-2xl font-medium leading-relaxed drop-shadow-lg"
                >
                    Fresh, creamy, and made with love. Indulge in our artisan flavors crafted from the finest ingredients.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 w-full max-w-xl"
                >
                    <button className="flex items-center justify-center gap-2 w-full sm:w-64 px-10 py-4 bg-strawberry text-white font-black text-lg sm:text-xl rounded-full shadow-[0_15px_35px_rgba(255,77,77,0.3)] hover:bg-strawberry/90 hover:scale-105 active:scale-95 transition-all duration-300">
                        Explore Flavors
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full sm:w-64 px-10 py-4 bg-white/10 backdrop-blur-xl text-white font-black text-lg sm:text-xl rounded-full border-2 border-white/20 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl">
                        Order Now
                    </button>
                </motion.div>
            </div>

            {/* Right Image Side */}
            <div className="w-full lg:w-[40%] flex items-center justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className="relative"
                >
                    <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-[22rem] sm:w-[26rem] lg:w-[30rem] xl:w-[34rem] h-[60vh] sm:h-[62vh] lg:h-[70vh]"
                    >
                        <Image
                            src="/ice2.png"
                            alt="Artisan Ice Cream with Tiny Chefs"
                            fill
                            sizes="(max-width: 640px) 22rem, (max-width: 1024px) 26rem, 34rem"
                            className="object-contain drop-shadow-[0_50px_90px_rgba(0,0,0,0.75)]"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Gradient Overlay at bottom for more depth */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
