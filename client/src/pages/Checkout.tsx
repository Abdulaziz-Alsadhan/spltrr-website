import React, { useState } from 'react';
import { SARSymbol } from '@/components/SARSymbol';
import CountdownTimer from '@/components/CountdownTimer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Pizza, Utensils, Beef, CheckCircle } from 'lucide-react';
import { ApplePayButton } from '@/components/ApplePayButton';

export default function Checkout() {
  const [splitType, setSplitType] = useState<'equal' | 'per-product' | 'custom'>('per-product');
  const [paymentMethod, setPaymentMethod] = useState<'split' | 'full'>('split');
  
  const items = [
    { name: 'Classic Burger', price: 45.00, color: 'bg-amber-600' },
    { name: 'Double Cheese Burger', price: 55.00, color: 'bg-amber-700' },
    { name: 'Fries (Large)', price: 20.00, color: 'bg-yellow-500' },
    { name: 'Shawarma', price: 35.00, color: 'bg-green-600' },
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <p className="text-sm text-gray-400">Step 3 of 3</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 mb-4">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-red-500/20 px-2 py-1 rounded-full">
                <span className="text-xs text-red-400">
                  <CountdownTimer 
                    minutes={10} 
                    seconds={0} 
                    onTimeUp={() => alert('Time is up! Automatic refund will be processed.')} 
                    className="text-red-400"
                  />
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              Automatic refund if not completed in time
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`${item.color} w-4 h-4 rounded mr-3`}></div>
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center">
                  <SARSymbol className="mr-1" />
                  {item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-4 flex justify-between items-center font-bold">
            <div>Total</div>
            <div className="flex items-center">
              <SARSymbol className="mr-1" />
              {total.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Payment method</p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button 
              variant={paymentMethod === 'split' ? 'default' : 'outline'} 
              className={`rounded-lg ${paymentMethod === 'split' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 text-white'}`}
              onClick={() => setPaymentMethod('split')}
            >
              <span>Split Payment</span>
            </Button>
            <Button 
              variant={paymentMethod === 'full' ? 'default' : 'outline'} 
              className={`rounded-lg ${paymentMethod === 'full' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 text-white'}`}
              onClick={() => setPaymentMethod('full')}
            >
              <span>Pay in Full</span>
            </Button>
          </div>
          
          {paymentMethod === 'split' && (
            <div className="bg-gray-800 rounded-lg mb-4">
              <div className="grid grid-cols-3 gap-0 text-center text-sm">
                <Button 
                  variant="ghost" 
                  className={`rounded-none py-2 ${splitType === 'equal' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
                  onClick={() => setSplitType('equal')}
                >
                  <span>Equally</span>
                </Button>
                <Button 
                  variant="ghost" 
                  className={`rounded-none py-2 ${splitType === 'per-product' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
                  onClick={() => setSplitType('per-product')}
                >
                  <span>Per Product</span>
                </Button>
                <Button 
                  variant="ghost" 
                  className={`rounded-none py-2 ${splitType === 'custom' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
                  onClick={() => setSplitType('custom')}
                >
                  <span>Customized</span>
                </Button>
              </div>
            </div>
          )}
          
          {paymentMethod === 'split' && splitType === 'per-product' && (
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <p className="text-sm mb-3">Pay for any item:</p>
              <div className="space-y-3">
                <div className="border border-gray-700 rounded-lg p-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-amber-600 flex items-center justify-center rounded">
                      
                    </div>
                    <span className="text-sm">Classic Burger (<SARSymbol className="mx-0.5" />45.00)</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-400 text-xs">
                    <CheckCircle className="h-3 w-3" />
                    <span>Paid by Abdulaziz</span>
                  </div>
                </div>
                
                <div className="border border-gray-700 rounded-lg p-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-amber-700 flex items-center justify-center rounded">
                      
                    </div>
                    <span className="text-sm">Double Cheese (<SARSymbol className="mx-0.5" />55.00)</span>
                  </div>
                  <ApplePayButton />
                </div>
                
                <div className="border border-gray-700 rounded-lg p-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-yellow-500 flex items-center justify-center rounded">
                      
                    </div>
                    <span className="text-sm">Fries (Large) (<SARSymbol className="mx-0.5" />20.00)</span>
                  </div>
                  <ApplePayButton />
                </div>
                
                <div className="border border-gray-700 rounded-lg p-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-green-600 flex items-center justify-center rounded">
                      
                    </div>
                    <span className="text-sm">Shawarma (<SARSymbol className="mx-0.5" />35.00)</span>
                  </div>
                  <ApplePayButton />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}