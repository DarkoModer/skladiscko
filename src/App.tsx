import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContainersPage from './pages/ContainersPage';
import StoragePage from './pages/StoragePage';
import TransportPage from './pages/TransportPage';
import ConstructionPage from './pages/ConstructionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SeoNajemSkladiscnegaKontejnerja from './pages/SeoNajemSkladiscnegaKontejnerja';
import SeoNajemKontejnerjaZaShranjevanje from './pages/SeoNajemKontejnerjaZaShranjevanje';
import SeoSkladiscniKontejnerCena from './pages/SeoSkladiscniKontejnerCena';
import SeoSkladiscniKontejnerji from './pages/SeoSkladiscniKontejnerji';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageKey, setPageKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (page: string) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    setPageKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const seoPages = ['seo-najem-skladiscnega-kontejnerja', 'seo-najem-kontejnerja-za-shranjevanje', 'seo-skladiscni-kontejner-cena', 'seo-skladiscni-kontejnerji'];
  const isSeoPage = seoPages.includes(currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'containers':
        return <ContainersPage onPageChange={handlePageChange} />;
      case 'storage':
        return <StoragePage onPageChange={handlePageChange} />;
      case 'transport':
        return <TransportPage onPageChange={handlePageChange} />;
      case 'construction':
        return <ConstructionPage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'seo-najem-skladiscnega-kontejnerja':
        return <SeoNajemSkladiscnegaKontejnerja onPageChange={handlePageChange} />;
      case 'seo-najem-kontejnerja-za-shranjevanje':
        return <SeoNajemKontejnerjaZaShranjevanje onPageChange={handlePageChange} />;
      case 'seo-skladiscni-kontejner-cena':
        return <SeoSkladiscniKontejnerCena onPageChange={handlePageChange} />;
      case 'seo-skladiscni-kontejnerji':
        return <SeoSkladiscniKontejnerji onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {!isSeoPage && <Header currentPage={currentPage} onPageChange={handlePageChange} />}
      <main key={pageKey} className="page-transition">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
