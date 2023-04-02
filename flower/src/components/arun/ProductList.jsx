import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.css"
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    const res = await axios
      .get("https://wild-blue-lemur-sari.cyclic.app/flowers")
      .then(
        (res) =>
        setProducts(
          res.data.map((product, index) => ({
            ...product,
            item_number: index + 1,
          }))
        )
      );
  };

  const handleDeleteProduct = async (id) => {
    const res = await axios.delete(
      `https://wild-blue-lemur-sari.cyclic.app/flowers/${id}`
    );
    fetchProducts();
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>Product List</h1>
      <div className="productssection">
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.item_number}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)} className="delete">
                    Delete
                  </button>
                  <button >
                  <Link to={`/admin/products/${product.id}/edit`} className="editbutton">
                    Edit
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
