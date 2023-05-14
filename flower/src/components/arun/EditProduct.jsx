import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import axios from "axios";
const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [price1, setPrice1] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(
        `https://flowers180.onrender.com/flowers/${id}`
      );
      setTitle(res.data.title);
      setPrice(res.data.price);
      setPrice1(res.data.price1);
      setImage(res.data.image);
      setImage1(res.data.image1);
      setCategory(res.data.category);
    }
    fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduct({ title, price, price1, category, image, image1 });
  };
  const navigate = useNavigate();
  const handleEditProduct = async (updatedProduct) => {
    const res = await axios.put(
      `https://flowers180.onrender.com/flowers/${id}`,
      updatedProduct
    );
    alert("Product edited successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="editForm">
      <label className="elabel">Name:</label>
      <input
        className="einput"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label className="elabel">Category:</label>
      <input
        className="einput"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <label className="elabel">Price:</label>
      <input
        className="einput"
        type="text"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
      />
      <br />
      <label className="elabel">Offer Price:</label>
      <input
        className="einput"
        type="text"
        value={price1}
        onChange={(e) => setPrice1(+e.target.value)}
      />
      <br />
      <label className="elabel">Image 1:</label>
      <br />
      <input
        className="einput"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label className="elabel">Image 2:</label>
      <input
        className="einput"
        type="text"
        value={image1}
        onChange={(e) => setImage1(e.target.value)}
      />
      <br />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
