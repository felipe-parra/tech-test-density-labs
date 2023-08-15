import { useLocation, useNavigate } from "react-router-dom"
import { useGetPokemonByIdQuery } from "../redux/services/pokemon/pokemonApi"
import PokemonImageContainer from "../component/ui/pokemon/PokemonImageContainer"


export default function PokemonDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isLoading, isError, isFetching, data, error } = useGetPokemonByIdQuery(location.pathname.split("/")[2])

  const handleBack = () => {
    navigate(-1)
  }
  if (isLoading || isFetching) return <h1>Loading...</h1>
  if (isError) return <h1>Error: {String(error)}</h1>

  return (
    <section className="w-full h-full flex flex-col justify-start items-center relative">
      <article className="absolute top-0 left-0 w-16 h-10">
        <button
          className="rounded-lg hover:bg-sky-500 bg-slate-500  text-white font-bold py-2 px-4 disabled:opacity-50 disabled:bg-red-900 disabled:cursor-not-allowed"
          onClick={handleBack}
        >◀️</button>
      </article>
      <article>
        <h2 className="text-4xl capitalize font-bold">{data?.name}</h2>
      </article>
      <article className="w-full flex justify-center mb-2">
        {
          data?.sprites && (
            <PokemonImageContainer
              pokemonSprites={data.sprites}
              name={data.name}
            />
          )
        }
      </article>
      <article className="border w-1/2 rounded-lg">
        <h3 className="font-bold w-full bg-white text-black rounded-t-lg">Abilities</h3>
        <ul className="">
          {
            data?.abilities.map((ability) => (
              <li className="capitalize" key={ability.ability.name}>{ability.ability.name}</li>
            ))
          }
        </ul>

      </article>

    </section>
  )
}
