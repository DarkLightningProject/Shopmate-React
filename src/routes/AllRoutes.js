import { Routes, Route } from "react-router";
import { Home, Cart } from "../pages";
 

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};


