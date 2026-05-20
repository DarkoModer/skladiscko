import { useState, useEffect } from 'react';
import { Menu, X, Container } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigation = [
  { name: 'Domov', id: 'home' },
  { name: 'Kontejnerji', id: 'containers' },
  { name: 'Najem', id: 'storage' },
  { name: 'Izgradnja', id: 'construction' },
  { name: 'O nas', id: 'about' },
  { name: 'Kontakt', id: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2.5 group"
          >
            <div className={`p-1.5 rounded-lg transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-br from-steel-700 to-steel-800'
                : 'bg-white/15 backdrop-blur-sm'
            }`}>
              <Container className="h-5 w-5 text-white" />
            </div>
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-steel-900' : 'text-white'
            }`}>
              Skladiščko
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  currentPage === item.id
                    ? scrolled
                      ? 'text-steel-800 bg-steel-100'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-steel-500 hover:text-steel-800 hover:bg-steel-50'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? 'text-steel-700 hover:bg-steel-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 transition-all duration-400 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-steel-950/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <nav className="relative bg-white mx-4 mt-2 rounded-2xl shadow-xl shadow-steel-900/10 p-3 border border-steel-100">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              } ${
                currentPage === item.id
                  ? 'text-steel-800 bg-steel-50'
                  : 'text-steel-600 hover:bg-steel-50'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {item.name}
            </button>
          ))}
          <div className="border-t border-steel-100 mt-3 pt-3">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
