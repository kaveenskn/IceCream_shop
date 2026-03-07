"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, IceCream } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Flavours", href: "/flavours" },
    { name: "Offers", href: "/offers" },
    { name: "About Us", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-4 left-0 right-0 z-[1000] flex justify-center px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`
          relative flex items-center justify-between w-full md:w-[70%] max-w-5xl px-6 py-3
          rounded-full border border-white/20 shadow-lg transition-all duration-300
          ${scrolled ? "bg-white/70 backdrop-blur-xl border-white/40" : "bg-white/40 backdrop-blur-md"}
        `}
            >
                {/* Brand/Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-strawberry rounded-full transition-transform group-hover:scale-110 group-hover:rotate-12">
                        <IceCream className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-linear-to-r from-strawberry to-chocolate bg-clip-text text-transparent">
                        Scoops&Co
                    </span>
                </Link>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className="relative inline-block text-sm text-white font-bold group transition-transform duration-200 hover:scale-105"
                            >
                                {item.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-chocolate hover:bg-strawberry/10 rounded-full transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => {
                                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            aria-current={isActive ? "page" : undefined}
                                            onClick={() => setIsOpen(false)}
                                            className={`px-4 py-3 text-lg font-medium text-chocolate hover:bg-strawberry/5 rounded-2xl transition-all hover:underline decoration-white underline-offset-4 hover:scale-105 ${isActive ? "underline decoration-white underline-offset-4" : ""
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </nav>
    );
}
