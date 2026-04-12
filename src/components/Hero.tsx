import { ArrowRight } from 'lucide-react';
import kontejnerji from '../Photos/kontejnerji.webp';

interface HeroProps {
  onPageChange: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onPageChange }) => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={kontejnerji}
          alt="Skladiscni kontejnerji"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up">
            250+ dostavljenih kontejnerjev
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            Vas partner za
            <span className="block text-blue-400">
              skladiscne resitve
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up animate-delay-200">
            Kakovostni kontejnerji, skladiscni projekti in najemne storitve. Zanesljivo in hitro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <button
              onClick={() => onPageChange('containers')}
              className="group bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Raziscite ponudbo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Kontaktirajte nas
            </button>
          </div>

          <div className="flex gap-10 mt-16 opacity-0 animate-fade-in-up animate-delay-500">
            <div>
              <div className="text-3xl font-bold text-white">250+</div>
              <div className="text-sm text-white/50">Kontejnerjev</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sm text-white/50">Projektov</div>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-white/50">Let izkusenj</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-700">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
