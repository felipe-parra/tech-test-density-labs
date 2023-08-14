import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../../services/pokemon/pokemonApi";

interface PokemonState {
  isLoading: boolean;
  isError: boolean;
  selectedPokemon: IPokemon | null;
  error: string | null;
}
const INITIAL_STATE: PokemonState = {
  selectedPokemon: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPokemon = createAsyncThunk(
  "pokemon-slice/fetchPokemon",
  async (nameOrId: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const data = await res.json();
    return data;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon-slice",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }),
      builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.selectedPokemon = payload;
      }),
      builder.addCase(fetchPokemon.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = String(payload);
      });
  },
});

export default pokemonSlice.reducer;
