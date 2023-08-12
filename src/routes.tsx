/**
 * react-router-dom v6.15
 */

import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Counter from "./pages/Counter";
import GenericLayout from "./component/layouts/GenericLayout";

export function Router() {
  return (
    <GenericLayout>
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </GenericLayout>
  )
}

export const RouterProviderWrapper = createBrowserRouter(([
  { path: "*", Component: Router }
]))