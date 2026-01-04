
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { NewsEntry } from '../types';

interface NewsProps {
  news: NewsEntry[];
}

const News: React.FC<NewsProps> = ({ news }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsEntry | null>(null);

  return (
    <div className="min-h-screen py-12 bg-neutral-light industrial-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-heading font-bold text-steel-900 mb-2">SteelBase News</h1>
          <p className="text-gray-500">Workshop updates and Malawian industry news.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {news.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <img src={article.imageUrl} className="md:w-2/5 h-64 md:h-auto object-cover" />
              <div className="md:w-3/5 p-6 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-steel-900 mb-3 group-hover:text-malawi-orange">{article.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">{article.excerpt}</p>
                <button className="mt-auto text-malawi-red font-bold flex items-center gap-2">Read More <ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>

        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 bg-black/20 p-2 rounded-full text-white z-10"><X className="w-6 h-6" /></button>
              <img src={selectedArticle.imageUrl} className="h-64 object-cover" />
              <div className="p-10 overflow-y-auto">
                 <h2 className="text-4xl font-heading font-bold mb-4">{selectedArticle.title}</h2>
                 <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest">{selectedArticle.date} • By {selectedArticle.author}</p>
                 <div className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{selectedArticle.content}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
