import React, { type FC } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  origin?: string;
  type?: 'drink' | 'beans';
}

export const ProductCard: FC<ProductCardProps> = ({ id, name, price, image, description, origin, type }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, type, origin });
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out transform-gpu hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[var(--color-burnt-orange)]/30 w-full max-w-sm">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500 shadow-lg"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h4 className="text-base sm:text-lg text-[var(--color-brown-dark)] mb-1">{name}</h4>
        {origin && (
          <p className="text-sm text-[var(--color-sage)] mb-2">{origin}</p>
        )}
        {description && (
          <p className="text-sm text-[var(--color-gray)] mb-3 line-clamp-2 leading-relaxed">{description}</p>
        )}
        <div className="flex items-center justify-between mt-4">
          <span className="text-[var(--color-burnt-orange)]">${price.toFixed(2)}</span>
          <Button onClick={handleAddToCart} className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};