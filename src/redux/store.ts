import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import counterReducer from "./features/counter/counterSlice";
import pokemonSlice from "./features/pokemon/pokemonSlice";
import { productApi } from "./services/products/productApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "./services/pokemon/pokemonApi";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
    pokemon: pokemonSlice,
    [productApi.reducerPath]: productApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      pokemonApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
