import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FlavourCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
    index: number;
    hoveredIndex: number | null;
    onHover: (id: number | null) => void;
}

const FlavourCard: React.FC<FlavourCardProps> = ({
    id,
    name,
    price,
    image,
    index,
    hoveredIndex,
    onHover,
}) => {
    const isHovered = hoveredIndex === index;
    const isAfterHovered = hoveredIndex !== null && index > hoveredIndex;

    // Dynamics for the deck overlap interaction
    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    // Row-aware fanning (index % 5)
    let rotate = ((index % 5) - 2) * 3;

    if (isHovered) {
        translateY = -40;
        scale = 1.12;
        rotate = 0;
    } else if (isAfterHovered) {
        translateX = 80; // Shift right to make space
        translateY = -5;
        rotate = 1;
    }

    return (
        <motion.div
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
            animate={{
                x: translateX,
                y: translateY,
                scale: scale,
                rotate: rotate,
                zIndex: isHovered ? 100 : 10 + index,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative flex-shrink-0 w-44 md:w-52 h-60 md:h-72 bg-[var(--vanilla-cream)] rounded-3xl shadow-xl overflow-hidden cursor-pointer group border border-white/10"
        >
            {/* Image Section */}
            <div className="relative h-3/5 w-full overflow-hidden bg-white/50">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 192px, 224px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[var(--chocolate-brown)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between h-2/5 bg-[var(--vanilla-cream)]">
                <div>
                    <h3 className="text-lg font-serif font-bold text-[var(--chocolate-brown)] line-clamp-1">
                        {name}
                    </h3>
                    <p className="text-[var(--strawberry-accent)] font-bold text-base mt-1">
                        {price}
                    </p>
                </div>

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full py-2 bg-[var(--strawberry-accent)] text-white text-sm font-bold rounded-xl shadow-md hover:bg-[var(--strawberry-accent)]/90 transition-all flex items-center justify-center gap-2 group/btn"
                >
                    Order Now
                </motion.button>
            </div>
        </motion.div>
    );
};

export default FlavourCard;
