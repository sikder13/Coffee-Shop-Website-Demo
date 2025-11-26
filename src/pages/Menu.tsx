import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';

export function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');

  const menuItems = [
    { id: 'm1', name: 'Classic Espresso', price: 3.50, image: 'https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjM5ODA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'espresso', description: 'Rich and bold single shot' },
    { id: 'm2', name: 'Cappuccino', price: 4.75, image: 'https://images.unsplash.com/photo-1643909618082-d916d591c2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwZm9hbSUyMGFydHxlbnwxfHx8fDE3NjQwMjM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'espresso', description: 'Perfect balance of espresso and foam' },
    { id: 'm3', name: 'Latte', price: 5.00, image: 'https://images.unsplash.com/photo-1680489809506-d8def0e1631f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNvZmZlZSUyMGFydHxlbnwxfHx8fDE3NjQwMjIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'espresso', description: 'Smooth espresso with steamed milk' },
    { id: 'm4', name: 'Flat White', price: 5.25, image: 'https://images.unsplash.com/photo-1727080409436-356bdc609899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwd2hpdGUlMjBjb2ZmZWV8ZW58MXx8fHwxNzYzOTM2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'espresso', description: 'Velvety microfoam perfection' },
    { id: 'm5', name: 'Iced Latte', price: 5.50, image: 'https://images.unsplash.com/photo-1683649197410-c58e48ce4d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbGF0dGUlMjBjb2ZmZWV8ZW58MXx8fHwxNzY0MDMyNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'cold', description: 'Refreshing chilled espresso drink' },
    { id: 'm6', name: 'Cold Brew', price: 4.50, image: 'https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NjM5NDMxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'cold', description: 'Smooth 12-hour steeped coffee' },
    { id: 'm7', name: 'Nitro Cold Brew', price: 6.00, image: 'https://images.unsplash.com/photo-1644764399224-f7d18b1e8d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXRybyUyMGNvbGQlMjBicmV3fGVufDF8fHx8MTc2NDAyNjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'cold', description: 'Creamy nitrogen-infused cold brew' },
    { id: 'm8', name: 'Iced Matcha Latte', price: 6.25, image: 'https://images.unsplash.com/photo-1708572727896-117b5ea25a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVufGVufDF8fHx8MTc2NDAzMjYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'specialty', description: 'Premium Japanese matcha' },
    { id: 'm9', name: 'Chai Latte', price: 5.50, image: 'https://images.unsplash.com/photo-1629444984463-71205dfc7bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpJTIwbGF0dGUlMjBzcGljZXxlbnwxfHx8fDE3NjM5MzQxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'specialty', description: 'House-made spiced chai blend' },
    { id: 'm10', name: 'Mocha', price: 5.75, image: 'https://images.unsplash.com/photo-1619286310410-a95de97b0aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjQwMDkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'specialty', description: 'Rich chocolate and espresso' },
    { id: 'm11', name: 'Vanilla Latte', price: 5.50, image: 'https://images.unsplash.com/photo-1683122925249-8b15d807db4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwbGF0dGUlMjBjb2ZmZWV8ZW58MXx8fHwxNzY0MDMyNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'specialty', description: 'Classic vanilla sweetness' },
    { id: 'm12', name: 'Caramel Macchiato', price: 6.00, image: 'https://images.unsplash.com/photo-1604298458655-ae6e04213678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJhbWVsJTIwbWFjY2hpYXRvJTIwY29mZmVlfGVufDF8fHx8MTc2NDAzMjYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', category: 'specialty', description: 'Layered caramel delight' },
  ];

  const filters = [
    { id: 'all', label: 'All Drinks' },
    { id: 'espresso', label: 'Espresso' },
    { id: 'cold', label: 'Cold Brew' },
    { id: 'specialty', label: 'Specialty' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-[var(--color-brown-dark)] tracking-[-0.02em]">Our Menu</h1>
          <p className="text-base sm:text-lg text-[var(--color-gray)] max-w-2xl mx-auto leading-relaxed mb-6">
            From classic espresso to innovative seasonal drinks, every cup is crafted with care
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? 'primary' : 'secondary'}
                className={activeFilter === filter.id ? 'shadow-lg' : ''}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="w-full px-4 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                type="drink"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}