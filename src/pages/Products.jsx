
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { nanoid } from "nanoid";
import "./Product.css";

const services = [
  { id: nanoid(), slug: "rentpay", title: "CRED RentPay", desc: "Pay rent with your credit card." },
  { id: nanoid(), slug: "store", title: "CRED Store", desc: "Shop with CRED coins." },
  { id: nanoid(), slug: "cash", title: "CRED Cash", desc: "Instant personal loans at low interest." },
  { id: nanoid(), slug: "travel", title: "CRED Travel", desc: "Get travel perks and rewards." },
];

const Products = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <section className="products-page">

      <div className="scroll-backgrounds">
  <motion.div
    className="bg-card orange"
    initial={{ opacity: 0, rotate: -15, y: 50 }}
    whileInView={{ opacity: 0.3, rotate: 0, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  />
  <motion.div
    className="bg-card green"
    initial={{ opacity: 0, rotate: 10, y: 50 }}
    whileInView={{ opacity: 0.3, rotate: 0, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  />
  
  {/* <motion.div
    className="bg-card blue"
    initial={{ opacity: 0, rotate: 10, y: 50 }}
    whileInView={{ opacity: 0.3, rotate: 0, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  /> */}
    
</div>


      <h1 className="page-title">Explore Our Services</h1>
      <h2 className="subheading">Smarter ways to manage your finances & lifestyle</h2>
      <div className="product-grid">
        {services.map((service) => (
          <motion.div
            className="product-card"
            key={service.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            onClick={() => handleClick(service.slug)}
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.4 }}
            initial={{ opacity: 0, y: 60, rotate:-3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;






