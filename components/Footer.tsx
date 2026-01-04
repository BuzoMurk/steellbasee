
import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-steel-900 text-white pt-16 pb-12 border-t-4 border-malawi-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-malawi-orange">STEELBASE</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pioneering industrial furniture manufacturing in Malawi. We combine heavy-duty steel with precision craftsmanship to build furniture that lasts for generations.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onPageChange(Page.Products)}>Bed Frames</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onPageChange(Page.Products)}>Office Desks</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onPageChange(Page.Products)}>Storage Units</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onPageChange(Page.CustomOrder)}>Custom Fabrication</li>
          </ul>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm inline-block md:block">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-4 h-4 text-malawi-orange" />
              <span>Call: {CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <span>WhatsApp: {CONTACT_INFO.whatsappDisplay}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-4 h-4 text-malawi-orange" />
              <span>{CONTACT_INFO.email}</span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3">
              <MapPin className="w-4 h-4 text-malawi-orange mt-1 shrink-0" />
              <span>Lilongwe, Malawi</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h3 className="font-bold text-lg">Work Hours</h3>
          <div className="text-gray-400 text-sm">
            <p>Mon - Fri: 07:30 - 17:00</p>
            <p>Sat: 08:00 - 12:00</p>
            <div className="mt-6">
               <a 
                 href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                 className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
               >
                 <MessageSquare className="w-4 h-4" /> WhatsApp Us
               </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 flex flex-col items-center text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} SteelBase Furniture Ltd. Proudly Malawian 🇲🇼</p>
      </div>
    </footer>
  );
};

export default Footer;
