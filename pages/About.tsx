
import React from 'react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-steel-800 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Steel background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl font-heading font-black mb-6">THE STEELBASE STORY</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From a small workshop in Lilongwe to a leading industrial manufacturer, our mission has remained the same: to build furniture that serves Malawi for a lifetime.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white" 
              alt="Manufacturing"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-malawi-orange/20 rounded-full blur-3xl -z-0" />
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-malawi-red p-8 rounded-2xl text-white shadow-xl z-20 hidden md:block">
              <span className="text-4xl font-black block">15+</span>
              <span className="text-sm font-bold uppercase tracking-widest">Years Experience</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-steel-900">Forged in the Heart of Africa</h2>
            <p className="text-gray-600 leading-relaxed">
              SteelBase Furniture was founded with a clear realization: Malawi needed furniture that could withstand the rigors of heavy usage and tropical environments. Wooden alternatives often succumbed to termites or moisture, and cheap imports didn't last the season.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We decided to build differently. By sourcing high-quality local steel and investing in advanced welding techniques, we created a standard of furniture that is virtually indestructible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-malawi-orange" />
                <span className="font-bold text-steel-800">100% Malawian Owned</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-malawi-orange" />
                <span className="font-bold text-steel-800">ISO-Certified Process</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-malawi-orange" />
                <span className="font-bold text-steel-800">Lifetime Frame Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-malawi-orange" />
                <span className="font-bold text-steel-800">Country-wide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-light industrial-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-malawi-red mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-transparent group-hover:border-malawi-orange transition-all">
               <Award className="w-10 h-10 text-malawi-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Integrity</h3>
            <p className="text-gray-500">We never compromise on metal gauge or weld quality. What you see is exactly what is inside.</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-transparent group-hover:border-malawi-red transition-all">
               <Heart className="w-10 h-10 text-malawi-red" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Empowerment</h3>
            <p className="text-gray-500">We train local youths in advanced metallurgy and fabrication, creating sustainable skills in our community.</p>
          </div>

          <div className="text-center group">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-transparent group-hover:border-steel-800 transition-all">
               <CheckCircle2 className="w-10 h-10 text-steel-800" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Reliability</h3>
            <p className="text-gray-500">Whether it's 10 desks or 1,000, we deliver on time. Your timelines are our priority.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
