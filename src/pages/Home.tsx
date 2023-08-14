import { useGetProductsQuery } from "../redux/services/products/productApi"

export default function Home() {
  const { isLoading, isFetching, isError, data, error } = useGetProductsQuery()
  if (isLoading || isFetching) return <h1>Loading...</h1>
  if (isError) return <h1>Error: {String(error)}</h1>
  console.log({ data })
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center">Technical Test</h1>
      <article className="flex flex-col h-full w-full p-4 border ">
        {
          data?.products.map((product) => (
            <div key={product.id} className="flex items-center justify-center">
              <h2 className="text-2xl text-start w-1/2">{product.title}</h2>
              <span className="text-xl text-center w-20 rounded-lg bg-red-500 ">$ {product.price}</span>
            </div>
          ))
        }
      </article>
    </section>
  )
}
