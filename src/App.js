import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SmartServices from "./pages/SmartServices";
import WilayaServices from "./pages/WilayaServices";
import OuledDjellal from "./pages/OuledDjellal";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/smart" element={<SmartServices />} />
        <Route path="/wilaya" element={<WilayaServices />} />
        <Route path="/ouled" element={<OuledDjellal />} />



      </Routes>
    </Router>
  );
}

export default App;

