import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-medical-50/50 to-transparent dark:from-medical-900/10 dark:to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-medical-400/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Accepting new patients for Beta</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Your own AI Doctor built around your body.
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Experience the future of personalized medicine. Our AI analyzes your biometrics to provide proactive care, 24/7 monitoring, and instant medical guidance tailored specifically to your physiology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4" />
                How it Works
              </button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-zinc-800/50">
               <img 
                 src="https://picsum.photos/seed/doctor_team/800/600" 
                 alt="Medical Professionals" 
                 className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                 <div className="glass-panel px-6 py-4 rounded-xl border border-white/20">
                   <p className="text-sm font-medium text-white/90">Clinical Accuracy</p>
                   <p className="text-2xl font-bold text-white">99.8%</p>
                 </div>
               </div>
             </div>
             
             {/* Floating UI Elements for decoration */}
             <div className="absolute -left-12 top-1/4 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 animate-bounce delay-700 duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Daily Check-in</p>
                    <p className="text-sm font-bold">All Vitals Normal</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};