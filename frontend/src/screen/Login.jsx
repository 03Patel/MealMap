// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong!");
    }
  };

  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "20px",
        //   background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <h2 className="text-center mb-3 fw-bold">Login</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control custom-input"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onchange}
              placeholder="Enter your email"
              style={{  background: "rgba(255, 255, 255, 0.95)", color:"black"}}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control custom-input"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onchange}
               style={{  background: "rgba(255, 255, 255, 0.95)",}}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn custom-btn w-100 fw-semibold py-2">
            Login
          </button>

          {/* Divider */}
          <div className="text-center my-3 text-muted">or</div>

          {/* Sign Up */}
          <div className="text-center">
            <span>Don’t have an account? </span>
            <Link className="btn btn-outline-dark btn-sm rounded-pill px-3 ms-1"
             style={{  background: "rgba(255, 255, 255, 0.95)",}}
            to="/createuser">
              Sign Up
            </Link>
          </div>
        </form>
      </div>

      {/* Extra CSS */}
      <style>{`
        .custom-input {
          border-radius: 50px;
          padding: 12px 18px;
          border: 1px solid #ddd;
          transition: all 0.3s ease;
        }
        .custom-input:focus {
          border-color: #6a11cb;
          box-shadow: 0 0 8px rgba(106, 17, 203, 0.3);
        }
        .custom-btn {
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          color: white;
          border-radius: 50px;
          border: none;
          transition: all 0.3s ease;
        }
        .custom-btn:hover {
          background: linear-gradient(90deg, #2575fc, #6a11cb);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 117, 252, 0.4);
        }
      `}</style>
    </div>
  );
}

export default Login;
