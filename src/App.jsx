/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Categories from "./pages/Categories/Categories";

import Products from "./pages/Products/Products";
import Transactions from "./pages/Transactions/Transactions";
import Users from "./pages/Users/Users";
import AddProducts from "./pages/Add Products/AddProducts";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
