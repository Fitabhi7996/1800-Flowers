import ProductList from "./ProductList.jsx";
import { AddProductForm } from "./AddProduct.jsx";
import { Routes, Route } from "react-router-dom";
import Userslist from "./Userslist.jsx";
import EditProduct from "./EditProduct.jsx";
const Adminroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/userslist" element={<Userslist/>} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/products/:id/edit" element={<EditProduct/>} />
      </Routes>
    </div>
  );
};

export default Adminroutes;
