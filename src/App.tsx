import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContainersPage from './pages/ContainersPage';
import StoragePage from './pages/StoragePage';
import ConstructionPage from './pages/ConstructionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageKey, setPageKey] = useState(0);

  const handlePageChange = (page: string) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    setPageKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'containers':
        return <ContainersPage onPageChange={handlePageChange} />;
      case 'storage':
        return <StoragePage onPageChange={handlePageChange} />;
      case 'construction':
        return <ConstructionPage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main key={pageKey} className="page-transition">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
