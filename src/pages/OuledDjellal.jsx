import { useEffect } from "react";
import { motion } from "framer-motion";

export default function OuledDjellal() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body { background-color: #0F172A; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin:0; padding:0; direction: rtl; }
      .page { max-width:1100px; margin:auto; padding:120px 30px 80px; }
      .title { text-align:center; font-size:2.8rem; color:#FFD700; margin-bottom:50px; text-shadow:1px 1px 5px black; }
      .section { background:#1F2937; border:1px solid #374151; border-radius:12px; padding:25px; margin-bottom:40px; box-shadow:0 4px 20px rgba(0,0,0,0.3); }
      .section h2 { color:#f6e05e; margin-bottom:15px; font-size:1.5rem; }
      .section p, .section ul { font-size:1.1rem; line-height:1.8; color:#ddd; }
      .section ul { list-style-type: disc; padding-right:20px; }
      .stats-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; }
      .stat-card { background:#111827; padding:20px; border-radius:10px; text-align:center; }
      .stat-card h3 { font-size:1.6rem; color:#FFD700; margin-bottom:10px; }
      .stat-card p { font-size:1.2rem; color:#fff; }
      .map-container { position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; }
      .map-container iframe { position:absolute; top:0; left:0; width:100%; height:100%; border:0; }
    `;
    document.head.appendChild(style);
  }, []);

  const stats = [
    { label: "المساحة (كم²)", value: "5,000" },
    { label: "عدد الدوائر", value: "2" },
    { label: "عدد البلديات", value: "4" },
    { label: "عدد السكان", value: "150,000 (2023)" }
  ];

  return (
    <div className="page">
      <motion.h1 className="title" initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:1}}>
        ولاية أولاد جلال
      </motion.h1>

      <motion.div className="section" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}}>
        <h2>نبذة تاريخية</h2>
        <p>
          تأسست ولاية أولاد جلال في عام 2019 ضمن التعديلات الإدارية الجزائرية، وتُعد من الولايات الجغرافية الشاسعة التابعة للناحية الشرقية للجزائر. عرف اسمها تيمناً بمدينة أولاد جلال التاريخية التي لها جذورها العريقة.
        </p>
      </motion.div>

      <motion.div className="section" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.2}}>
        <h2>التقسيم الإداري</h2>
        <ul>
          <li>الدائرــة: أولاد جلال — البلديات: أولاد جلال، الشايف</li>
          <li>الدائــرة: سيدي خالد — البلديات: سيدي خالد، أولاد مع الله</li>
        </ul>
      </motion.div>

      <motion.div className="section" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.4}}>
        <h2>الولاية بالأرقام</h2>
        <div className="stats-grid">
          {stats.map((s,i) => (
            <motion.div key={i} className="stat-card" initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:0.5, delay:0.1*i}}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="section" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.6}}>
        <h2>الموقع الجغرافي</h2>
        <p>
          تقع ولاية أولاد جلال في الشمال الشرقي للجزائر، على خط عرض 34° شمالاً وخط طول 6° شرقاً، وتتمتع بموقع استراتيجي يربط بينها والمدن المحيطة بها.
        </p>
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=34.0,6.0&z=10&output=embed"
            allowFullScreen
          />
        </div>
      </motion.div>

      <motion.div className="section" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.8}}>
        <h2>السكان</h2>
        <p>
          يقدر عدد سكان ولاية أولاد جلال بحوالي 150,000 نسمة بحسب إحصائيات 2023، ويتركز السكان بشكل رئيسي في البلديات الحضرية مع تواجد ملحوظ في المناطق الريفية.
        </p>
      </motion.div>
    </div>
  );
}
