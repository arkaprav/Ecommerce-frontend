/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Search Bar/SearchBar";

function AddProducts() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    // setImage(selectedImage);

    // Image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(reader.result.split(",")[1]);
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="Container">
      <SearchBar />
      <Sidebar opt={3} />
      <h1 className="heading">Add Product</h1>
      <div className="addproduct">
        <form>
          <div className="form-group">
            <label htmlFor="name">Product Title</label>
            <input
              value={title}
              onChange={(e) => {
                e.target.value;
              }}
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price"> Retail Price</label>
            <input
              value={price}
              onChange={(e) => {
                e.target.value;
              }}
              className="form-control"
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Selling Price</label>
            <input
              value={price}
              onChange={(e) => {
                e.target.value;
              }}
              className="form-control"
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              onChange={(e) => {
                e.target.value;
              }}
              value={category}
              className="form-control"
              type="number"
              id="category"
              name="category"
              placeholder="Enter Category"
            />
          </div>
          {/* <div className="form-group">
          <label htmlFor="category">Category</label>
          <select className="form-control" id="category" name="category">
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
          </select>
        </div> */}
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
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              onChange={handleImageChange}
              className="form-control"
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>
          {imagePreview && (
            <div className="image-preview-container">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="image-preview"
              />
            </div>
          )}

          <div className="btnadd">
            <button className="addbtn" type="submit" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
