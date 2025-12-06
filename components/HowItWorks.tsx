import React, { useState } from 'react';
import { ScanFace, Activity, MessageCircleHeart, Sparkles, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const HowItWorks: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    "https://picsum.photos/seed/scan/400/300",
    "https://picsum.photos/seed/monitor/400/300",
    "https://picsum.photos/seed/consult/400/300"
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    {
      icon: <ScanFace className="w-8 h-8 text-medical-500" />,
      title: "It learns your body",
      desc: "Connect your wearables. We analyze detailed biometrics to establish your unique baseline health profile.",
      prompt: "Digital medical illustration of a human body being scanned with glowing biometric lines, soft blue and teal lighting, high tech healthcare interface style, 4k, minimalist, clean background"
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      title: "It thinks clinically",
      desc: "Our AI engine constantly cross-references your vitals against millions of clinical data points to detect anomalies early.",
      prompt: "Conceptual medical art showing an AI neural network processing DNA and heart rate graphs, clean minimalist style, white and blue color palette, medical technology, bright"
    },
    {
      icon: <MessageCircleHeart className="w-8 h-8 text-purple-500" />,
      title: "It talks like a doctor",
      desc: "Get instant, empathetic, and scientifically-backed answers to your health questions, anytime, anywhere.",
      prompt: "Friendly virtual doctor avatar interface on a glass screen, modern hospital background, soft focus, high quality digital art, empathy and technology, bright, clean"
    }
  ];

  const generateImages = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
        const promises = steps.map(async (step, index) => {
            try {
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash-image',
                    contents: { parts: [{ text: step.prompt }] },
                    config: {
                         imageConfig: { aspectRatio: '4:3' }
                    }
                });

                let imageUrl = null;
                for (const part of response.candidates?.[0]?.content?.parts || []) {
                    if (part.inlineData) {
                        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
                        break;
                    }
                }
                return imageUrl;
            } catch (err) {
                console.error("Failed to generate image for step " + index, err);
                return null;
            }
        });

        const results = await Promise.all(promises);
        
        setImages(prev => results.map((img, i) => img || prev[i]));
        
    } catch (error) {
        console.error("Global generation error", error);
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-medical-600 uppercase mb-3">How It Works</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Healthcare reimagined in 3 steps.</h3>
            </div>
            
            <button 
                onClick={generateImages}
                disabled={isGenerating}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm hover:shadow-md hover:border-medical-500 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
            >
                {isGenerating ? (
                    <RefreshCw className="w-4 h-4 animate-spin text-medical-500" />
                ) : (
                    <Sparkles className="w-4 h-4 text-medical-500 group-hover:text-medical-600" />
                )}
                {isGenerating ? "Creating Illustrations..." : "Generate AI Illustrations"}
            </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative bg-zinc-100 dark:bg-zinc-800">
                {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm z-10">
                         <div className="w-6 h-6 border-2 border-medical-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <img 
                    src={images[index]} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <div className="mb-6 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl w-fit">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{step.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};