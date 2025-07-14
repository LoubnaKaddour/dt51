import { useEffect } from "react";
import { motion } from "framer-motion";

export default function WilayaServices() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-color: #0F172A;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        direction: rtl;
      }
      .page-container {
        max-width: 1100px;
        margin: auto;
        padding: 120px 30px 80px;
      }
      .page-title {
        font-size: 2.8rem;
        color: #FFD700;
        margin-bottom: 50px;
        text-align: center;
        text-shadow: 1px 1px 5px black;
      }
      .section {
        margin-bottom: 50px;
        padding: 25px;
        background-color: #1F2937;
        border: 1px solid #374151;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      }
      .section h2 {
        color: #f6e05e;
        margin-bottom: 15px;
        font-size: 1.5rem;
      }
      .section p, .section ul {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #ddd;
      }
      .section ul {
        padding-right: 20px;
        list-style-type: square;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="page-container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        مصالح الولاية
      </motion.h1>

      <motion.div className="section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h2>الولاية والوالي</h2>
        <p>
          تعتبر ولاية أولاد جلال من الولايات الحديثة، وتحت إشراف السيد الوالي، تُسهر الإدارة الولائية على تنفيذ السياسات العمومية وضمان التنسيق بين مختلف القطاعات.
        </p>
      </motion.div>

      <motion.div className="section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <h2>الدوائر والبلديات</h2>
        <ul>
          <li>دائرة أولاد جلال</li>
          <li>دائرة سيدي خالد</li>
          <li>بلدية أولاد جلال</li>
          <li>بلدية سيدي خالد</li>
          <li>بلدية الشايف</li>
        </ul>
      </motion.div>

      <motion.div className="section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
        <h2>صناديق الضمان الاجتماعي</h2>
        <ul>
          <li>صندوق CNAS – التأمينات الاجتماعية للعمال الأجراء</li>
          <li>صندوق CASNOS – للعمال غير الأجراء</li>
          <li>صندوق الضمان الاجتماعي للتقاعد CNR</li>
        </ul>
      </motion.div>

      <motion.div className="section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
        <h2>الإجراءات الإدارية الشائعة</h2>
        <ul>
          <li>طلب رخصة نشاط نقل</li>
          <li>تجديد بطاقة استغلال</li>
          <li>إيداع شكوى ضد مكتب أو ناقل</li>
          <li>طلب تصريح استثنائي للنقل</li>
          <li>طلب معلومات إدارية</li>
        </ul>
      </motion.div>
    </div>
  );
}
