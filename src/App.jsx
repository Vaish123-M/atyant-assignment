import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JourneySelector from './components/JourneySelector';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import LaunchpadPage from './pages/LaunchpadPage';
import CollegePage from './pages/CollegePage';
import FinalYearPage from './pages/FinalYearPage';
import WorkingProPage from './pages/WorkingProPage';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('after12th');

  const pageByTab = {
    after12th: <LaunchpadPage />,
    college: <CollegePage />,
    finalyear: <FinalYearPage />,
    workingpro: <WorkingProPage />,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <JourneySelector activeStage={activeTab} onStageChange={setActiveTab} />

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
      <WhatsAppFloatingButton />
    </div>
  );
}
