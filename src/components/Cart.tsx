import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ProgressiveImage } from './ProgressiveImage';
import { Button } from './ui/Button';

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-gray-light)]">
          <h3 className="text-[var(--color-brown-dark)]">Your Cart</h3>
          <Button
            variant="ghost"
            className="!px-3 !py-3"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[var(--color-gray)] mb-4" />
              <p className="text-[var(--color-gray)] mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--color-gray)]">Add some items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-[var(--color-gray-light)]">
                  <ProgressiveImage
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    wrapperClassName="w-20 h-20 rounded-2xl shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm mb-1">{item.name}</h4>
                    {item.origin && (
                      <p className="text-xs text-[var(--color-gray)] mb-2">{item.origin}</p>
                    )}
                    <p className="text-[var(--color-burnt-orange)]">${item.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <Button
                        variant="secondary"
                        className="h-9 w-9 !px-0 !py-0"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="secondary"
                        className="h-9 w-9 !px-0 !py-0"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        className="ml-auto text-xs text-[var(--color-gray)] hover:text-[var(--color-burnt-orange)]"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[var(--color-gray-light)] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-gray)]">Subtotal</span>
              <span className="text-[var(--color-brown-dark)]">${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
