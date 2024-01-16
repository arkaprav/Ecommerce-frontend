/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Search Bar/SearchBar";

import Dropzone from "../../components/Dropzone/Dropzone";

function AddProducts() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState();
  // const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
  };

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   // setImage(selectedImage);

  //   // Image preview
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImagePreview(reader.result);
  //     setImage(reader.result.split(",")[1]);
  //   };
  //   if (selectedImage) {
  //     reader.readAsDataURL(selectedImage);
  //   } else {
  //     setImagePreview(null);
  //   }
  // };

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
                    e.target.value;
                  }}
                  className="form-control product-inp"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group buying-group">
                <label htmlFor="price"> Buying Price</label>
                <input
                  value={price}
                  onChange={(e) => {
                    e.target.value;
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
                  value={price}
                  onChange={(e) => {
                    e.target.value;
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
                    e.target.value;
                  }}
                  value={category}
                  className="form-control category-inp"
                  type="number"
                  id="category"
                  name="category"
                  placeholder="Enter Category"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  onChange={(e) => {
                    e.target.value;
                  }}
                  value={description}
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  onChange={}
                  className="form-control"
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div> */}
              {/* {imagePreview && (
                <div className="image-preview-container">
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="image-preview"
                  />
                </div>
              )} */}
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
