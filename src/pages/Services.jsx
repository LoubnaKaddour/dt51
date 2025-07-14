// src/pages/Services.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Services() {
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

      .page-container {
        padding-top: 120px;
        padding-bottom: 80px;
        max-width: 1200px;
        margin: auto;
        padding-left: 30px;
        padding-right: 30px;
      }

      .section-title {
        font-size: 2.5rem;
        color: #FFD700;
        margin-bottom: 40px;
        text-align: center;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
      }

      .service-block {
        background-color: #1F2937;
        padding: 30px;
        margin-bottom: 40px;
        border-radius: 12px;
        border: 1px solid #374151;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transition: transform 0.3s;
      }

      .service-block:hover {
        transform: translateY(-5px);
        border-color: #FFD700;
      }

      .service-title {
        font-size: 1.8rem;
        margin-bottom: 15px;
        color: #FFD700;
      }

      .service-description {
        font-size: 1.1rem;
        color: #ddd;
        line-height: 1.8;
        text-align: justify;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const services = [
    {
      title: "خدمة تسجيل مكاتب نقل البضائع",
      description: "تتيح هذه الخدمة لأصحاب المكاتب تقديم طلبات تسجيل جديدة إلكترونياً مع رفع الوثائق الضرورية ومتابعة حالة الطلب في الزمن الحقيقي...",
    },
    {
      title: "منصة متابعة الشكاوى",
      description: "تُمكّن هذه المنصة المواطنين من إرسال شكاواهم المتعلقة بالنقل البري، حيث يتم تصنيف الشكاوى ومعالجتها وفق الأولويات...",
    },
    {
      title: "إدارة رخص سيارات الأجرة",
      description: "توفر المنصة نظاماً متقدماً لتجديد وتتبع رخص سيارات الأجرة، حيث يمكن للمستفيدين تقديم طلباتهم إلكترونياً...",
    },
    {
      title: "إحصائيات النقل الجهوي",
      description: "قسم خاص يعرض رسوماً بيانية محدثة شهرياً حول حركة النقل، توزيع التراخيص، نشاط المكاتب، وحجم الشكاوى...",
    },
    {
      title: "تخطيط المسارات والخطوط",
      description: "يساعد هذا القسم في عرض وتحديث خرائط خطوط النقل المعتمدة عبر الولاية، مما يسهل على المسافرين معرفة نقاط الانطلاق والوصول...",
    },
    {
      title: "مركز الوثائق والنماذج",
      description: "يوفر للمستخدمين إمكانية تحميل استمارات الطلبات المختلفة بصيغ رقمية قابلة للطباعة، مع دليل توجيهي حول كيفية تعبئتها...",
    },
  ];

  return (
    <div className="page-container">
      <div className="services-container" dir="rtl">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          خدمات منصة DT51
        </motion.h1>

        {services.map((service, index) => (
          <motion.div
            className="service-block"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
