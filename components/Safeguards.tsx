import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileCheck } from 'lucide-react';

export const Safeguards: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">Safeguards you deserve.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
              Your health data is sensitive. We treat it with the highest level of encryption and privacy standards in the industry. Human doctors stand behind every major AI decision.
            </p>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-4 mb-2">
                    <img src="https://picsum.photos/seed/doctor_small/100/100" className="w-12 h-12 rounded-full object-cover" alt="Head Doctor" />
                    <div>
                        <p className="font-bold text-sm text-zinc-900 dark:text-white">Dr. Sarah Jensen</p>
                        <p className="text-xs text-zinc-500">Chief Medical Officer</p>
                    </div>
                </div>
                <p className="text-sm italic text-zinc-600 dark:text-zinc-400">"We built AI Doctor to augment human care, not replace the trust and safety you expect from a clinician."</p>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              { Icon: Lock, title: "End-to-End Encryption", desc: "Your data is encrypted in transit and at rest using AES-256 standards." },
              { Icon: ShieldCheck, title: "HIPAA Compliant", desc: "Fully compliant with healthcare privacy regulations and standards." },
              { Icon: EyeOff, title: "Private by Design", desc: "We never sell your data. You own your health records completely." },
              { Icon: FileCheck, title: "Human Oversight", desc: "Complex cases are automatically flagged for review by board-certified MDs." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <div className="w-12 h-12 rounded-full bg-medical-50 dark:bg-medical-900/20 flex items-center justify-center text-medical-600 dark:text-medical-400 mb-4">
                  <item.Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};