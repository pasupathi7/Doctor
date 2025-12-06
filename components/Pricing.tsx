import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">No surprises. Just health.</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Choose the level of care that fits your life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Essential</h3>
            <p className="text-zinc-500 text-sm mb-6">For proactive monitoring.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">$29</span>
              <span className="text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['AI Symptom Checker', 'Wearable Integration', 'Monthly Health Report'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-medical-500" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white">
              Select Plan
            </button>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-3xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xl transform md:-translate-y-4 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-medical-500 text-white text-xs font-bold rounded-bl-xl">POPULAR</div>
            <h3 className="text-xl font-bold mb-2">Complete Care</h3>
            <p className="text-zinc-400 dark:text-zinc-600 text-sm mb-6">Full AI + Human oversight.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-zinc-400 dark:text-zinc-600">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Everything in Essential', '24/7 Human Doctor Review', 'Prescription Management', 'Family Sharing (2 users)'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-medical-400 dark:text-medical-600" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold hover:opacity-90 transition-opacity">
              Start Free Trial
            </button>
          </div>

          {/* Family */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Concierge</h3>
            <p className="text-zinc-500 text-sm mb-6">Ultimate peace of mind.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">$249</span>
              <span className="text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Priority Access', 'Dedicated Care Team', 'At-home Lab Testing', 'Global Coverage'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-medical-500" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};