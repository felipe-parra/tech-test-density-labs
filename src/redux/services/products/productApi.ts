import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, number | void>({
      query: (limit = 30) => `?limit=${limit}`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
