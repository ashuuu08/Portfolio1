import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar     from "./components/Navbar";
import Home       from "./components/Home";
import About      from "./components/About";
import Experience from "./components/Experience";
import Portfolio  from "./components/PortFolio";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              borderRadius: "16px",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              border: "1.5px solid #EBEBEB",
            },
            success: {
              style: { background: "#EAFAF5", color: "#0D0D0D", borderColor: "#3DD6A3" },
              iconTheme: { primary: "#3DD6A3", secondary: "#fff" },
            },
            error: {
              style: { background: "#FFF0F5", color: "#0D0D0D", borderColor: "#FF6B9D" },
              iconTheme: { primary: "#FF6B9D", secondary: "#fff" },
            },
          }}
        />
      </div>
    </Router>
  );
}
