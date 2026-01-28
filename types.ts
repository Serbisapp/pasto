export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  soldOut?: boolean;
}

export enum SectionType {
  HERO = 'HERO',
  PRODUCTS = 'PRODUCTS',
  MANIFESTO = 'MANIFESTO',
  DROP = 'DROP'
}