
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay } from "swiper/modules";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useInView } from 'react-intersection-observer';

import "swiper/css";
import "./home.css";

const features = [
  { title: "CRED RentPay",
     description: "Pay rent using your credit card and earn rewards.",
     icon: "/assets/features/rentpay.jpg",
  },
  { title: "CRED Store", 
    description: "Use your CRED coins to shop top brands.", 
    icon: "/assets/features/store.jpg",
 },
  { title: "CRED Cash", 
    description: "Instant credit line at low interest.",
    icon: "/assets/features/cash.jpg",
   },
  { title: "CRED Travel",
     description: "Travel smart with exclusive offers.",
     icon: "/assets/features/travel.jpg",

     },
  { title: "CRED Protect", 
    description: "Smart bill reminders & credit protection.",
    icon: "/assets/features/protect.png",
 },
];

const brandLogos = [
  "/assets/Swiggy.png",
  "/assets/zerodha1.svg",
  "/assets/bookmyshow.svg",
  "/assets/bmw.svg",
  "/assets/nykaa.svg",
  "/assets/goibibo.png",
  "/assets/cleartax.svg",
  "/assets/curefit.webp",
];


const steps = [
  {
    title: "Download the CRED App to Get Started",
   subtitle: "Install from the Play Store or App Store to begin your credit journey.",
    icon: "/assets/howitworks/download.svg", 
  },
  {
    title: "Securely Register with Your Credit Card and Verify Identity",
    subtitle: "Securely link your credit card to unlock full CRED features.",
    icon: "/assets/howitworks/credit-card.jpg",
  },
  {
    title: "Earn Cashback & Rewards Instantly While Paying Bills",
    subtitle: "Get instant cashback and points each time you pay a bill.",
    icon: "/assets/howitworks/rewards.jpg",
  }
];

const testimonials = [
  { name: "Ayush, Delhi", text: "CRED helped me pay rent and earn cashback—amazing!" },
  { name: "Ankur Warikoo", text: "CRED is setting a gold standard for financial services." },
  { name: "Sequoia Capital", text: "One of the most trusted fintech brands in India." },
  { name: "Sneha, Mumbai", text: "CRED rewards are actually valuable!" },
  { name: "Rahul, Bangalore", text: "Bill payments have never been this smooth." },
  { name: "Divya, Pune", text: "CRED coins got me free vouchers every month." },
];

const Home = () => {

  const navigate = useNavigate();
  const handelJoinNow =()=>{
    navigate("/auth");
  }
  return (
    <div className="home">
      {/* HERO SECTION with Swiper */}

      <section className="hero">
  <div className="hero-left">
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Experience Credit Like Never Before
    </motion.h1>
    <p>Welcome to the next generation of financial freedom.</p>
    <button className="cta-button" onClick={handelJoinNow}>Join Now</button>
  </div>

  <div className="hero-right">
    <Swiper
    modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={10}
    >
      {["/assets/Slide1.jpg", "/assets/Slide2.jpg", "/assets/Slide3.jpg"].map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`Slide ${i}`} className="hero-slide-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      {/* MARQUEE SECTION */}

      <div className="marquee-wrapper">
  <Marquee speed={40} gradient={false}>
    {brandLogos.map((src, i) => (
      <img key={i} src={src} alt={`brand-${i}`} className="brand-logo" />
    ))}
  </Marquee>
  <div className="fade-left" />
  <div className="fade-right" />
</div>


      {/* FEATURES SECTION */}
      <section className="features">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img src={f.icon} alt={f.title} className="feature-icon" />
            <h2>{f.title}</h2>
            <p>{f.description}</p>
          </motion.div>
        ))}
      </section>

{/* HOW IT WORKS SECTION */}
<section className="how-it-works scroll-section">
  <h2>How It Works</h2>
  <div className="scroll-cards">
  {steps.map((step, i) => (
    <motion.div
      key={i}
      className="scroll-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.3 }}
      viewport={{ once: true }}
    >
      <div className="step-content">
        {/* <div className="text">
          <h3>Step {i + 1}</h3>
          <p>{step.sub}</p>
        </div> */}
        <div className="text">
  <h3>Step {i + 1}: {step.title}</h3>
  <p>{step.subtitle}</p>
</div>

        <div className="image">
          <img src={step.icon} alt={`step-${i + 1}`} />
        </div>
      </div>
    </motion.div>
  ))}
</div>

</section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <Swiper
          loop
  autoplay={{ delay: 2000 }}
  modules={[Autoplay]}
  spaceBetween={30}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    // 1280: { slidesPerView: 4 },
  }}
>
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div className="testimonial-card">
                <p>"{t.text}"</p>
                <strong>– {t.name}</strong>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>


      {/* TRUST SECTION (Unchanged) */}
      <section className="trust-section">
        <h2>Trusted by over 15 million users</h2>
        <div className="trust-numbers">
          <div><motion.strong
          whileHover={{ scale: 1.1 }}
          >4.8★</motion.strong> App Rating</div>
          <div><motion.strong
          whileHover={{ scale: 1.1 }}
          >₹300Cr+</motion.strong> Rewards Given</div>
          <div><motion.strong
          whileHover={{ scale: 1.1 }}
          >500+</motion.strong> Brand Partners</div>
        </div>
      </section>

      {/* FOOTER */}
    <footer className="footer">
  <div className="footer-top">
    <div className="footer-brand">
      <h2>CRED</h2>
      <p>Your trusted financial partner for payments, rewards, and more.</p>
    </div>
    <div className="footer-links">
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li><a href="/help">Help Center</a></li>
          <li><a href="/auth">Login</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-social">
      <h4>Follow Us</h4>
       <div className="social-icons">
          <a href="www.facbook.com"><FaFacebook /></a>
          <a href="www.twitter.com"><FaTwitter /></a>
          <a href="www.instagram.com"><FaInstagram /></a>
          <a href="www.linkedin.com"><FaLinkedin /></a>
        </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 CRED Design Project. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;
