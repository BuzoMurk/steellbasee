
import React, { useState } from 'react';
import { Menu, X, Hammer, Phone, ShoppingBasket } from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onOpenCart: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, onOpenCart, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'Products', value: Page.Products },
    { label: 'News', value: Page.News },
    { label: 'Custom Orders', value: Page.CustomOrder },
    { label: 'About', value: Page.About },
    { label: 'Contact', value: Page.Contact },
  ];

  return (
    <nav className="bg-steel-800 text-white sticky top-0 z-50 shadow-xl border-b border-malawi-orange/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onPageChange(Page.Home)}>
            <div className="bg-malawi-orange p-2 rounded-lg">
              <Hammer className="w-6 h-6 md:w-7 md:h-7 text-steel-900" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-heading font-bold tracking-tighter leading-none">STEELBASE</h1>
              <p className="hidden sm:block text-[9px] tracking-[0.2em] text-malawi-sunset uppercase mt-0.5">Premium Malawian Craft</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  currentPage === item.value 
                  ? 'text-malawi-orange border-b-2 border-malawi-orange rounded-none' 
                  : 'hover:text-malawi-sunset'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <button 
                onClick={onOpenCart}
                className="relative bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all group"
              >
                <ShoppingBasket className="w-5 h-5 text-malawi-sunset group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-malawi-red text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-steel-800">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <a 
                href={`tel:${CONTACT_INFO.phoneInternational}`} 
                className="bg-malawi-red hover:bg-red-700 px-5 py-2.5 rounded-full flex items-center gap-2 font-bold text-sm shadow-lg transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4" /> {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={onOpenCart}
              className="relative bg-white/5 p-2 rounded-full"
            >
              <ShoppingBasket className="w-5 h-5 text-malawi-sunset" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-malawi-red text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-steel-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-steel-900 border-t border-white/5 pb-6">
          <div className="px-4 pt-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => { onPageChange(item.value); setIsOpen(false); }}
                className={`block w-full text-left px-5 py-4 rounded-2xl text-base font-bold uppercase tracking-widest ${currentPage === item.value ? 'bg-steel-800 text-malawi-orange' : 'text-gray-300'}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phoneInternational}`} 
              className="mt-4 flex items-center justify-center gap-2 bg-malawi-red w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest"
            >
              <Phone className="w-4 h-4" /> {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
