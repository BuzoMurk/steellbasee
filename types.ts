
export interface Product {
  id: string;
  name: string;
  category: 'Beds' | 'Tables' | 'Chairs' | 'Storage' | 'Shelving';
  primaryMaterial: 'Steel' | 'Wrought Iron' | 'Mahogany' | 'Teak';
  price: number;
  description: string;
  imageUrl: string;
  materials: string;
  dimensions: string;
  materialQuality: string;
  warranty: string;
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NewsEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  furnitureType: string;
  dimensions: string;
  budget: string;
  description: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Completed';
  date: string;
}

export enum Page {
  Home = 'home',
  Products = 'products',
  CustomOrder = 'custom',
  About = 'about',
  Contact = 'contact',
  News = 'news',
  Admin = 'admin'
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  furnitureType: string;
  dimensions: string;
  materials: string;
  budget: string;
}
