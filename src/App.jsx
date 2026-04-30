import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JourneySelector from './components/JourneySelector';
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

  const pageByTab = {
    after12th: <LaunchpadPage />,
    college: <CollegePage />,
    finalyear: <FinalYearPage />,
    workingpro: <WorkingProPage />,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} onLeadClick={() => setShowLeadModal(true)} />
      <JourneySelector activeStage={activeTab} onStageChange={setActiveTab} />

        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="hidden" />
          </div>
        </div>

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
