import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LaunchpadPage from './pages/LaunchpadPage';
import CareerOSPage from './pages/CareerOSPage';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('launchpad');

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'launchpad' && <LaunchpadPage />}
          {activeTab === 'careeros' && <CareerOSPage />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
