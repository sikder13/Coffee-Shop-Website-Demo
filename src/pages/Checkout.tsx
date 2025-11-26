import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, MapPin, User } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Contact Info
    email: '',
    phone: '',
    // Step 2: Delivery
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    // Step 3: Payment
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl text-[var(--color-brown-dark)]">Your cart is empty</h2>
          <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 leading-relaxed">Add some items to checkout</p>
          <Button size="large" onClick={() => navigate('/menu')}>
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="mb-4 text-2xl sm:text-3xl text-[var(--color-brown-dark)]">Order Confirmed!</h2>
          <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 leading-relaxed">
            Thank you for your order. We'll have it ready soon!
          </p>
          <p className="text-sm sm:text-base text-[var(--color-gray)] leading-relaxed">
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Contact', icon: User },
    { number: 2, title: 'Delivery', icon: MapPin },
    { number: 3, title: 'Payment', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream)] py-12 sm:py-16 lg:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep >= step.number;
              const isComplete = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isComplete
                          ? 'bg-green-500'
                          : isActive
                          ? 'bg-[var(--color-burnt-orange)]'
                          : 'bg-[var(--color-gray-light)]'
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[var(--color-gray)]'}`} />
                      )}
                    </div>
                    <span className={`text-sm mt-2 ${isActive ? 'text-[var(--color-brown-dark)]' : 'text-[var(--color-gray)]'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-1 mx-2 ${
                        currentStep > step.number ? 'bg-green-500' : 'bg-[var(--color-gray-light)]'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <div>
                  <h3 className="mb-4 sm:mb-3 text-xl sm:text-2xl text-[var(--color-brown-dark)]">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Info */}
              {currentStep === 2 && (
                <div>
                  <h3 className="mb-4 sm:mb-3 text-xl sm:text-2xl text-[var(--color-brown-dark)]">Delivery Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main St"
                        className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="New York"
                          className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                        />
                      </div>
                      <div>
                        <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="10001"
                          className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h3 className="mb-4 sm:mb-3 text-xl sm:text-2xl text-[var(--color-brown-dark)]">Payment Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                        />
                      </div>
                      <div>
                        <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-base sm:text-sm mb-2 text-[var(--color-brown-dark)]">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-4 sm:py-3 text-base border border-[var(--color-gray-light)] rounded-lg focus:outline-none focus:border-[var(--color-burnt-orange)] min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                {currentStep > 1 && (
                  <Button
                    variant="secondary"
                    className="flex-1 text-[var(--color-brown-dark)]"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </Button>
                )}
                {currentStep < 3 ? (
                  <Button className="flex-1" onClick={handleNextStep}>
                    Continue
                  </Button>
                ) : (
                  <Button className="flex-1" onClick={handleSubmit}>
                    Place Order
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h4 className="mb-3 text-[var(--color-brown-dark)]">Order Summary</h4>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[var(--color-gray)]">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-[var(--color-brown-dark)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--color-gray-light)] pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-gray)]">Subtotal</span>
                  <span className="text-[var(--color-brown-dark)]">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-gray)]">Delivery</span>
                  <span className="text-[var(--color-brown-dark)]">$3.50</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[var(--color-gray-light)]">
                  <span className="text-[var(--color-brown-dark)]">Total</span>
                  <span className="text-[var(--color-burnt-orange)]">
                    ${(totalPrice + 3.5).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}