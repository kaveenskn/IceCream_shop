export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--chocolate-brown)] flex items-center justify-center pt-32 p-10 text-center">
            <div>
                <h2 className="text-5xl font-serif font-black text-[var(--vanilla-cream)] mb-4 uppercase tracking-wider">
                    Our <span className="text-[var(--strawberry-accent)] font-serif italic">Story</span>
                </h2>
                <p className="text-[var(--vanilla-cream)]/70 text-xl max-w-2xl mx-auto leading-relaxed">
                    Crafting joy one scoop at a time since 2024. We believe in high-quality ingredients,
                    playful combinations, and providing the sweetest experience for our community.
                </p>
            </div>
        </main>
    );
}
