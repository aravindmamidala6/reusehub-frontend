import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate("/login");
    } catch {
      setError("Registration failed. Try a different email.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-side">
        <h1>Join ReuseHub</h1>
        <p>Turn your unused things into cash, or find great deals near you.</p>
      </div>
      <div className="auth-form-wrap">
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Create account</h2>
          {error && <p className="error">{error}</p>}
          <input name="name" placeholder="Full name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password (min 6 characters)" onChange={handleChange} required minLength={6} />
          <button type="submit" className="btn-primary">Register</button>
          <p className="form-foot">Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}
