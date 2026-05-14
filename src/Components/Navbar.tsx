import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">H</div>
        <div>
          <span className="brand-title">Hamilton Dining</span>
          <span className="brand-subtitle">College Menu Portal</span>
        </div>
      </div>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/SignUp">Sign Up</NavLink>
        <NavLink to="/Favorites">Favorites</NavLink>
      </div>
    </nav>
  );
}