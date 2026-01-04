
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Package, Newspaper, 
  Settings, LogOut, ExternalLink,
  Menu, X, MessageSquare
} from 'lucide-react';
import { Product, NewsEntry, QuoteRequest } from '../types';
import Login from '../pages/Login';
import AdminDashboard from '../pages/Admin';

interface AdminAppProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  news: NewsEntry[];
  setNews: React.Dispatch<React.SetStateAction<NewsEntry[]>>;
  quoteRequests: QuoteRequest[];
  setQuoteRequests: React.Dispatch<React.SetStateAction<QuoteRequest[]>>;
  onExitAdmin: () => void;
}

const AdminApp: React.FC<AdminAppProps> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'news' | 'quotes'>('dashboard');

  useEffect(() => {
    const auth = sessionStorage.getItem('sb_factory_auth');
    if (auth === 'true') setIsAuthenticated(true);
    
    // Set sidebar open by default on desktop
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    }
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      sessionStorage.setItem('sb_factory_auth', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sb_factory_auth');
    props.onExitAdmin();
  };

  const handleNavClick = (tab: 'dashboard' | 'products' | 'news' | 'quotes') => {
    setActiveTab(tab);
    // Auto-close on mobile
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-neutral-900 text-white font-sans overflow-hidden">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Responsive Drawer */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 bg-black border-r border-white/10 transition-all duration-300 
        md:relative md:translate-x-0 flex flex-col shrink-0
        ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 w-20'}
      `}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="bg-malawi-orange w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg">
               <Settings className="w-5 h-5 text-black" />
            </div>
            {(isSidebarOpen || window.innerWidth >= 768) && (
              <span className={`font-black tracking-tighter text-xl transition-opacity duration-300 ${!isSidebarOpen && 'md:opacity-0'}`}>
                FACTORY OS
              </span>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="md:hidden p-1 hover:bg-white/10 rounded-lg text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-grow p-4 space-y-2 overflow-y-auto custom-scrollbar">
          <button 
            onClick={() => handleNavClick('dashboard')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${activeTab === 'dashboard' ? 'bg-white/10 text-malawi-orange shadow-inner' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <LayoutDashboard className="w-5 h-5 shrink-0" />
            {(isSidebarOpen || window.innerWidth < 768) && <span>Dashboard</span>}
          </button>
          
          <button 
            onClick={() => handleNavClick('quotes')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${activeTab === 'quotes' ? 'bg-white/10 text-malawi-orange shadow-inner' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            {(isSidebarOpen || window.innerWidth < 768) && <span>Inquiries</span>}
            {(isSidebarOpen || window.innerWidth < 768) && props.quoteRequests.filter(q => q.status === 'New').length > 0 && (
              <span className="ml-auto bg-malawi-red text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {props.quoteRequests.filter(q => q.status === 'New').length}
              </span>
            )}
          </button>

          <button 
            onClick={() => handleNavClick('products')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${activeTab === 'products' ? 'bg-white/10 text-malawi-orange shadow-inner' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <Package className="w-5 h-5 shrink-0" />
            {(isSidebarOpen || window.innerWidth < 768) && <span>Inventory</span>}
          </button>
          <button 
            onClick={() => handleNavClick('news')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${activeTab === 'news' ? 'bg-white/10 text-malawi-orange shadow-inner' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <Newspaper className="w-5 h-5 shrink-0" />
            {(isSidebarOpen || window.innerWidth < 768) && <span>Articles</span>}
          </button>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
           <button onClick={props.onExitAdmin} className="w-full flex items-center gap-4 p-4 rounded-xl text-gray-500 hover:text-white transition-colors">
             <ExternalLink className="w-5 h-5 shrink-0" />
             {(isSidebarOpen || window.innerWidth < 768) && <span>View Website</span>}
           </button>
           <button onClick={handleLogout} className="w-full flex items-center gap-4 p-4 rounded-xl text-malawi-red hover:bg-malawi-red/10 transition-colors">
             <LogOut className="w-5 h-5 shrink-0" />
             {(isSidebarOpen || window.innerWidth < 768) && <span>Sign Out</span>}
           </button>
        </div>
      </aside>

      <main className="flex-grow overflow-y-auto relative">
         {/* Mobile Menu Trigger */}
         <div className="md:hidden sticky top-0 z-30 bg-black/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
               <div className="bg-malawi-orange w-6 h-6 rounded-md flex items-center justify-center">
                  <Settings className="w-4 h-4 text-black" />
               </div>
               <span className="font-black text-xs uppercase tracking-widest">Factory OS</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 bg-white/5 rounded-xl text-malawi-orange"
            >
              <Menu className="w-6 h-6" />
            </button>
         </div>

         <AdminDashboard 
           products={props.products} 
           setProducts={props.setProducts} 
           news={props.news} 
           setNews={props.setNews} 
           quoteRequests={props.quoteRequests}
           setQuoteRequests={props.setQuoteRequests}
           initialTab={activeTab}
           onLogout={handleLogout}
         />
      </main>

      {/* Persistent Floating Action Button (Only on Mobile when sidebar is closed) */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="fixed bottom-6 right-6 md:hidden bg-malawi-orange p-4 rounded-full shadow-[0_10px_40px_rgba(230,126,34,0.4)] z-40 text-black active:scale-95 transition-transform"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AdminApp;
