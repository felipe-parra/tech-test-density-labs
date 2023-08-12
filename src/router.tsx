/**
 * react-router-dom v6.4
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Counter from "./pages/Counter";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}