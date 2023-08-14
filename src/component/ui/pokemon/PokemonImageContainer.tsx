import { PokemonSprites } from '../../../redux/services/pokemon/pokemonApi'

export default function PokemonImageContainer({ pokemonSprites, name }: { pokemonSprites: PokemonSprites, name: string }) {
  return (
    <img
      className="w-1/2 h-1/2 bg-white rounded-lg object-contain"
      src={
        pokemonSprites.other["official-artwork"].front_default ||
        pokemonSprites.front_default
      } alt={name}
    />
  )
}
