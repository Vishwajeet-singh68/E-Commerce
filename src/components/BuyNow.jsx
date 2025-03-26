import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const BuyNow = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="mb-6 bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer ${
                    paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Credit/Debit Card</p>
                      <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                  
                  {paymentMethod === 'card' && (
                    <form className="mt-4 space-y-4">
                      <div>
                        <input 
                          type="text"
                          placeholder="Card Number"
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text"
                          placeholder="MM/YY"
                          className="p-2 border rounded"
                        />
                        <input 
                          type="text"
                          placeholder="CVC"
                          className="p-2 border rounded"
                        />
                      </div>
                    </form>
                  )}
                </div>

                <div 
                  className={`p-4 border rounded-lg cursor-pointer ${
                    paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-600">P</span>
                    <div>
                      <p className="font-semibold">PayPal</p>
                      <p className="text-sm text-gray-600">Pay securely with PayPal</p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 border rounded-lg cursor-pointer ${
                    paymentMethod === 'apple' ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setPaymentMethod('apple')}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍎</span>
                    <div>
                      <p className="font-semibold">Apple Pay</p>
                      <p className="text-sm text-gray-600">Quick checkout with Apple Pay</p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 border rounded-lg cursor-pointer ${
                    paymentMethod === 'google' ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setPaymentMethod('google')}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-500">G</span>
                    <div>
                      <p className="font-semibold">Google Pay</p>
                      <p className="text-sm text-gray-600">Fast checkout with Google Pay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showSuccess && (
            <div className="mb-4 bg-green-50 p-4 rounded-lg">
              Payment successful! Order confirmation sent to your email.
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$199.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$16.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$215.99</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;