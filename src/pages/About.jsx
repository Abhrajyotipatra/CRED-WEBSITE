


import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaStore, FaRupeeSign, FaCrown } from "react-icons/fa";
import "./About.css";
import PageWrapper from "../components/pageWrapper";

const timelineSteps = [
  {
    year: "2018",
    text: "CRED is founded by Kunal Shah with a mission to reward financially responsible users.",
    tooltip: "The birth of CRED.",
    icon: <FaRocket />,
  },
  {
    year: "2019",
    text: "Launches RentPay & begins brand collaborations through CRED Store.",
    tooltip: "Product-market fit begins.",
    icon: <FaStore />,
  },
  {
    year: "2020",
    text: "Introduces CRED Cash and expands loan offerings.",
    tooltip: "Fintech evolution begins.",
    icon: <FaRupeeSign />,
  },
  {
    year: "2022",
    text: "Becomes a household name for premium credit users across India.",
    tooltip: "India’s coolest credit club.",
    icon: <FaCrown />,
  },
];


const testimonials = [
  { name: "Ankur Warikoo", text: "CRED is setting a gold standard for financial services." },
  { name: "Sequoia Capital", text: "One of the most trusted fintech brands in India." },
];

const About = () => {
  return (
    <section className="about-page">
      <h1 className="about-title">Our Journey</h1>

     
<div className="timeline">
  <div className="timeline-line-fill" />
  {timelineSteps.map((step, index) => (
    <motion.div
      className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-dot" data-tooltip={step.tooltip}>
        {step.icon}
      </div>
      <motion.div
        className="timeline-content"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <span className="timeline-year">{step.year}</span>
        <p>{step.text}</p>
      </motion.div>
    </motion.div>
  ))}
</div>


      <h2 className="testimonial-heading">Words About Us</h2>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <p>"{item.text}"</p>
            <h4>– {item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
