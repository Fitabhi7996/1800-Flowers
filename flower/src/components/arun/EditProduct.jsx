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
        `https://wild-blue-lemur-sari.cyclic.app/flowers/${id}`
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
      `https://wild-blue-lemur-sari.cyclic.app/flowers/${id}`,
      updatedProduct
    );
    alert("Product edited successfully");
    navigate("/")

  };

  return (
    <form onSubmit={handleSubmit} className="editForm">
      <label>
        Name:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
      </label>
      <br />
      <label>
        Offer Price:
        <input
          type="text"
          value={price1}
          onChange={(e) => setPrice1(+e.target.value)}
        />
      </label>
      <br />
      <label>
        Image 1:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image 2:
        <input
          type="text"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
