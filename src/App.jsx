import { Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Categories from "./pages/Categories/Categories";

import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";

import AddProducts from "./pages/Add Products/AddProducts";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AddCategory from "./pages/Add Categrory/AddCategory";
import AddUsers from "./pages/Add Users/AddUsers";
import CustomRouter from "./components/CustomRouter";
function App() {

  return (
    <>
      <CustomRouter>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-users" element={<AddUsers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </CustomRouter>
    </>
  );
}

export default App;
