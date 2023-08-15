import { useState } from "react"
import { useGetPokemonQuery } from "../../../redux/services/pokemon/pokemonApi"
import PokemonItem from "./PokemonItem"
import PokeballLoader from "../loading/PokeballLoader"

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const { isLoading, isFetching, isError, data } = useGetPokemonQuery(currentPage)


  const handleClickPage = (type: "previous" | "next") => {
    if (!data) return
    if (type === "previous" && data.previous !== null) {
      const previous = new URL(data.previous).searchParams.get("offset")
      if (!previous) {
        return
      }
      setCurrentPage(Number(previous) || 0)
    } else {
      const next = new URL(data.next).searchParams.get("offset")
      if (!next || Number(next) > 151 || Number(next) < 0) {
        return
      }
      setCurrentPage(Number(next) || 0)
    }

  }


  if (isLoading || isFetching) return <PokeballLoader />
  if (isError) return <h1>Something wen't wrong, try again.</h1>

  return (
    <section className="w-full h-full flex items-center justify-between">
      <article>
        <button
          className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:bg-red-900 disabled:cursor-not-allowed"
          disabled={currentPage === 0}
          onClick={() => handleClickPage("previous")}>◀️</button>
      </article>
      <article className="w-full flex-wrap flex justify-start items-start mx-1 h-96 overflow-auto">
        {
          data?.results.map((pokemon) => (
            <PokemonItem
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))
        }
      </article>
      <article>
        <button
          onClick={() => handleClickPage("next")} disabled={currentPage === 140}
          className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:bg-sky-200 disabled:cursor-not-allowed"
        >▶️</button>
      </article>
    </section>
  )
}
