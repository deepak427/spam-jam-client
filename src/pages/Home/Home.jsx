import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import { useState, useEffect } from "react";
import "./Home.css";
import * as api from "../../api"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = JSON.parse(localStorage.getItem("Profile-Spam-Jam"));

  const navigate = useNavigate();

  useEffect(() => {
    user && navigate(`/user/${user.result[0].email}`)
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    const { data } = await api.logIn({ email, password})

    localStorage.setItem('Profile-Spam-Jam', JSON.stringify(data))

    navigate(`/user/${data.result[0].email}`)
  };

  return (
    <div className="auth-main">
      <div className="auth-container">
        {isLogin ? (
          <>
            <h1>Login</h1>
            <p>Welcome! Login to access your account.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                <h4>Email</h4>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="password">
                <h4>Password</h4>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <button type="submit" className="login-btn">
                Log in
              </button>
            </form>
            <p>
              Did't have account?{" "}
              <button
                onClick={() => {
                  user ? alert("Please log out first") : setIsLogin(!isLogin);
                }}
                type="button"
                className="switch-btn"
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <SignUp isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default Home;
