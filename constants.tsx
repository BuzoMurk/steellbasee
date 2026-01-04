
import { Product, NewsEntry } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Standard Institutional School Desk',
    category: 'Tables',
    primaryMaterial: 'Steel',
    price: 45000,
    materials: '25mm Square Steel Tubing with Varnished Pine Top',
    dimensions: '120cm x 45cm x 75cm (Dual Seater)',
    materialQuality: 'Heavy-duty gauge steel designed for classroom durability',
    warranty: '10-year structural warranty on frame',
    description: 'The backbone of Malawian education. Built to withstand decades of daily classroom use. Features integrated bench seating and book storage.',
    imageUrl: 'https://i.postimg.cc/GT3Xcykq/school-desk.jpg'
  },
  {
    id: 'p2',
    name: 'Premium Steel Heritage Bed',
    category: 'Beds',
    primaryMaterial: 'Steel',
    price: 650000,
    materials: '32mm Heavy Gauge Square Steel Tubing',
    dimensions: '183cm x 203cm (King Size)',
    materialQuality: 'High-tensile precision-welded steel with rust-inhibiting primer',
    warranty: 'Lifetime structural warranty',
    description: 'A masterpiece of structural integrity. Featuring reinforced corners and a rust-resistant finish perfect for any climate in Malawi.',
    imageUrl: 'https://i.postimg.cc/CzswrT1p/bed.jpg'
  },
  {
    id: 'p3',
    name: 'Industrial Modern TV Stand',
    category: 'Storage',
    primaryMaterial: 'Steel',
    price: 350000,
    materials: 'Steel Angle Iron Frame with Mahogany Insets',
    dimensions: '150cm x 40cm x 55cm',
    materialQuality: 'Powder-coated industrial steel frame',
    warranty: '5-year structural warranty',
    description: 'Sleek industrial design meets Malawian craftsmanship. Perfect for modern living rooms, providing extreme durability and weight capacity.',
    imageUrl: 'https://i.postimg.cc/S2CBXC2g/tv-stand.jpg'
  }
];

export const NEWS: NewsEntry[] = [
  {
    id: 'n1',
    title: 'Expanding Our Airwing Workshop',
    date: 'May 15, 2024',
    excerpt: 'SteelBase is doubling production capacity in Lilongwe to meet growing demand for dormitory furniture.',
    content: 'We are excited to announce a significant expansion of our manufacturing facility off Airwing Road. This expansion includes new high-precision welding stations and an advanced powder-coating line, ensuring even faster delivery times.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    author: 'Marketing Team'
  }
];

export const CONTACT_INFO = {
  phone: '0995 952 599',
  phoneInternational: '+265995952599',
  whatsapp: '265888952599',
  whatsappDisplay: '0888 952 599',
  whatsappMessage: "Hello, I'm interested in SteelBase Furniture products. I'd like more information.",
  email: 'steelbasemw@gmail.com',
  mapUrl: 'https://maps.app.goo.gl/df8b1dc56380c9ae',
  locations: [
    { 
      city: 'Lilongwe', 
      area: 'Airwing', 
      address: 'Along Airwing Road, 300 Mtrs from Mchinji Road, Lilongwe, Malawi' 
    }
  ]
};
