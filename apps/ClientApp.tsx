
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import CustomOrder from '../pages/CustomOrder';
import About from '../pages/About';
import Contact from '../pages/Contact';
import News from '../pages/News';
import { Page, Product, NewsEntry, QuoteRequest, Review } from '../types';
import { X, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

interface ClientAppProps {
  products: Product[];
  news: NewsEntry[];
  reviews: Review[];
  onAddQuote: (quote: Omit<QuoteRequest, 'id' | 'date' | 'status'>) => void;
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ClientApp: React.FC<ClientAppProps> = ({ products, news, reviews, onAddQuote, onAddReview }) => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [cart, setCart] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAddToCart = (product: Product) => {
    if (!cart.includes(product.id)) {
      setCart([...cart, product.id]);
      setIsCartOpen(true); // Open drawer automatically when adding
    } else {
      setCart(cart.filter(id => id !== product.id));
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item !== id));
  };

  const cartProducts = products.filter(p => cart.includes(p.id));
  const totalAmount = cartProducts.reduce((sum, p) => sum + p.price, 0);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onPageChange={setCurrentPage} />;
      case Page.Products: return (
        <Products 
          onAddToCart={handleAddToCart} 
          cart={cart} 
          products={products} 
          reviews={reviews} 
          onAddReview={onAddReview} 
        />
      );
      case Page.CustomOrder: return <CustomOrder onSubmitQuote={onAddQuote} />;
      case Page.About: return <About />;
      case Page.Contact: return <Contact />;
      case Page.News: return <News news={news} />;
      default: return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cart.length} 
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />

      {/* Quote Basket (Cart) Drawer */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-2xl font-heading font-black uppercase tracking-tight flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-malawi-orange" /> Quote Basket
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartProducts.length > 0 ? (
                cartProducts.map(product => (
                  <div key={product.id} className="flex gap-4 bg-neutral-light p-4 rounded-2xl border border-gray-100">
                    <img src={product.imageUrl} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div className="flex-grow">
                      <h4 className="font-bold text-steel-900 leading-tight">{product.name}</h4>
                      <p className="text-malawi-orange font-black mt-1">MK {product.price.toLocaleString()}</p>
                      <button 
                        onClick={() => removeFromCart(product.id)}
                        className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 flex items-center gap-1 hover:text-malawi-red transition-colors"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <ShoppingCart className="w-16 h-16 text-gray-100 mb-4" />
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Your basket is empty</p>
                  <button 
                    onClick={() => { setIsCartOpen(false); setCurrentPage(Page.Products); }}
                    className="mt-6 text-malawi-orange font-black text-xs uppercase tracking-widest border-b-2 border-malawi-orange pb-1"
                  >
                    Browse Catalog
                  </button>
                </div>
              )}
            </div>

            {cartProducts.length > 0 && (
              <div className="p-8 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Est. Total</span>
                  <span className="text-2xl font-black text-steel-900">MK {totalAmount.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => { setIsCartOpen(false); setCurrentPage(Page.CustomOrder); }}
                  className="w-full bg-malawi-red hover:bg-red-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  Finalize Quote Request <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-4 italic">
                  * Final pricing may vary based on delivery location and customization requirements.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ClientApp;
