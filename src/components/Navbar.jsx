import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease:"anticipate" }}
    >
      <div className="navbar__logo">CRED</div>
      <ul className="navbar__links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/auth">Login</NavLink></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
