export interface Productinterface {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  quantity?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
  createdAt: string;
  total?: number;
}
