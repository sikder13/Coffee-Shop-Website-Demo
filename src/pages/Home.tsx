import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProgressiveImage } from '../components/ProgressiveImage';

export function Home() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Coffee Enthusiast',
      content: 'Best coffee spot in the city! The vibe is immaculate and the beans are always fresh.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Marcus Williams',
      role: 'Regular Customer',
      content: 'Love the community here. Great place to work remotely and the cold brew is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Food Blogger',
      content: 'Instagram-worthy drinks and the friendliest baristas. My go-to spot every morning!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ProgressiveImage
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzOTQ4NzkxfDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
            alt="Warm and inviting Brew Collective coffee shop interior"
            width={1920}
            height={1080}
            priority
            wrapperClassName="w-full h-full"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brown-dark)]/80 to-[var(--color-brown-dark)]/40" />
        </div>
        <div className="relative z-10 flex justify-center w-full">
          <div className="text-center px-4 max-w-4xl mx-auto text-white">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-0.02em]">Where Community Meets Coffee</h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 text-white/90 leading-relaxed px-2">
              Ethically sourced beans, expertly crafted drinks, and a space that feels like home
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/menu" className="inline-flex justify-center">
                <Button size="large">Explore Menu</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Special */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[var(--color-cream)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-[var(--color-sage)]/20 text-[var(--color-sage)] px-4 py-2 rounded-full text-sm mb-4">
                Today's Special
              </span>
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">Maple Cinnamon Latte</h2>
              <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 leading-relaxed">
                Warm up with our seasonal favorite - espresso blended with steamed oat milk, 
                real maple syrup, and a dash of cinnamon. Topped with our signature foam art.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-[var(--color-burnt-orange)]">$5.50</span>
                <span className="text-sm text-[var(--color-gray)] line-through">$6.50</span>
              </div>
              <Link to="/menu" className="inline-flex">
                <Button>Order Now</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <ProgressiveImage
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjM5MDg2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Maple Cinnamon Latte topped with foam art"
                width={1080}
                height={1200}
                wrapperClassName="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl shadow-2xl"
                className="hover:scale-105 hover:brightness-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[var(--color-cream)]/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-[var(--color-brown-dark)] tracking-[-0.01em]">What Our Community Says</h2>
            <p className="text-base sm:text-lg text-[var(--color-gray)] leading-relaxed mb-6">Real reviews from real coffee lovers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 ease-in-out transform-gpu hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[var(--color-burnt-orange)]/30"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)]" />
                  ))}
                </div>
                <p className="text-[var(--color-gray)] mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <ProgressiveImage
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    width={96}
                    height={96}
                    wrapperClassName="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-[var(--color-brown-dark)]">{testimonial.name}</p>
                    <p className="text-xs text-[var(--color-gray)]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}