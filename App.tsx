
import React, { useState, useEffect } from 'react';
import ClientApp from './apps/ClientApp';
import { Product, NewsEntry, QuoteRequest, Review } from './types';
import { PRODUCTS as INITIAL_PRODUCTS, NEWS as INITIAL_NEWS } from './constants';

const App: React.FC = () => {
  // Shared Data Layer - Persistence only for public interactions (like reviews/quotes)
  const [products, setProducts] = useState<Product[]>([]);
  const [news, setNews] = useState<NewsEntry[]>([]);
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Initialize data
  useEffect(() => {
    const savedProducts = localStorage.getItem('sb_products');
    const savedNews = localStorage.getItem('sb_news');
    const savedQuotes = localStorage.getItem('sb_quotes');
    const savedReviews = localStorage.getItem('sb_reviews');
    
    setProducts(savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS);
    setNews(savedNews ? JSON.parse(savedNews) : INITIAL_NEWS);
    setQuoteRequests(savedQuotes ? JSON.parse(savedQuotes) : []);
    setReviews(savedReviews ? JSON.parse(savedReviews) : []);
  }, []);

  // Sync interactions
  useEffect(() => {
    localStorage.setItem('sb_quotes', JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  useEffect(() => {
    localStorage.setItem('sb_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addQuoteRequest = (quote: Omit<QuoteRequest, 'id' | 'date' | 'status'>) => {
    const newQuote: QuoteRequest = {
      ...quote,
      id: `q-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB'),
      status: 'New'
    };
    setQuoteRequests(prev => [newQuote, ...prev]);
  };

  const addReview = (review: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB')
    };
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen">
      <ClientApp 
        products={products} 
        news={news} 
        reviews={reviews}
        onAddQuote={addQuoteRequest}
        onAddReview={addReview}
      />
    </div>
  );
};

export default App;
