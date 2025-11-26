import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';

export function CoffeeBeansShop() {
  const coffeeBeans = [
    {
      id: 'b1',
      name: 'Ethiopian Yirgacheffe',
      price: 18.00,
      image: 'https://images.unsplash.com/photo-1710752213589-2dea3a0ef23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGV0aGlvcGlhbnxlbnwxfHx8fDE3NjQwMzI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Ethiopia',
      description: 'Floral notes with hints of blueberry and citrus. Light to medium roast.',
    },
    {
      id: 'b2',
      name: 'Colombian Supremo',
      price: 16.50,
      image: 'https://images.unsplash.com/photo-1672851613221-c56f31efce8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGNvbG9tYmlhbnxlbnwxfHx8fDE3NjQwMzI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Colombia',
      description: 'Balanced body with caramel sweetness and nutty undertones. Medium roast.',
    },
    {
      id: 'b3',
      name: 'Sumatra Mandheling',
      price: 17.00,
      image: 'https://images.unsplash.com/photo-1760307256225-59037ef0eb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHN1bWF0cmF8ZW58MXx8fHwxNzY0MDMyODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Indonesia',
      description: 'Earthy and full-bodied with herbal notes. Dark roast.',
    },
    {
      id: 'b4',
      name: 'Costa Rican Tarrazu',
      price: 17.50,
      image: 'https://images.unsplash.com/photo-1512427631246-d0c374837803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGNvc3RhJTIwcmljYXxlbnwxfHx8fDE3NjQwMzI4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Costa Rica',
      description: 'Bright acidity with chocolate and honey notes. Medium roast.',
    },
    {
      id: 'b5',
      name: 'Kenyan AA',
      price: 19.00,
      image: 'https://images.unsplash.com/photo-1604094941276-d138e2af76bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGtlbnlhbnxlbnwxfHx8fDE3NjQwMzI4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Kenya',
      description: 'Wine-like acidity with berry and black currant flavors. Medium roast.',
    },
    {
      id: 'b6',
      name: 'Brazilian Santos',
      price: 15.00,
      image: 'https://images.unsplash.com/photo-1626379907480-29d844d603ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGJyYXppbGlhbnxlbnwxfHx8fDE3NjQwMzI4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Brazil',
      description: 'Low acidity with chocolate and nut flavors. Medium-dark roast.',
    },
    {
      id: 'b7',
      name: 'Guatemala Antigua',
      price: 16.00,
      image: 'https://images.unsplash.com/photo-1642613634914-385fcb64725e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGd1YXRlbWFsYXxlbnwxfHx8fDE3NjQwMzI4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'Guatemala',
      description: 'Spicy with cocoa tones and subtle smokiness. Medium-dark roast.',
    },
    {
      id: 'b8',
      name: 'Brew Collective Blend',
      price: 14.50,
      image: 'https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYzOTg2NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      origin: 'House Blend',
      description: 'Our signature blend of Ethiopian and Colombian beans. Medium roast.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-[var(--color-brown-dark)] tracking-[-0.02em]">Premium Coffee Beans</h1>
          <p className="text-base sm:text-lg text-[var(--color-gray)] max-w-2xl mx-auto leading-relaxed mb-6">
            Ethically sourced, expertly roasted. Bring the café experience home with our 
            selection of single-origin beans and signature blends.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {coffeeBeans.map((bean) => (
              <ProductCard
                key={bean.id}
                id={bean.id}
                name={bean.name}
                price={bean.price}
                image={bean.image}
                description={bean.description}
                origin={bean.origin}
                type="beans"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Guide CTA */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">New to Home Brewing?</h2>
          <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 max-w-2xl mx-auto leading-relaxed">
            Check out our brewing guides and tips to get the most out of your beans
          </p>
          <Button size="large">View Brewing Guides</Button>
        </div>
      </section>
    </div>
  );
}