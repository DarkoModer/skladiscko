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
          className="w-full h-full object-cover scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950/95 via-steel-900/80 to-steel-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950/70 via-transparent to-steel-950/40" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-3xl animate-glow" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl animate-glow animate-delay-500" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-steel-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <div className="opacity-0 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-accent-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              250+ dostavljenih kontejnerjev
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            Vaš partner za
            <span className="block metallic-text mt-1">
              skladiščne rešitve
            </span>
          </h1>

          <p className="text-lg md:text-xl text-steel-300 leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up animate-delay-200">
            Kakovostni kontejnerji, skladiščni projekti in najemne storitve. Zanesljivo in hitro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <button
              onClick={() => onPageChange('containers')}
              className="btn-accent group"
            >
              Raziščite ponudbo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Kontaktirajte nas
            </button>
          </div>

          <div className="flex gap-10 mt-16 opacity-0 animate-fade-in-up animate-delay-500">
            {[
              { value: '250+', label: 'Kontejnerjev' },
              { value: '25+', label: 'Projektov' },
              { value: '6+', label: 'Let izkušenj' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-10">
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-steel-400">{stat.label}</div>
                </div>
                {i < 2 && <div className="w-px h-10 bg-gradient-to-b from-transparent via-steel-500/30 to-transparent" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-700">
        <div className="w-5 h-8 rounded-full border-2 border-steel-400/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-accent-300/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
