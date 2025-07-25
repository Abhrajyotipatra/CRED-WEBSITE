import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className={`navbar ${menuOpen ? "open" : ""}`}
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "anticipate" }}
    >
      <div className="navbar__logo">CRED</div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className="navbar__links">
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/auth" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
