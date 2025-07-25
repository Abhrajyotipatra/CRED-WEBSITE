import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import './ProductDetails.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = services.find((service) => service.slug === slug);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found 😢</h2>
        <button onClick={() => navigate('/products')}>Go Back</button>
      </div>
    );
  }

  return (
    <motion.section
      className="product-detail"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-content">
    <div className="product-left">
      <img src={product.icon} alt={product.title} className="product-icon" />
      <h1>{product.title}</h1>
    </div>
    <div className="product-right">
      <p className="desc">{product.desc}</p>
      <p className="details">{product.details}</p>
    </div>
  </div>
  <div className="back-btn">
    <button onClick={() => navigate('/products')}>← Back to Products</button>
  </div>
    </motion.section>
  );
};

export default ProductDetail;
