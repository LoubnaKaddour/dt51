// src/pages/SmartServices.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaChartBar, FaTools, FaUserShield, FaInbox, FaLaptopCode } from "react-icons/fa";

export default function SmartServices() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-color: #0F172A;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
        margin: 0;
        padding: 0;
      }

      .services-container {
        padding-top: 120px;
        padding-bottom: 60px;
        max-width: 1200px;
        margin: auto;
        padding-left: 30px;
        padding-right: 30px;
      }

      .services-title {
        text-align: center;
        font-size: 2.8rem;
        color: #FFD700;
        margin-bottom: 40px;
        text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 30px;
      }

      .service-card {
        background-color: #1F2937;
        border: 1px solid #374151;
        border-radius: 14px;
        padding: 30px;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transition: 0.3s;
      }

      .service-card:hover {
        transform: scale(1.05);
        border-color: #FFD700;
      }

      .service-icon {
        font-size: 2.5rem;
        color: #FFD700;
        margin-bottom: 15px;
      }

      .service-title {
        font-size: 1.4rem;
        color: #f6e05e;
        margin-bottom: 10px;
      }

      .service-desc {
        font-size: 1rem;
        color: #ccc;
        margin-bottom: 15px;
      }

      .action-button {
        padding: 10px 20px;
        background-color: #FFD700;
        color: #1F2937;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }

      .action-button:hover {
        background-color: #f6e05e;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const services = [
    {
      icon: <FaInbox className="service-icon" />,
      title: "إرسال الشكاوى",
      desc: "أرسل شكواك إلكترونياً وتابع حالتها بسهولة.",
    },
    {
      icon: <FaFileAlt className="service-icon" />,
      title: "استخراج وثائق",
      desc: "طلب وثائق رسمية من مديرية النقل بشكل رقمي.",
    },
    {
      icon: <FaChartBar className="service-icon" />,
      title: "إحصائيات حية",
      desc: "عرض بيانات وإحصائيات النقل لمتخذي القرار.",
    },
    {
      icon: <FaTools className="service-icon" />,
      title: "إدارة المكاتب",
      desc: "واجهة خاصة لموظفي المكاتب لتسيير الطلبات.",
    },
    {
      icon: <FaUserShield className="service-icon" />,
      title: "نظام مراقبة",
      desc: "رصد التلاعبات ومتابعة الأداء بدقة.",
    },
    {
      icon: <FaLaptopCode className="service-icon" />,
      title: "تكامل رقمي",
      desc: "الربط مع أنظمة الإدارة والبلديات رقمياً.",
    }
  ];

  return (
    <div className="services-container" dir="rtl">
      <motion.h1
        className="services-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        خدمات ذكية
      </motion.h1>

      <div className="card-grid">
        {services.map((srv, i) => (
          <motion.div
            className="service-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {srv.icon}
            <div className="service-title">{srv.title}</div>
            <div className="service-desc">{srv.desc}</div>
            <button className="action-button">ابدأ</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
