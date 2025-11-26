import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';

export function Navigation() {
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/shop', label: 'Shop Beans' },
    { path: '/story', label: 'Our Story' },
    { path: '/reviews', label: 'Reviews' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setCartBounce(true);
      const timeout = setTimeout(() => setCartBounce(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navClasses = `sticky top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/95 border-b border-[var(--color-gray-light)] shadow-lg backdrop-blur-lg'
      : 'bg-transparent border-b border-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white text-lg sm:text-xl">☕</span>
            </div>
            <span className="text-[var(--color-brown-dark)] text-sm sm:text-lg font-semibold group-hover:text-[var(--color-burnt-orange)] transition-colors duration-300">
              Brew Collective
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-[var(--color-burnt-orange)]'
                    : 'text-[var(--color-brown-dark)] hover:text-[var(--color-burnt-orange)]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transform transition-transform duration-300 ${
                    isActive(link.path)
                      ? 'scale-x-100 bg-[var(--color-burnt-orange)]'
                      : 'scale-x-0 bg-[var(--color-burnt-orange)] group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className={`relative !px-3 !py-3 transition-transform duration-300 hover:text-[var(--color-burnt-orange)] ${
                cartBounce ? 'animate-cart-bounce' : ''
              }`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-6 h-6 text-[var(--color-brown-dark)] transition-colors duration-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--color-burnt-orange)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden !px-3 !py-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="relative flex flex-col w-6 h-4 justify-between">
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`h-0.5 bg-[var(--color-brown-dark)] rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? index === 0
                          ? 'translate-y-1.5 rotate-45'
                          : index === 1
                          ? 'opacity-0'
                          : '-translate-y-1.5 -rotate-45'
                        : ''
                    }`}
                  />
                ))}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-12 px-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavLinkClick}
              className={`text-lg font-semibold py-3 px-2 rounded-2xl transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-[var(--color-burnt-orange)] text-white'
                  : 'text-[var(--color-brown-dark)] hover:bg-[var(--color-gray-light)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
