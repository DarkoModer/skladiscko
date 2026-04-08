import React from 'react';
import { ArrowRight, Shield, Truck, Building, Sparkles } from 'lucide-react';
import kontejnerji from '../Photos/kontejnerji.webp';

interface HeroProps {
  onPageChange: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onPageChange }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
              <Sparkles className="h-4 w-4 mr-2" />
              Več kot 250+ dostavljenih kontejnerjev
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Vaš partner za
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                skladiščne rešitve
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Nudimo kakovostne kontejnerje, celovito izvedbo skladiščnih projektov in najemne storitve.
              Zaupanja vredno, hitro in prilagodljivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => onPageChange('containers')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Raziščite kontejnerje</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Kontakt</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-blue-200 text-sm">Kontejnerjev</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-blue-200 text-sm">Projektov</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-blue-200 text-sm">Zadovoljstvo</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src={kontejnerji}
                alt="Skladiščni kontejnerji"
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Certificirano</div>
                    <div className="text-sm text-gray-600">ISO standardi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
              <Shield className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Varno in zanesljivo</h3>
            <p className="text-blue-100">Premium kontejnerji in napredni varnostni sistemi za popolno zaščito.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">
              <Truck className="h-8 w-8 text-cyan-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Hitra dostava</h3>
            <p className="text-blue-100">Ekspresna dostava in strokovna postavitev po celotni Sloveniji.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
              <Building className="h-8 w-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Celovite rešitve</h3>
            <p className="text-blue-100">Od načrtovanja do realizacije - kompleten skladiščni projekt.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;