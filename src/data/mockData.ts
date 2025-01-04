import { Service, Category } from '../types';
import { Briefcase, Code, PenTool, MessageSquare, BookOpen, Camera } from 'lucide-react';

export const categories: Category[] = [
  { id: '1', name: 'Business Consulting', icon: 'Briefcase' },
  { id: '2', name: 'Development', icon: 'Code' },
  { id: '3', name: 'Design', icon: 'PenTool' },
  { id: '4', name: 'Marketing', icon: 'MessageSquare' },
  { id: '5', name: 'Education', icon: 'BookOpen' },
  { id: '6', name: 'Photography', icon: 'Camera' },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Professional Web Development',
    description: 'Full-stack web development with modern technologies',
    category: 'Development',
    price: 75,
    provider: {
      id: 'p1',
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 4.9,
      totalServices: 127
    },
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Brand Identity Design',
    description: 'Complete brand identity package including logo and guidelines',
    category: 'Design',
    price: 120,
    provider: {
      id: 'p2',
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 4.7,
      totalServices: 89
    },
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Business Strategy Consulting',
    description: 'Expert guidance for business growth and optimization',
    category: 'Business Consulting',
    price: 200,
    provider: {
      id: 'p3',
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 4.8,
      totalServices: 167
    },
    rating: 4.7,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
  }
];