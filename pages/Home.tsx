
import React, { useState } from 'react';
import { Hammer, ShieldCheck, Clock, Users, ArrowRight, Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const FAQ_ITEMS = [
  {
    question: "Do you deliver outside Lilongwe?",
    answer: "Yes! We offer nationwide delivery to all districts in Malawi including Blantyre, Mzuzu, Zomba, and lakeshore areas. Delivery fees depend on the size of the order and distance."
  },
  {
    question: "Can I provide my own furniture design?",
    answer: "Absolutely. We specialize in custom fabrications. You can visit our workshop on Airwing Road with your sketches or use our 'Custom Order' page to submit a request digitally."
  },
  {
    question: "What is the standard lead time for orders?",
    answer: "Standard items in our catalog usually take 5-7 business days. Bulk institutional orders or complex custom designs typically take 14-21 days depending on the volume."
  },
  {
    question: "Do you offer discounts for large institutional orders?",
    answer: "Yes, we provide wholesale pricing for schools, hospitals, NGOs, and government offices. Contact our sales team for a formal technical quotation."
  }
];

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-steel-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            alt="SteelBase industrial workshop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-malawi-red text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-xl animate-bounce">
              Official Commissioning | Lilongwe Workshop
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white leading-[0.95] mb-6 uppercase tracking-tighter">
              BUILT TO <span className="text-malawi-orange">EMPOWER</span> MALAWI'S FUTURE
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed font-light max-w-3xl">
              We manufacture the furniture that serves Malawi's institutions. From schools to government offices, SteelBase is the nationwide standard for durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <button 
                onClick={() => onPageChange(Page.Products)}
                className="bg-malawi-orange hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl flex items-center justify-center gap-3 transition-all group shadow-xl active:scale-95"
              >
                Institutional Catalog <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onPageChange(Page.Contact)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl transition-all active:scale-95"
              >
                Visit Our Facility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Institutions Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8 md:mb-10">Trusted for Nationwide School & Office Commissioning</p>
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-xl md:text-3xl font-heading font-bold text-steel-900 uppercase">Government</div>
              <div className="text-xl md:text-3xl font-heading font-bold text-steel-900 uppercase">Educational</div>
              <div className="text-xl md:text-3xl font-heading font-bold text-steel-900 uppercase">NGOs</div>
              <div className="text-xl md:text-3xl font-heading font-bold text-steel-900 uppercase">Private</div>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-neutral-light industrial-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-malawi-red mb-6 md:mb-8" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase tracking-tight">Handover Quality</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">Every piece is inspected for technical integrity before delivery. We guarantee structural excellence at every handover.</p>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Hammer className="w-10 h-10 md:w-12 md:h-12 text-malawi-orange mb-6 md:mb-8" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase tracking-tight">Airwing Engineering</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">Managed by Lilongwe's finest fabricators. We use heavy-duty steel and precision welding built for Malawian generations.</p>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-steel-800 mb-6 md:mb-8" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase tracking-tight">Logistical Reach</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">Nationwide delivery from our Airwing hub. We ensure your order arrives safely anywhere in Malawi.</p>
              </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase tracking-tighter">Support & Logistics</h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">Frequently Asked Questions</p>
          </div>
          <div className="space-y-4 md:space-y-6">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl text-steel-900 pr-4">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-malawi-orange shrink-0" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-400 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="p-6 md:p-8 pt-0 bg-white text-gray-600 text-base md:text-lg leading-relaxed animate-in slide-in-from-top-4 duration-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
