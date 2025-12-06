import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Safeguards } from './components/Safeguards';
import { Journey } from './components/Journey';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 overflow-x-hidden selection:bg-medical-200 dark:selection:bg-medical-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Safeguards />
        <Journey />
        <Pricing />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;