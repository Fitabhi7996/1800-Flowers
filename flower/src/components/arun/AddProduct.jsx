import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProduct.css";
export function AddProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [price1, setPrice1] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct({ title, price, price1, category, image, image1 });
    setTitle("");
    setPrice("");
    setPrice1("");
    setImage("");
    setImage1("");
    setCategory("");
  };
  const handleAddProduct = async (newProduct) => {
    const res = await axios.post(
      `https://flowers18.onrender.com/flowers`,
      newProduct
    );
    alert("Product added successfully");
  };
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label>Name:</label>
      <input
        className="ainput"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Category:</label>
      <input
        className="ainput"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <label>Price:</label>
      <input
        className="ainput"
        type="text"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
      />
      <br />
      <label>Offer Price:</label>
      <input
        className="ainput"
        type="text"
        value={price1}
        onChange={(e) => setPrice1(+e.target.value)}
      />
      <br />
      <label>Image 1:</label>
      <input
        className="ainput"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <label>Image 2:</label>
      <input
        className="ainput"
        type="text"
        value={image1}
        onChange={(e) => setImage1(e.target.value)}
      />
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}
