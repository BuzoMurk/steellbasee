
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-steel-900 py-12 md:py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 uppercase tracking-tighter">Connect with us</h1>
        <p className="text-gray-400 px-4 text-sm md:text-base">Visit our Lilongwe workshop or reach out digitally for a technical consultation.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Contacts */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-malawi-orange transition-all">
                <Phone className="w-8 h-8 text-malawi-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Our Sales Team</h3>
                <p className="text-gray-500 mb-4 text-sm">Direct line for technical specs and wholesale pricing.</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl md:text-2xl font-black text-steel-900 hover:text-malawi-orange flex items-center gap-2 transition-colors">
                  {CONTACT_INFO.phone} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-malawi-red transition-all">
                <MessageSquare className="w-8 h-8 text-malawi-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Technical WhatsApp</h3>
                <p className="text-gray-500 mb-4 text-sm">Send your sketches or photos for a quick estimate.</p>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-black text-steel-900 hover:text-malawi-red flex items-center gap-2 transition-colors">
                  Chat Now <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-neutral-light industrial-texture rounded-3xl p-6 md:p-12 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-steel-900">Our Headquarters</h2>
              <div className="max-w-md mb-8">
                {CONTACT_INFO.locations.map((loc) => (
                  <div key={loc.city} className="space-y-4">
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md">
                      <MapPin className="w-7 h-7 text-malawi-orange" />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl text-steel-900">{loc.city} HQ</h4>
                      <p className="text-xs font-bold text-malawi-red uppercase tracking-widest mb-2">{loc.area}</p>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Official Embedded Map for Headquarters */}
              <div className="h-[450px] bg-gray-200 rounded-[2rem] overflow-hidden relative border-4 border-white shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.9192386469235!2d33.71997233024797!3d-13.967210270738555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d30012c3d417%3A0xdf8b1dc56380c9ae!2sSteel%20Base%20Furnitures!5e0!3m2!1sen!2smw!4v1767520113596!5m2!1sen!2smw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SteelBase HQ Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Card Sidebar */}
          <div className="space-y-8">
            <div className="bg-steel-800 text-white rounded-[2.5rem] p-8 shadow-2xl border-t-8 border-malawi-orange">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-malawi-orange" /> Quick Email
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full bg-steel-900 border border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-malawi-orange outline-none transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-steel-900 border border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-malawi-orange outline-none transition-all" />
                <textarea placeholder="Tell us about your project..." className="w-full bg-steel-900 border border-white/10 p-4 rounded-2xl h-40 resize-none focus:ring-2 focus:ring-malawi-orange outline-none transition-all" />
                <button className="w-full bg-malawi-orange py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95 uppercase tracking-widest">Send Inquiry</button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                 <Clock className="w-6 h-6 text-malawi-orange" />
                 <h3 className="font-bold text-lg uppercase tracking-tight">Factory Hours</h3>
               </div>
               <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-50 pb-3">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="font-black text-steel-900">07:30 - 17:00</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-3">
                    <span className="font-medium">Saturday</span>
                    <span className="font-black text-steel-900">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between text-malawi-red italic font-bold">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
