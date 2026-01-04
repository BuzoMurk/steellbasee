
import React, { useState } from 'react';
import { Send, Bot, Sparkles, Loader2, ClipboardCheck, Ruler, DollarSign, Hammer, Phone, X } from 'lucide-react';
import { getDesignAdvice } from '../services/gemini';
import { QuoteRequest } from '../types';

interface CustomOrderProps {
  onSubmitQuote?: (quote: Omit<QuoteRequest, 'id' | 'date' | 'status'>) => void;
}

const CustomOrder: React.FC<CustomOrderProps> = ({ onSubmitQuote }) => {
  const [description, setDescription] = useState('');
  const [furnitureType, setFurnitureType] = useState('Bed Frame');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAiAssistant = async () => {
    if (!description.trim()) return;
    setIsAiLoading(true);
    const advice = await getDesignAdvice(`Type: ${furnitureType}. Details: ${description}`);
    setAiResponse(advice);
    setIsAiLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    if (onSubmitQuote) {
      onSubmitQuote({
        customerName: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        furnitureType: furnitureType,
        dimensions: formData.get('dimensions') as string,
        budget: formData.get('budget') as string,
        description: description
      });
    }
    
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border-t-8 border-malawi-red">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ClipboardCheck className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-steel-900 mb-2 uppercase tracking-tight">Request Logged!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Zikomo! Your technical request for a <strong>{furnitureType}</strong> has been received by our factory system. Our manager will review your specs and contact you shortly.</p>
          <button 
            onClick={() => setFormSubmitted(false)}
            className="w-full bg-steel-800 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl"
          >
            Submit New Specification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 bg-neutral-light min-h-full industrial-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-steel-900 mb-4 uppercase tracking-tight">Technical Specification</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Our expert fabricators in Lilongwe can build exactly what you need. Provide your specs below and we'll generate a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Enhanced Form */}
          <div className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-2 text-steel-800 uppercase tracking-tight">
              <span className="bg-malawi-red text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">1</span>
              Technical Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-malawi-orange outline-none transition-all bg-gray-50" placeholder="e.g. Kondwani Banda" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Phone className="w-3 h-3 text-malawi-red" /> Contact Number
                  </label>
                  <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-malawi-orange outline-none transition-all bg-gray-50" placeholder="09... or 08..." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-malawi-orange outline-none transition-all bg-gray-50" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Category</label>
                  <select 
                    value={furnitureType}
                    onChange={(e) => setFurnitureType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-malawi-orange outline-none transition-all bg-gray-50 cursor-pointer"
                  >
                    <option>Bed Frame</option>
                    <option>Office Desk</option>
                    <option>Dining Table</option>
                    <option>Shelving Unit</option>
                    <option>Security Storage</option>
                    <option>Industrial Work-bench</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Detailed Description of Customization</label>
                <textarea 
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-32 px-4 py-3 rounded-xl border border-gray-200 focus:border-malawi-orange outline-none transition-all resize-none bg-gray-50" 
                  placeholder="Tell us exactly how you want it built (metal gauge, finish, etc)..."
                />
              </div>

              <button type="submit" className="w-full bg-malawi-red hover:bg-red-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-widest">
                Log Request <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right: AI Design Assistant & Workshop Info */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-steel-800 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-malawi-orange">
               <div className="absolute top-6 right-8">
                 <Sparkles className="w-6 h-6 text-malawi-sunset opacity-30 animate-pulse" />
               </div>
               <div className="flex items-center gap-4 mb-6">
                 <div className="bg-malawi-orange p-3 rounded-xl">
                   <Bot className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-none">AI Design Assist</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Material Optimization</p>
                 </div>
               </div>

               <div className="bg-steel-900/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 min-h-[300px] border border-white/5 shadow-inner overflow-y-auto">
                 {isAiLoading ? (
                   <div className="h-full flex flex-col items-center justify-center gap-6 py-12 text-center">
                     <Loader2 className="w-12 h-12 text-malawi-orange animate-spin" />
                     <p className="text-gray-400 text-sm italic leading-relaxed">Analyzing material stressors and fabrication standards for Malawi's climate...</p>
                   </div>
                 ) : aiResponse ? (
                   <div className="animate-in fade-in slide-in-from-right-4">
                     <div className="prose prose-invert prose-sm max-w-none">
                       <div className="whitespace-pre-line text-gray-300 leading-relaxed font-light text-[15px]">
                         {aiResponse}
                       </div>
                       <button 
                         onClick={() => setAiResponse(null)}
                         className="mt-8 text-malawi-orange font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
                       >
                         <X className="w-3 h-3" /> Start Over
                       </button>
                     </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
                     <p className="text-gray-400 italic text-sm leading-relaxed px-4">Stuck on the technical details? Describe your idea to the left and our industrial AI will suggest the best steel gauges and finishes.</p>
                     <button 
                       onClick={handleAiAssistant}
                       disabled={!description.trim()}
                       className="bg-white/5 hover:bg-white/10 px-8 py-3 rounded-xl font-bold text-xs transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 flex items-center gap-2 group"
                     >
                       <Bot className="w-4 h-4 group-hover:scale-110 transition-transform" /> Get AI Suggestions
                     </button>
                   </div>
                 )}
               </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col gap-6">
               <h4 className="font-black text-steel-900 text-xl border-b pb-4 uppercase tracking-tight">Direct Sales Line</h4>
               <a href="tel:+265995952599" className="flex items-center gap-4 group">
                  <div className="bg-red-50 p-3 rounded-xl group-hover:bg-malawi-red group-hover:text-white transition-all">
                    <Phone className="w-5 h-5 text-malawi-red group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Workshop Call</p>
                    <p className="font-black text-xl text-steel-900 group-hover:text-malawi-red transition-colors tracking-tighter">0995 952 599</p>
                  </div>
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
