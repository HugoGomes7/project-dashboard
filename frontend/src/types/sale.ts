import { Seller } from "./seller";

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[]; // opcional
  last: boolean;
  totalPages: number;
  totalElements: number;
  size?: number; // opcional
  number: number;
  first: boolean;
  numberOfElements?: number; // opcional
  empty?: boolean; // opcional
}

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: 684;
}