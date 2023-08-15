import { useGetProductsQuery } from "../../../redux/services/products/productApi"
import ProductItem from "./ProductItem"

export default function ProductList() {
  const { isLoading, isFetching, isError, data, error } = useGetProductsQuery()
  if (isLoading || isFetching) return <h1>Loading...</h1>
  if (isError) return <h1>Error: {String(error)}</h1>

  return (
    <>
      {
        data?.products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))
      }
    </>
  )
}
