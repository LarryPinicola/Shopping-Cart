import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import "./index.css";
import AddToCart from "./components/AddToCart";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Search from "./components/Search";
import RouteGard from "./components/RouteGard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/search"
          element={
            <RouteGard>
              <Search />
            </RouteGard>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
