/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [, setCookies] = useCookies(["access_token"]);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://ecommerce-back-end-orpin.vercel.app/api/admins/login",
        {
          name,
          password,
        }
      );
      setCookies("access_token", data);
      console.log(data);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};
const Form = ({ name, setName, password, setPassword, label, onSubmit }) => {
  return (
    <div className="auth-body">
      <div className="auth-container">
        <form onSubmit={onSubmit}>
          <h2 className="heading">LOGIN</h2>
          <div className="form-group">
            <label htmlFor="name" className="reg-text">
              Name
            </label>
            <input
              className="reginp"
              type="text"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="reg-text">
              Password
            </label>
            <input
              className="reginp"
              type="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>
          <button type="submit" className="regbtn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
