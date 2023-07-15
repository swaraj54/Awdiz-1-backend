import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [productData, setProductData] = useState({ name: "", image: "", price: "" })
  const router = useNavigate()
  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (productData.name && productData.image && productData.price) {
      const response = await axios.post("http://localhost:8000/add-product", {
        name: productData.name,
        image: productData.image,
        price: productData.price
      });
      if (response.data.status == 200) {
        setProductData({ name: "", image: "", price: "" })
        router('/all-products');
        alert("Product added successfully.")
      } else {
        alert("Error please try again..")
      }
    } else {
      alert("Please fill the all fields..")
    }
  }

  return (
    <div>
      <h1>Add Product here : </h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label><br />
        <input onChange={handleChange} type='text' name='name' /><br />
        <label>Price :</label><br />
        <input onChange={handleChange} type='number' name='price' /><br />
        <label>Image Url :</label><br />
        <input onChange={handleChange} type='text' name='image' /><br />
        <input type='submit' value="Add New Product" /><br />
      </form>
    </div>
  )
}

export default AddProduct