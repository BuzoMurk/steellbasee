
import React, { useState, useMemo } from 'react';
import { 
  ShoppingCart, Hammer, Ruler, Package, 
  ShieldCheck, Award, X, Info, 
  Heart, Filter, Search, Star, MessageSquare,
  User, Send
} from 'lucide-react';
import { Product, Review } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  cart: string[];
  products: Product[];
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart, cart, products, reviews, onAddReview }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Review form state
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const categories = ['All', 'Beds', 'Tables', 'Chairs', 'Storage', 'Shelving'];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory;
      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [activeCategory, searchQuery, products]);

  const productReviews = useMemo(() => {
    if (!selectedProduct) return [];
    return reviews.filter(r => r.productId === selectedProduct.id);
  }, [selectedProduct, reviews]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct || !reviewName || !reviewComment) return;

    onAddReview({
      productId: selectedProduct.id,
      customerName: reviewName,
      rating: reviewRating,
      comment: reviewComment
    });

    setReviewName('');
    setReviewComment('');
    setReviewRating(5);
  };

  return (
    <div className="min-h-screen py-12 bg-neutral-light industrial-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-heading font-bold text-steel-900 mb-2 uppercase tracking-tight">Technical Catalog</h1>
            <p className="text-gray-500">Precision industrial furniture engineered for Malawi.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border outline-none focus:ring-2 focus:ring-malawi-orange transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${
                activeCategory === cat ? 'bg-malawi-orange text-white' : 'bg-white text-gray-500 border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm group hover:shadow-xl transition-all border border-gray-100 flex flex-col">
              <div className="relative h-64 overflow-hidden" onClick={() => setSelectedProduct(product)}>
                <img src={product.imageUrl} className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-steel-800">
                  {product.primaryMaterial}
                </div>
              </div>
              <div className="p-7 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-malawi-orange transition-colors">{product.name}</h3>
                <p className="text-2xl font-black text-malawi-orange mb-6">MK {product.price.toLocaleString()}</p>
                <div className="mt-auto flex gap-3">
                  <button onClick={() => setSelectedProduct(product)} className="flex-grow bg-gray-100 py-3 rounded-xl font-bold text-xs hover:bg-gray-200 transition-colors uppercase tracking-widest">Specs</button>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className={`flex-grow py-3 rounded-xl font-bold text-xs transition-all uppercase tracking-widest ${cart.includes(product.id) ? 'bg-green-100 text-green-700' : 'bg-steel-900 text-white hover:bg-black'}`}
                  >
                    {cart.includes(product.id) ? 'In Basket' : '+ Add to Quote'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-steel-900/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"><X className="w-6 h-6" /></button>
              
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedProduct.imageUrl} className="w-full h-full object-cover" alt={selectedProduct.name} />
              </div>

              <div className="md:w-1/2 p-10 overflow-y-auto custom-scrollbar">
                <h2 className="text-4xl font-heading font-black mb-2 uppercase tracking-tight">{selectedProduct.name}</h2>
                <p className="text-2xl font-black text-malawi-orange mb-6">MK {selectedProduct.price.toLocaleString()}</p>
                
                <div className="space-y-6 mb-10 border-b pb-10">
                  <p className="text-gray-600 leading-relaxed italic">"{selectedProduct.description}"</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-light p-4 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Dimensions</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-steel-800"><Ruler className="w-4 h-4 text-malawi-orange" /> {selectedProduct.dimensions}</div>
                    </div>
                    <div className="bg-neutral-light p-4 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Materials</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-steel-800"><Package className="w-4 h-4 text-malawi-orange" /> {selectedProduct.materials}</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-malawi-orange" />
                    <span className="font-black text-sm text-steel-900 uppercase tracking-tight">{selectedProduct.warranty} Quality Guarantee</span>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-heading font-black uppercase tracking-tight flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-malawi-red" /> Verified Reviews
                  </h3>

                  {/* Review Form */}
                  <form onSubmit={handleReviewSubmit} className="bg-neutral-light p-6 rounded-[2rem] border border-gray-100 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Rate this Item</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setReviewRating(star)}
                            className="transition-transform active:scale-125"
                          >
                            <Star 
                              className={`w-6 h-6 ${
                                star <= (hoverRating || reviewRating) 
                                ? 'text-malawi-sunset fill-malawi-sunset' 
                                : 'text-gray-300'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <input 
                      required
                      type="text"
                      placeholder="Your Name (e.g. Kondwani B.)"
                      className="w-full bg-white border-transparent focus:border-malawi-orange p-4 rounded-xl text-sm font-bold outline-none transition-all shadow-sm"
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                    />
                    
                    <textarea 
                      required
                      placeholder="How's the steel quality? Any delivery feedback?"
                      className="w-full bg-white border-transparent focus:border-malawi-orange p-4 rounded-xl text-sm h-24 outline-none transition-all shadow-sm resize-none"
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                    />

                    <button 
                      type="submit"
                      className="w-full bg-steel-900 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg active:scale-95"
                    >
                      Publish Review <Send className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Review List */}
                  <div className="space-y-4">
                    {productReviews.length > 0 ? (
                      productReviews.map(review => (
                        <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm animate-in slide-in-from-bottom-2">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-400" />
                              </div>
                              <div>
                                <p className="font-black text-xs text-steel-900 leading-none">{review.customerName}</p>
                                <p className="text-[9px] text-gray-400 mt-1 uppercase font-bold tracking-widest">{review.date}</p>
                              </div>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-malawi-sunset fill-malawi-sunset' : 'text-gray-200'}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed italic">"{review.comment}"</p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-10 px-4 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                        <MessageSquare className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">No reviews yet for this model.</p>
                        <p className="text-[10px] text-gray-300 mt-1 uppercase tracking-widest">Be the first to share your feedback from Malawi.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t">
                  <button 
                    onClick={() => { onAddToCart(selectedProduct); setSelectedProduct(null); }}
                    className="w-full bg-malawi-red hover:bg-red-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    Add to Quote Basket <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default Products;
