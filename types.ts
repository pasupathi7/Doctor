export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}