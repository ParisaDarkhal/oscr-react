import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import Subhero from "./components/home/Subhero";
import SearchDiscover from "./components/home/SearchDiscover";
import Unlock from "./components/home/Unlock";
import Craft from "./components/home/Craft";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/FAQ";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Pricing from "./components/pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Hero />
      <Subhero />
      <SearchDiscover />
      <Unlock />
      <Craft />
      <Testimonials />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
