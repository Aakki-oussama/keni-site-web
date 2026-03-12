import { useState } from 'react';

export const HeroGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-white/50 shadow-xl">
                <img 
                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000" 
                    alt="Therapist with patient"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />

                {/* Pagination Dots */}
                <div className="absolute bottom-10 inset-x-0 flex justify-center gap-3">
                    {[0, 1, 2].map((i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeIndex === i ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Floating shadow effect */}
            <div className="absolute -inset-4 bg-brand/5 blur-3xl -z-10 opacity-50" />
        </div>
    );
};
