export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  provider: ServiceProvider;
  rating: number;
  reviews: number;
  image: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalServices: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}