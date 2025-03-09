import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Firebase'; // Ensure 'Config' matches the actual folder name

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    


    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent form from reloading

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password.trim());
            console.log("User registered:", userCredential.user);
            window.alert("Signup successful! Please log in.");
            navigate("/login"); // Redirect to login after successful signup
        } catch (error) {
            console.error("Signup error:", error.code, error.message);
            window.alert("Signup failed: " + error.message);
        }
    };

    return (
        <main className="main-container">
            <section className="form-section">
                <div className="form-container">
                    <h1>FocusApp</h1>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>

                        <button type="submit">Sign Up</button>
                    </form>

                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login">Sign in</NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Signup;
