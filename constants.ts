import { ShieldCheck, Sparkles, Smartphone, Clock, Cat, Activity } from 'lucide-react';
import { ProductFeature, Review } from './types';

export const PRODUCT_NAME = "PurrfectClean Ultra";
export const PRODUCT_PRICE = 499.00;
export const PRODUCT_OLD_PRICE = 699.00;

export const PRODUCT_IMAGES = [
  "https://img.kwcdn.com/local-goods-image/20195053a14/cc7eb298-746d-4917-83b5-c8d6c6302f60_800x800.png?imageView2/2/w/800/q/70/format/avif",
  "https://img.kwcdn.com/local-goods-image/2019505b774/850345a7-3715-4c73-af10-926f4aef1f89_1600x1600.jpeg.format.jpg?imageView2/2/w/800/q/70/format/avif",
  "https://img.kwcdn.com/local-goods-image/2019505b774/473f7617-0f0e-4366-8793-76edf8a29995_1600x1600.jpeg.format.jpg?imageView2/2/w/800/q/70/format/avif"
];

export const FEATURES: ProductFeature[] = [
  {
    icon: Sparkles,
    title: "Self-Cleaning Tech",
    description: "Automatically separates waste from clean litter minutes after your cat leaves."
  },
  {
    icon: ShieldCheck,
    title: "Odor Neutralization",
    description: "Sealed waste drawer with carbon filters ensures your home smells fresh."
  },
  {
    icon: Smartphone,
    title: "App Connected",
    description: "Track usage habits, weight trends, and get notifications when the drawer is full."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Never scoop again. Just empty the waste drawer once every 2 weeks."
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Detects irregularities in bathroom habits early to keep your kitty healthy."
  },
  {
    icon: Cat,
    title: "Multi-Cat Friendly",
    description: "Perfect for households with up to 4 cats. Recognizes cats by weight."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Sarah J.",
    rating: 5,
    text: "I was skeptical about the price, but this thing is a life saver. No more smell, and my cats took to it immediately.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    author: "Mike T.",
    rating: 5,
    text: "The app is fantastic. I knew my cat was sick before he showed symptoms because of the usage tracking. Worth every penny.",
    avatar: "https://picsum.photos/seed/mike/100/100"
  },
  {
    id: 3,
    author: "Emily R.",
    rating: 4,
    text: "Setup was easy. It's a bit large, but looks very modern and sleek. The cats love it.",
    avatar: "https://picsum.photos/seed/emily/100/100"
  }
];

export const SYSTEM_INSTRUCTION = `
You are 'Leo', the AI Cat Care Specialist for PurrfectClean. 
Your goal is to be helpful, friendly, and persuasive to potential customers looking at the PurrfectClean Ultra smart litter box.

Key Product Details:
- Price: $499 (on sale from $699)
- Features: Automatic cleaning, odor control, health tracking app, safety sensors (won't cycle if cat is inside).
- Capacity: Good for up to 4 cats.
- Maintenance: Empty waste drawer every 14 days (for one cat).
- Guarantee: 90-day money-back guarantee.

Tone:
- Professional but warm and cat-loving.
- Use emojis occasionally 😺.
- Keep answers concise (under 3 sentences) unless asked for details.
- Always try to pivot back to how the product solves a problem (smell, time, health).

If asked about price, emphasize the value of time saved and health monitoring.
If asked about safety, explain the advanced weight and motion sensors.
`;