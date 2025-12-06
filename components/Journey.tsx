import React from 'react';

export const Journey: React.FC = () => {
  const steps = [
    { num: "01", title: "Health Signals", desc: "Wearables connect automatically." },
    { num: "02", title: "AI Analysis", desc: "Your personal AI learns patterns." },
    { num: "03", title: "Daily Guidance", desc: "Receive morning check-ins." },
    { num: "04", title: "Human Oversight", desc: "Clinical team watches over." },
    { num: "05", title: "Long-term Health", desc: "Preventative care plans." },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Your Journey with Chronic AI</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl">From the moment you connect, our system begins to build a protective shield around your health.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-800 w-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 group">
                <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-0">
                   {/* Number/Image Circle */}
                   <div className="w-24 h-24 rounded-full bg-zinc-800 border-4 border-zinc-900 group-hover:border-medical-500 transition-colors overflow-hidden flex items-center justify-center relative mb-6">
                      <img 
                        src={`https://picsum.photos/seed/journey${i}/200/200`} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        alt={step.title}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <span className="text-2xl font-mono font-bold">{step.num}</span>
                      </div>
                   </div>
                   
                   {/* Text */}
                   <div className="lg:text-center">
                     <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                     <p className="text-sm text-zinc-400">{step.desc}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};