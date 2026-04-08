import React from 'react';
import { Container, Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Container className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Skladiščko</h3>
                <p className="text-blue-300">Skladiščne rešitve</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Zaupanja vreden ponudnik skladiščnih rešitev z več kot 5 leti izkušenj. 
              Nudimo prodajo kontejnerjev in celovito izvedbo terenskih rešitev.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">069 633 480</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">info@skladiscko.si</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">Puhova ulica 12a, 2250 Ptuj</span>
              </div>
              <div className="flex items-center space-x-3 pt-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61577763940228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                >
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-blue-100 group-hover:text-white">Sledite nam na Facebooku</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Storitve</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white cursor-pointer transition-colors">Kontejnerji</li>
              <li className="hover:text-white cursor-pointer transition-colors">Najem skladišč</li>
              <li className="hover:text-white cursor-pointer transition-colors">Izgradnja self-storage</li>
              <li className="hover:text-white cursor-pointer transition-colors">Varnostni sistemi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Dostava in postavitev</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Delovni čas</h4>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-300" />
                <span>24/7 na voljo</span>
              </div>
              <p className="text-sm text-blue-300 mt-2">
                Vedno dosegljivi za vaše potrebe
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2026 Skladiščko. Vse pravice pridržane.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;