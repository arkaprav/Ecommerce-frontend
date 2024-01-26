/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Search Bar/SearchBar";
import axios from "axios";
import Dropzone from "../../components/Dropzone/Dropzone";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [title, setTitle] = useState();
  const [buying, setBuying] = useState();
  const [retail, setRetail] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState("");

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState();
  // const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image);
    const productData = {
      name: title,
      brand: brand,
      purchasePrice: buying,
      retailPrice: retail,
      catgeoryId: category,
      description: description,
      product_image: image,
    };

    // Call the createProduct function to send the data to the backend
    await createProduct(productData);
    navigate("/products");
  };

  const createProduct = async (productData) => {
    try {
      console.log(cookies.access_token);
      const apiUrl = "https://ecommerce-back-end-orpin.vercel.app/api/products"; //https:ecommerce-back-end-orpin.vercel.app/api/products/
      const relativeUrl = "/secure/";

      const headers = {
        Authorization: `Bearer ${cookies.access_token}`,
        "Content-Type": "multipart/form-data",
      };

      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("brand", productData.brand);
      formData.append("description", productData.description);
      formData.append("purchasePrice", productData.purchasePrice);
      formData.append("retailPrice", productData.retailPrice);
      formData.append("catgeoryId", productData.catgeoryId);
      formData.append("brand", productData.brand);

      formData.append("product_image", productData.product_image);
      console.log(formData);

      const response = await axios.post(`${apiUrl}${relativeUrl}`, formData, {
        headers,
      });

      console.log("Product created successfully:", response.data);
      // Handle success or perform additional actions as needed
    } catch (error) {
      console.error("Error creating product:", error);
      console.log(productData);

      // Handle error or display an error message to the user
    }
  };

  return (
    <div className="Container">
      <Sidebar opt={3} />
      <div className="container-prod">
        <SearchBar />
        <div className="content-container">
          <h1 className="heading">Add Product</h1>
          <div className="dropzone">
            <Dropzone image={image} setImage={setImage} />
          </div>

          <div className="addproduct">
            <form>
              <div className="form-group product-group">
                <label htmlFor="name">Product Title</label>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="form-control product-inp"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group category-group">
                <label htmlFor="category">Brand</label>
                <input
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  value={brand}
                  className="form-control category-inp"
                  type="number"
                  id="category"
                  name="category"
                  placeholder="Enter Category"
                />
              </div>
              <div className="form-group buying-group">
                <label htmlFor="price"> Buying Price</label>
                <input
                  value={buying}
                  onChange={(e) => {
                    setBuying(e.target.value);
                  }}
                  className="form-control buying-inp"
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                />
              </div>

              <div className="form-group retail-group">
                <label htmlFor="price">Retail Price</label>
                <input
                  value={retail}
                  onChange={(e) => {
                    setRetail(e.target.value);
                  }}
                  className="form-control retail-inp"
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                />
              </div>
              <div className="form-group category-group">
                <label htmlFor="category">Category</label>
                <input
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value={category}
                  className="form-control category-inp"
                  type="number"
                  id="category"
                  name="category"
                  placeholder="Enter Category"
                />
              </div>
              {/* <div className="form-group quantity-group">
                <label htmlFor="price">Quantity</label>
                <input
                  value={quantity}
                  onChange={(e) => {
                    setRetail(e.target.value);
                  }}
                  className="form-control quantity-inp"
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter quantity"
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                />
              </div>
            </form>
            <div className="btnadd">
              <button className="addbtn" type="submit" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
