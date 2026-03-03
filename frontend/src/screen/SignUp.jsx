import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//eURCK6ByrpFBaKB6

function SignUp() {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://mealmapbackend.onrender.com/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.location
                })
            });

            const json = await response.json();
            console.log(json);

            if (json.success) {
                alert("User created successfully");


            } else {
                alert("Failed to create user");
            }

        } catch (error) {
            console.error("Signup Error:", error);
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
                background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
            }}
        >
            <div
                className="card shadow-lg p-5"
                style={{
                    maxWidth: "480px",
                    width: "100%",
                    borderRadius: "20px",
                    //   background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <h2 className="text-center  fw-bold">Sign Up</h2>
                <p className="text-center">
                    Create an account to get started
                </p>

                <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="mb-2">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input
                            type="text"
                            className="form-control custom-input "
                            name="name"
                            value={credentials.name}
                            style={{ background: "rgba(255, 255, 255, 0.95)", color: "black" }}
                            onChange={onchange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-2">
                        <label className="form-label fw-semibold">Email address</label>
                        <input
                            type="email"
                            className="form-control custom-input"
                            name="email"
                            value={credentials.email}
                            onChange={onchange}
                            style={{ background: "rgba(255, 255, 255, 0.95)", color: "black" }}
                            placeholder="Enter your email"
                            required
                        />
                        <div className="form-text">We'll never share your email.</div>
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control custom-input"
                            name="password"
                            value={credentials.password}
                            onChange={onchange}
                            style={{ background: "rgba(255, 255, 255, 0.95)", color: "black" }}
                            placeholder="Create a password"
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label fw-semibold">Location</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            name="location"
                            value={credentials.location}
                            onChange={onchange}
                            style={{ background: "rgba(255, 255, 255, 0.95)", color: "black" }}
                            placeholder="Enter your location"
                        />
                    </div>


                    <button type="submit" className="btn custom-btn w-100 fw-semibold py-2">
                        Sign Up
                    </button>


                    <div className="text-center my-2 text-muted">or</div>

                    {/* Link to Login */}
                    <div className="text-center">
                        <span>Already have an account? </span>
                        <Link
                            className="btn btn-outline-dark btn-sm rounded-pill px-2 ms-1"
                            to="/login"
                            style={{ background: "rgba(255, 255, 255, 0.95)", color: "black" }}
                        >
                            Login
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
          border-color: #43cea2;
          box-shadow: 0 0 8px rgba(67, 206, 162, 0.4);
        }
        .custom-btn {
          background: linear-gradient(90deg, #43cea2, #185a9d);
          color: white;
          border-radius: 50px;
          border: none;
          transition: all 0.3s ease;
        }
        .custom-btn:hover {
          background: linear-gradient(90deg, #185a9d, #43cea2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(24, 90, 157, 0.4);
        }
      `}</style>
        </div>

    );
}

export default SignUp;
