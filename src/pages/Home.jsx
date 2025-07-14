import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n"; // تأكد أنك استدعيت i18n.js

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      body {
        overflow-x: hidden;
        background-color: #0F172A;
        direction: rtl;
      }

      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 60px;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        backdrop-filter: blur(8px);
      }

      .navbar .title {
        font-weight: bold;
        color: #FFD700;
        font-size: 1.3rem;
      }

      .navbar .links {
        display: flex;
        gap: 20px;
      }

      .navbar a {
        color: white;
        text-decoration: none;
        transition: 0.3s;
        font-weight: bold;
      }

      .navbar a:hover {
        color: #FFD700;
      }

      .hero {
        background-image: url("/images/hero.jpg");
        background-size: cover;
        background-position: center;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding-top: 100px;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(10, 38, 71, 0.5);
        backdrop-filter: blur(3px);
        z-index: 1;
      }

      .hero > *:not(.overlay) {
        position: relative;
        z-index: 2;
      }

      .hero h1 {
        font-size: 3.5rem;
        color: #FFD700;
        text-shadow: 2px 2px 5px black;
      }

      .hero p {
        font-size: 1.5rem;
        max-width: 700px;
        margin: 20px 0;
        color: #f0f0f0;
      }

      .cta-button {
        background-color: #FFD700;
        color: #1E293B;
        padding: 15px 30px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: 0.3s;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      }

      .cta-button:hover {
        background-color: #f6e05e;
      }

      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        padding: 80px 60px;
        background-color: #111827;
      }

      .feature-card {
        background-color: #1F2937;
        border: 1px solid #374151;
        border-radius: 12px;
        padding: 30px;
        text-align: center;
        transition: 0.3s;
      }

      .feature-card:hover {
        border-color: #FFD700;
        transform: scale(1.03);
      }

      .feature-card h3 {
        color: #FFD700;
        margin-bottom: 10px;
      }

      .feature-card p {
        color: #ddd;
      }

      .footer {
        padding: 20px;
        background-color: #0F172A;
        text-align: center;
        font-size: 0.9rem;
        color: #aaa;
        border-top: 1px solid #374151;
      }

      .lang-switcher {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 15px;
      }

      .lang-switcher button {
        background: none;
        border: 1px solid #FFD700;
        color: #FFD700;
        padding: 6px 15px;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.3s;
      }

      .lang-switcher button:hover {
        background-color: #FFD700;
        color: #0F172A;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <motion.div className="title" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          {t('login')}
        </motion.div>

        <motion.div className="links" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <Link to="/">{t('الرئيسية')}</Link>
          <Link to="/login">{t('login')}</Link>
          <Link to="/about">{t('about')}</Link>
          <Link to="/services">{t('services')}</Link>
          <Link to="/contact">{t('contact')}</Link>
          <Link to="/smart">خدمات ذكية</Link>
          <Link to="/wilaya">مصالح الولاية</Link>
          <Link to="/ouled">أولاد جلال</Link>
        </motion.div>
      </nav>

      <section className="hero">
        <div className="overlay" />
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {t('welcome')}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          منصة رقمية لتنظيم خدمات النقل في أولاد جلال: البضائع، المسافرين، سيارات الأجرة.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <Link to="/login" className="cta-button">
            {t('login')} <FaArrowRight />
          </Link>
        </motion.div>
      </section>

      <section className="features">
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <h3>نقل البضائع</h3>
          <p>إدارة وتتبع مكاتب نقل البضائع وتراخيصها.</p>
        </motion.div>

        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <h3>نقل المسافرين</h3>
          <p>تنظيم الخطوط ومتابعة الشكاوى وتنظيم الرخص.</p>
        </motion.div>

        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <h3>سيارات الأجرة</h3>
          <p>توزيع الرخص وتتبع الأنشطة والتعاملات.</p>
        </motion.div>
      </section>

      <div className="lang-switcher">
        <button onClick={() => i18n.changeLanguage('ar')}>العربية</button>
        <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
      </div>

      <footer className="footer">
        &copy; 2025 Direction des Transports - Ouled Djellal (dt51)
      </footer>
    </div>
  );
}
