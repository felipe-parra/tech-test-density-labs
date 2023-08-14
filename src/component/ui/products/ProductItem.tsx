import { Product } from "../../../redux/services/products/productApi";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div key={product.id} className="flex items-center justify-center">
      <h2 className="text-2xl text-start w-1/2">{product.title}</h2>
      <span className="text-xl text-center w-20 rounded-lg bg-red-500 ">$ {product.price}</span>
    </div>
  )
}
