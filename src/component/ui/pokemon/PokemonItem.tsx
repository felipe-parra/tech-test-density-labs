import { useNavigate } from "react-router-dom";
import { PokemonResult } from "../../../redux/services/pokemon/pokemonApi";
import { useAppDispatch } from "../../../redux/hooks";
import { fetchPokemon } from "../../../redux/features/pokemon/pokemonSlice";


export default function PokemonItem({ pokemon }: { pokemon: PokemonResult }) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const setCurrentPokemon = (nameOrId: string) => {
    dispatch(fetchPokemon(nameOrId))
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.detail) {
      case 1:
        setCurrentPokemon(pokemon.name)
        break;
      case 2:
        navigate(`/pokemon/${pokemon.name}`)
        break;
      default:
        break;
    }
  }
  return (
    <button onClick={handleClick} className="tex-start capitalize bg-slate-200 text-black w-48 m-1 rounded-lg p-2">{pokemon.name}</button>
  )
}
