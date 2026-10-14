import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">R</span>
          <span>Reuse<b>Hub</b></span>
        </Link>
        <nav className="nav-links">
          {isLoggedIn ? (
            <>
              <Link to="/my-ads">My Ads</Link>
              <button className="btn-ghost" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          <Link to="/post-ad" className="btn-sell">+ SELL</Link>
        </nav>
      </div>
    </header>
  );
}
