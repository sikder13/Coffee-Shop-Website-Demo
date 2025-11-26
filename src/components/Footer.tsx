import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Clock, MapPin, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
];

const quickLinks = [
  { to: '/menu', label: 'Menu' },
  { to: '/shop', label: 'Shop Beans' },
  { to: '/story', label: 'Our Story' },
  { to: '/reviews', label: 'Reviews' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--color-cream)] to-[#e7dbc8] text-[var(--color-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                <span className="text-white text-xl">☕</span>
              </div>
              <div>
                <p className="text-[var(--color-brown-dark)] text-lg tracking-[0.15em] uppercase font-semibold">
                  Brew Collective
                </p>
                <p className="text-sm text-[var(--color-gray)]">Crafting moments since 2019</p>
              </div>
            </Link>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Specialty coffee, curated beans, and a community-first space where every cup tells a story.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)] flex items-center justify-center transition-transform duration-300 hover:scale-110 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg text-[var(--color-brown-dark)] font-semibold mb-4 tracking-[0.1em] uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-base sm:text-lg block py-2 transition-colors duration-300 hover:text-[var(--color-burnt-orange)] min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg text-[var(--color-brown-dark)] font-semibold mb-4 tracking-[0.1em] uppercase">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-burnt-orange)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-semibold text-[var(--color-brown-dark)]">Hours</p>
                  <p className="text-base sm:text-sm">Mon - Fri: 7am - 7pm</p>
                  <p className="text-base sm:text-sm">Sat - Sun: 8am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-burnt-orange)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-semibold text-[var(--color-brown-dark)]">Address</p>
                  <p className="text-base sm:text-sm">123 Brew Lane, Roast City, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-burnt-orange)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-semibold text-[var(--color-brown-dark)]">Phone</p>
                  <p className="text-base sm:text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-burnt-orange)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-semibold text-[var(--color-brown-dark)]">Email</p>
                  <p className="text-base sm:text-sm">hello@brewcollective.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/50 mt-8 sm:mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm sm:text-base text-[var(--color-gray)]">
            <p>© {new Date().getFullYear()} Brew Collective. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/privacy" className="hover:text-[var(--color-burnt-orange)] transition-colors duration-300 py-2 min-h-[44px] flex items-center">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[var(--color-burnt-orange)] transition-colors duration-300 py-2 min-h-[44px] flex items-center">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

