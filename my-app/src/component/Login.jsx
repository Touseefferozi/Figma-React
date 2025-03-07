import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password.trim());
            const loggedInUser = userCredential.user;

            // Store necessary user details in localStorage
            localStorage.setItem("user", JSON.stringify({
                uid: loggedInUser.uid,
                email: loggedInUser.email
            }));

            console.log("User logged in:", loggedInUser);
            window.alert("Login successful!");

            // Redirect to Home.jsx
            navigate("/home");
        } catch (error) {
            console.error("Login error:", error.code, error.message);
            window.alert("Login failed: " + error.message);
        }
    };

    return (
        <main className="main-container">
            <section className="form-section">
                <div className="form-container">
                    <h1>FocusApp</h1>
                    <form className="form" onSubmit={onLogin}>
                        <div className="form-group">
                            <label htmlFor="email-address">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>

                        <button type="submit">Login</button>
                    </form>

                    <p className="text-sm text-white text-center">
                        No account yet? <NavLink to="/signup">Sign up</NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;
