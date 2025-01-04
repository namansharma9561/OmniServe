import React from 'react';
import { Briefcase, Code, PenTool, MessageSquare, BookOpen, Camera } from 'lucide-react';
import { Category } from '../types';

const iconMap: { [key: string]: any } = {
  Briefcase,
  Code,
  PenTool,
  MessageSquare,
  BookOpen,
  Camera,
};

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 mb-8">
      {categories.map((category) => {
        const Icon = iconMap[category.icon];
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(selectedCategory === category.name ? null : category.name)}
            className={`flex flex-col items-center p-4 rounded-lg min-w-[120px] transition-colors ${
              selectedCategory === category.name
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};