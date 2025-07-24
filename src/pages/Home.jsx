
// import React from "react";
// import { motion } from "framer-motion";
// import "./home.css";

// const headingWords = "Experience Credit Like Never Before".split(" ");

// const headingContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };

// const wordAnimation = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const features = [
//   {
//     title: "CRED RentPay",
//     description: "Pay monthly rent using credit card & earn rewards.",
//   },
//   {
//     title: "CRED Store",
//     description: "Shop exclusive brands using CRED coins.",
//   },
//   {
//     title: "CRED Cash",
//     description: "Instant personal loans with low interest rates.",
//   },
//   {
//     title: "CRED Travel",
//     description: "Earn points & offers on flight & hotel bookings.",
//   },
// ];

// const Home = () => {
//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <section className="hero">
//         {/* Glowing background + dotted pattern */}
//         <div className="background-lines" />

//         <div className="hero-content">
//           <motion.h1
//             className="hero-title"
//             variants={headingContainer}
//             initial="hidden"
//             animate="visible"
//           >
//             {headingWords.map((word, index) => (
//               <motion.span
//                 key={index}
//                 variants={wordAnimation}
//                 style={{ display: "inline-block", marginRight: "8px" }}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Welcome to the next generation of financial freedom.
//           </motion.p>

//           {/* Scroll down arrow */}
//           <motion.div
//             className="scroll-indicator"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             ↓
//           </motion.div>
//         </div>

//         {/* Hero image */}
//         <motion.img
//           className="hero-img"
//           src="/assets/hero-cred.png"
//           alt="CRED illustration"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         />
//       </section>

//       {/* Features */}
//       <section className="features">
//         {features.map((feature, index) => (
//           <motion.div
//             className="feature-card"
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <h2>{feature.title}</h2>
//             <p>{feature.description}</p>
//           </motion.div>
//         ))}
//       </section>

//       {/* CTA */}
//       <section className="cta">
//         <motion.button
//           whileHover={{ scale: 1.1, backgroundColor: "#30e3ca" }}
//           transition={{ duration: 0.3 }}
//         >
//           Join CRED
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import { motion } from "framer-motion";
import "./home.css";
// import heroImage from "../assets/hero-cred.png"; 

const headingWords = "Experience Credit Like Never Before".split(" ");

const headingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "CRED RentPay",
    description: "Pay monthly rent using credit card & earn rewards.",
  },
  {
    title: "CRED Store",
    description: "Shop exclusive brands using CRED coins.",
  },
  {
    title: "CRED Cash",
    description: "Instant personal loans with low interest rates.",
  },
  {
    title: "CRED Travel",
    description: "Earn points & offers on flight & hotel bookings.",
  },
];

const testimonials = [
  { name: "Ankur Warikoo", text: "CRED is setting a gold standard for financial services." },
  { name: "Sequoia Capital", text: "One of the most trusted fintech brands in India." },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="background-lines" />
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            variants={headingContainer}
            initial="hidden"
            animate="visible"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to the next generation of financial freedom.
          </motion.p>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>

        <motion.img
          className="hero-img"
          src="/assets/hero-cred.png"
          alt="CRED Hero"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="features">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div>
            <h3>Step 1</h3>
            <p>Download the CRED app</p>
          </div>
          <div>
            <h3>Step 2</h3>
            <p>Register with your credit card</p>
          </div>
          <div>
            <h3>Step 3</h3>
            <p>Earn rewards for on-time bill payments</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>"CRED helped me pay rent and earn cashback—amazing!"</p>
          <strong>– Ayush, Delhi</strong>
          
        </motion.div>
      </section>
    
     {/* app-cta and newsletter in box div  */}
     {/* <div className="box">    
      <section className="app-cta">
        <h2>Start Your Rewarding Credit Journey Today</h2>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#30e3ca" }}
          transition={{ duration: 0.3 }}
        >
          Download the App
        </motion.button>
      </section>

      <section className="newsletter">
        <h2>Get CRED updates in your inbox</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
</div> */}

<section className="trust-section">
        <h2>Trusted by over 15 million users</h2>
        <div className="trust-numbers">
          <div><strong>4.8★</strong> App Rating</div>
          <div><strong>₹300Cr+</strong> Rewards Given</div>
          <div><strong>500+</strong> Brand Partners</div>
        </div>
      </section>
      
      <footer>
        <p>© 2025 CRED Design Hackathon Project</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/auth">Login</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
