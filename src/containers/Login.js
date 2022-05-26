import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const { setUser } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
   event.preventDefault();

    try{
      const response = await axios.post(
        "https://btvr-marvel-backend.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
       // history.push("/");

        const token = response.data.token;
        setUser(token);
        history.push("/");
      } else {
        alert("An error occured ");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/*<div><h2>LOGIN</h2></div>*/}
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="login-area">
            <input type="submit" value="LOGIN" className="btn-red" />
          </div>

          <div>
            <Link to="/signup">You don't have an account ? Click here!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
