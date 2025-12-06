import React from 'react';
import { Stethoscope, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900">
                <Stethoscope size={18} />
              </div>
              <span className="font-bold text-lg text-zinc-900 dark:text-white">AI Doctor</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Personalized medicine for the digital age. Built with privacy first.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-medical-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">For Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-medical-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-medical-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-medical-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-zinc-400">© 2024 AI Doctor Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Twitter size={16} /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};