import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface PokemonAPIResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  sprites: PokemonSprites;
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  refetchOnFocus: false,

  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/pokemon",
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonAPIResponse, number | void>({
      query: (offset = 20) => `?limit=${20}&offset=${offset}`,
    }),
    getPokemonById: builder.query<IPokemon, number | string>({
      query: (nameOrId) => `/${nameOrId}`,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonByIdQuery } = pokemonApi;
