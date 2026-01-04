
import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Edit, X, Package, 
  Newspaper, LayoutDashboard, BarChart3, 
  LogOut, Settings, ExternalLink, MessageSquare,
  CheckCircle2, Clock, UserCheck, Eye, 
  Download, Filter, TrendingUp, Calendar
} from 'lucide-react';
import { Product, NewsEntry, QuoteRequest } from '../types';

interface AdminProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  news: NewsEntry[];
  setNews: React.Dispatch<React.SetStateAction<NewsEntry[]>>;
  quoteRequests: QuoteRequest[];
  setQuoteRequests: React.Dispatch<React.SetStateAction<QuoteRequest[]>>;
  initialTab?: 'dashboard' | 'products' | 'news' | 'quotes';
  onLogout: () => void;
}

const Admin: React.FC<AdminProps> = ({ 
  products, setProducts, news, setNews, 
  quoteRequests, setQuoteRequests, initialTab = 'dashboard',
  onLogout 
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'news' | 'quotes'>(initialTab);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [editingNews, setEditingNews] = useState<Partial<NewsEntry> | null>(null);
  const [viewingQuote, setViewingQuote] = useState<QuoteRequest | null>(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const deleteProduct = (id: string) => {
    if (window.confirm('Remove product from catalog permanently?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const renderDashboard = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4 text-steel-900">
            <div className="p-2 md:p-3 bg-orange-50 rounded-xl md:rounded-2xl text-malawi-orange"><TrendingUp className="w-5 h-5 md:w-6 md:h-6" /></div>
            <span className="hidden sm:inline text-[10px] font-black text-gray-400 uppercase tracking-widest">Growth</span>
          </div>
          <p className="text-xl md:text-3xl font-black text-steel-900 tracking-tighter">+{products.length + quoteRequests.length}%</p>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4 text-steel-900">
            <div className="p-2 md:p-3 bg-blue-50 rounded-xl md:rounded-2xl text-blue-500"><MessageSquare className="w-5 h-5 md:w-6 md:h-6" /></div>
            <span className="hidden sm:inline text-[10px] font-black text-gray-400 uppercase tracking-widest">Leads</span>
          </div>
          <p className="text-xl md:text-3xl font-black text-steel-900 tracking-tighter">{quoteRequests.length}</p>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4 text-steel-900">
            <div className="p-2 md:p-3 bg-red-50 rounded-xl md:rounded-2xl text-malawi-red"><Package className="w-5 h-5 md:w-6 md:h-6" /></div>
            <span className="hidden sm:inline text-[10px] font-black text-gray-400 uppercase tracking-widest">Items</span>
          </div>
          <p className="text-xl md:text-3xl font-black text-steel-900 tracking-tighter">{products.length}</p>
        </div>
        <div className="bg-steel-900 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl text-white">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
            <div className="p-2 md:p-3 bg-white/10 rounded-xl md:rounded-2xl text-malawi-orange"><Settings className="w-5 h-5 md:w-6 md:h-6" /></div>
            <span className="hidden sm:inline text-[10px] font-black text-gray-300/50 uppercase tracking-widest">System</span>
          </div>
          <p className="text-lg md:text-2xl font-black tracking-tighter uppercase">Online</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100">
          <h3 className="text-xl font-black text-steel-900 uppercase tracking-tight mb-6 flex items-center justify-between">
            Recent Inquiries
            <button onClick={() => setActiveTab('quotes')} className="text-[10px] text-malawi-orange uppercase tracking-widest hover:underline">View All</button>
          </h3>
          <div className="space-y-4">
            {quoteRequests.slice(0, 4).map(q => (
              <div key={q.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-all text-steel-900">
                <div className="truncate pr-4">
                  <p className="font-black text-steel-900 leading-none text-sm">{q.customerName}</p>
                  <p className="text-[9px] text-gray-400 uppercase font-bold mt-1 truncate">{q.furnitureType}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shrink-0 ${q.status === 'New' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-500'}`}>
                  {q.status}
                </span>
              </div>
            ))}
            {quoteRequests.length === 0 && <p className="text-center py-6 text-xs text-gray-400 font-bold uppercase tracking-widest">No recent leads</p>}
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100">
          <h3 className="text-xl font-black text-steel-900 uppercase tracking-tight mb-6">Workshop News</h3>
          <div className="space-y-6">
            {news.slice(0, 2).map(n => (
              <div key={n.id} className="flex gap-4">
                <img src={n.imageUrl} className="w-16 h-16 rounded-xl object-cover grayscale shrink-0" />
                <div className="text-steel-900 overflow-hidden">
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{n.date}</p>
                  <h4 className="font-bold text-steel-800 line-clamp-1 text-sm">{n.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-light pb-20">
      {/* Header */}
      <div className="bg-steel-800 text-white py-8 md:py-10 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 industrial-texture opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="bg-malawi-orange p-3 md:p-4 rounded-xl md:rounded-[1.5rem] shadow-lg">
              <LayoutDashboard className="w-6 h-6 md:w-8 md:h-8 text-steel-900" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-heading font-black uppercase tracking-tighter leading-none">SteelBase OS</h1>
              <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-1">Management Portal</p>
            </div>
          </div>
          <button onClick={onLogout} className="px-5 py-2.5 rounded-xl bg-malawi-red/20 text-malawi-red border border-malawi-red/30 font-black text-[10px] uppercase tracking-widest hover:bg-malawi-red hover:text-white transition-all">
            <LogOut className="w-3.5 h-3.5 inline-block mr-2" /> Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        {activeTab === 'dashboard' && renderDashboard()}

        {activeTab === 'quotes' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-heading font-bold text-steel-900 uppercase tracking-tight">Lead Management</h2>
            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-b">
                    <tr>
                      <th className="px-4 md:px-10 py-5">Customer</th>
                      <th className="px-4 md:px-10 py-5 hidden md:table-cell">Product</th>
                      <th className="px-4 md:px-10 py-5">Status</th>
                      <th className="px-4 md:px-10 py-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {quoteRequests.map(q => (
                      <tr key={q.id} className="hover:bg-neutral-light transition-colors group">
                        <td className="px-4 md:px-10 py-5">
                          <div className="font-black text-steel-900 text-sm">{q.customerName}</div>
                          <div className="text-[10px] text-gray-400">{q.phone}</div>
                        </td>
                        <td className="px-4 md:px-10 py-5 hidden md:table-cell">
                          <div className="text-sm font-bold text-steel-800 truncate max-w-[150px]">{q.furnitureType}</div>
                        </td>
                        <td className="px-4 md:px-10 py-5">
                          <span className={`px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${
                            q.status === 'New' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-500'
                          }`}>
                            {q.status}
                          </span>
                        </td>
                        <td className="px-4 md:px-10 py-5 text-right">
                          <button onClick={() => setQuoteRequests(prev => prev.filter(x => x.id !== q.id))} className="p-2 text-gray-300 hover:text-malawi-red transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-heading font-bold text-steel-900 uppercase tracking-tight">Inventory Control</h2>
              <button className="bg-malawi-red text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest">+ Item</button>
            </div>
            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[400px]">
                  <thead className="bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-b">
                    <tr>
                      <th className="px-4 md:px-10 py-5">Product</th>
                      <th className="px-4 md:px-10 py-5">Price</th>
                      <th className="px-4 md:px-10 py-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {products.map(p => (
                      <tr key={p.id} className="hover:bg-neutral-light transition-colors">
                        <td className="px-4 md:px-10 py-5 flex items-center gap-3">
                          <img src={p.imageUrl} className="w-10 h-10 rounded-lg object-cover grayscale" />
                          <span className="font-black text-steel-900 text-sm truncate max-w-[200px]">{p.name}</span>
                        </td>
                        <td className="px-4 md:px-10 py-5 font-black text-sm text-malawi-orange">MK {p.price.toLocaleString()}</td>
                        <td className="px-4 md:px-10 py-5 text-right">
                          <button onClick={() => deleteProduct(p.id)} className="p-2 text-gray-300 hover:text-malawi-red"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
