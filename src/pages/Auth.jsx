import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease:'easeInOut' }}
      >
        <h2>{isLogin ? 'Welcome Back 👋' : 'Create Account 🚀'}</h2>

        <form>
            <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Signup" : 'Already have an account? Login'}
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
