// pages/Login.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم الدخول بنجاح");
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.card}
      >
        <h2 style={styles.title}>دخول المكتب</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="كلمة السر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            دخول
          </button>
          <p style={styles.link}>
            نسيت كلمة السر؟ <Link to="/reset" style={{ color: "#FFD700" }}>اضغط هنا</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #0F172A, #1E293B)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#1E293B",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
    maxWidth: "400px",
    width: "100%",
    color: "#fff",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "30px",
    color: "#FFD700",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#334155",
    color: "white",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#FFD700",
    color: "#0F172A",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  link: {
    marginTop: "10px",
    fontSize: "0.9rem",
    textAlign: "center",
    color: "#ccc",
  },
};
