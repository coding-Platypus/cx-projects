import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} /> 
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    // <HomePage />
  );
}


