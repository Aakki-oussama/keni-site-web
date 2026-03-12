import { useTranslation } from 'react-i18next';
import { Icons } from '../../../../components/shared/Icons';

export const HeroStats = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            
            {/* 1. Feature Card (Top) */}
            <div className="relative aspect-square rounded-[40px] overflow-hidden group shadow-xl">
                <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500" 
                    alt="Clinic environment"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end gap-3 hover:bg-black/50 transition-colors">
                    <h3 className="text-2xl font-marcellus leading-tight text-white">
                        Physio Help <br /> Here
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-[180px]">
                        {t('hero.feature_desc', 'Physio helps restore movement and improve function.')}
                    </p>
                    <button className="absolute bottom-8 end-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 transform group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all shadow-md">
                        <Icons.ArrowRight size={20} className="-rotate-45" />
                    </button>
                </div>
            </div>

            {/* 2. Stats/Illustration Card (Bottom) */}
            <div className="bg-brand rounded-[40px] p-8 aspect-square flex flex-col justify-between relative overflow-hidden group shadow-xl">
                <div className="relative z-10">
                    <span className="text-5xl font-marcellus text-white block">20+</span>
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                        {t('hero.years_expertise', 'Yrs Expertise')}
                    </span>
                </div>

                {/* Team faces - small placeholder */}
                <div className="flex items-center -space-x-3 relative z-10 mt-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand overflow-hidden bg-white/20">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-brand bg-white flex items-center justify-center text-[10px] text-brand font-bold shadow-sm">
                        4.5k
                    </div>
                </div>

                {/* Spine Illustration (SVG) */}
                <div className="absolute right-0 bottom-0 w-32 h-40 opacity-20 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-700">
                    <svg viewBox="0 0 200 300" className="w-full h-full fill-none stroke-white stroke-[2]">
                        <path d="M100 20 C100 20, 80 40, 100 60 C120 80, 100 100, 100 100 C100 100, 120 120, 100 140 C80 160, 100 180, 100 180" />
                        {/* Recursive vertebral shapes */}
                        {[0, 40, 80, 120, 160, 200].map((y) => (
                            <ellipse key={y} cx="100" cy={y+40} rx="20" ry="10" />
                        ))}
                    </svg>
                </div>
            </div>

        </div>
    );
};
