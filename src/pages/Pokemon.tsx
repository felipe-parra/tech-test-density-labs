import { useNavigate } from "react-router-dom";
import PokeballLoader from "../component/ui/loading/PokeballLoader";
import PokemonList from "../component/ui/pokemon/PokemonList";
import { useAppSelector } from "../redux/hooks";
import PokemonLogo from '../assets/Pokemon-Logo.png'
import PokemonImageContainer from "../component/ui/pokemon/PokemonImageContainer";

export default function Pokemon() {
  const { selectedPokemon, isLoading } = useAppSelector((state) => state.pokemon)
  const navigate = useNavigate()

  const goToDetail = () => {
    if (!selectedPokemon) return
    navigate(`/pokemon/${selectedPokemon?.name}`)
  }

  return (
    <section className="w-full h-full flex justify-between items-start">
      <article className="w-full h-96 flex flex-col border bg-red-500 p-4 rounded-lg m-2">
        <section className="w-full h-full flex flex-col items-center justify-center">
          {
            !selectedPokemon && !isLoading &&
            <section
              className="w-full h-full flex flex-col justify-center items-center "
            >
              <img className="w-1/2 bg-white rounded-lg object-contain mix-blend-color-normal" src={PokemonLogo} alt="Pokemon logo" />
            </section>
          }
          {
            isLoading && (
              <PokeballLoader />
            )
          }
          <article className="w-20">
          </article>
          {
            selectedPokemon && !isLoading ? (
              <button className="w-full h-full flex flex-col justify-center items-center" onClick={goToDetail}>
                <h2 className="capitalize font-bold text-4xl">{selectedPokemon.name}</h2>
                <PokemonImageContainer
                  pokemonSprites={selectedPokemon.sprites}
                  name={selectedPokemon.name}
                />
              </button>
            ) : null
          }
        </section>
      </article>
      <article className="flex justify-center items-start w-full">
        <PokemonList />
      </article>
    </section>
  )
}
