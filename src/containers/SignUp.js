import React from "react";
import { Link, useHistory} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = (props) => {
  const { setUser} = props;
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://btvr-marvel-backend.herokuapp.com/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
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
    <div className="signup-container">
      <div className="signup-card">
      
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
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

          <div className="signup-area">
            <input type="submit" value="SIGNUP" className="btn-red" />
          </div>

          <div>
            <Link to="/login">You have already an account ? Click here!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
