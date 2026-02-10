export interface ProductFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
