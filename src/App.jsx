import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadCaptureModal from './components/LeadCaptureModal';
import ChatWidget from './components/ChatWidget';
import AdminPanel from './components/AdminPanel';
import LaunchpadPage from './pages/LaunchpadPage';
import CollegePage from './pages/CollegePage';
import FinalYearPage from './pages/FinalYearPage';
import WorkingProPage from './pages/WorkingProPage';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('after12th');
  const [showLeadModal, setShowLeadModal] = React.useState(false);
  const [showAdmin, setShowAdmin] = React.useState(false);

  React.useEffect(() => {
    function openHandler() {
      setShowLeadModal(true);
    }
    window.addEventListener('openLeadModal', openHandler);
    return () => window.removeEventListener('openLeadModal', openHandler);
  }, []);

  // Set canonical URL for SEO (served from root, will be under /launchpad/ when proxied)
  React.useEffect(() => {
    const baseUrl = 'https://www.atyant.in';
    const isProduction = window.location.host !== 'localhost:5173' && window.location.host !== 'localhost:5174';
    
    // In production (proxied), URLs are under /launchpad/; in dev/Vercel preview, they're at root
    const path = isProduction ? `/launchpad${window.location.pathname}` : window.location.pathname;
    const canonicalUrl = `${baseUrl}${path === '/launchpad/' ? '/launchpad/' : path}`;
    
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, []);

  const pageByTab = {
    after12th: <LaunchpadPage activeTab={activeTab} onTabChange={setActiveTab} />,
    college: <CollegePage activeTab={activeTab} onTabChange={setActiveTab} />,
    finalyear: <FinalYearPage activeTab={activeTab} onTabChange={setActiveTab} />,
    workingpro: <WorkingProPage activeTab={activeTab} onTabChange={setActiveTab} />,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
      <Navbar onLeadClick={() => setShowLeadModal(true)} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {pageByTab[activeTab] ?? <LaunchpadPage />}
        </motion.div>
      </AnimatePresence>

      <Footer />
      <LeadCaptureModal open={showLeadModal} onClose={() => setShowLeadModal(false)} />
      <ChatWidget />
      <AdminPanel open={showAdmin} onClose={() => setShowAdmin(false)} />
        <WhatsAppFloatingButton />
    </div>
  );
}
