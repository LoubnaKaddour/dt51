// src/pages/About.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
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
        background-color: #0F172A;
        color: white;
        direction: rtl;
      }
      .about-container {
        padding: 120px 40px 60px;
        max-width: 1200px;
        margin: auto;
      }
      .about-title {
        font-size: 3rem;
        color: #FFD700;
        margin-bottom: 40px;
        text-align: center;
        text-shadow: 2px 2px 5px black;
      }
      .about-section {
        margin-bottom: 50px;
        line-height: 1.8;
        font-size: 1.2rem;
        background: rgba(255, 255, 255, 0.02);
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.1);
      }
      .about-section h3 {
        color: #f6e05e;
        margin-bottom: 15px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const sections = [
    {
      title: "رؤية المشروع",
      text: "تهدف منصة DT51 إلى تحويل قطاع النقل في ولاية أولاد جلال من نظام تقليدي معتمد على الوثائق الورقية، إلى بيئة رقمية ذكية، موثوقة، وآمنة، تضمن الشفافية، السرعة، وسهولة المتابعة والتسيير."
    },
    {
      title: "أهداف المنصة",
      text: `1. تنظيم عمل مكاتب النقل (بضائع، مسافرين، سيارات الأجرة) بشكل رقمي.
2. تقليل التلاعبات في الرخص ومتابعة الأداء بدقة.
3. استقبال ومعالجة الشكاوى من المواطنين بسرعة.
4. إنشاء قاعدة بيانات رقمية موحدة لكل مكونات قطاع النقل.
5. توفير تقارير إحصائية حية لدعم اتخاذ القرار.`
    },
    {
      title: "أهمية المشروع",
      text: "يمثل قطاع النقل شرياناً حيوياً في التنمية الاقتصادية والاجتماعية. النظام الرقمي يضمن تقليص الهدر في الوقت والموارد، ويعزز من كفاءة الأداء، مما ينعكس إيجاباً على المواطن، المستثمر، والإدارة العمومية."
    },
    {
      title: "المميزات التقنية",
      text: "المنصة مبنية باستخدام أحدث تقنيات الويب (React.js + Node.js + MongoDB)، مع حماية عالية للبيانات، تصميم متجاوب، واجهات أنيقة وتحركات سلسة بواسطة framer-motion."
    },
    {
      title: "تأثير المنصة على الواقع المحلي",
      text: `- تحسين جودة الخدمة العمومية
- تشجيع الاستثمار المحلي
- تقليص البيروقراطية في الحصول على الوثائق
- تسهيل الوصول إلى المعلومات الحقيقية لكل الأطراف`
    },
    {
      title: "توسعات مستقبلية",
      text: "ستتم إضافة وحدات أخرى كالنقل المدرسي، النقل الريفي، الخرائط الجغرافية للمسارات، تطبيقات الهاتف المحمول، ونظام تنبيه بالرسائل القصيرة SMS في نسخ قادمة."
    },
    {
      title: "خاتمة",
      text: "مشروع DT51 ليس فقط منصة رقمية، بل هو خطوة نحو الحوكمة الرقمية المحلية، وخدمة المواطن بكرامة وفعالية. نحن نؤمن بأن الرقمنة هي الطريق نحو جزائر جديدة، عصرية ومتقدمة."
    }
  ];

  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        حول المشروع
      </motion.h1>

      {sections.map((section, index) => (
        <motion.div
          className="about-section"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h3>{section.title}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{section.text}</p>
        </motion.div>
      ))}
      <footer className="footer">
        &copy; 2025 Direction des Transports - Ouled Djellal (dt51)
      </footer>
    </div>
  );
}
