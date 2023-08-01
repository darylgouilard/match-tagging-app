// Import style sheet
import "./Styles.css";

// Import necessary libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Import pages
import Home from "./pages/Home.jsx";
import TaggerUI from "./pages/TaggingInterface.jsx";

export default function App() {
  // Variable to set title of active page
  const [activePage, setActivePage] = useState("Home");

  // Page elements
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-contents">
          <Header activePage={activePage} />

          <Routes>
            <Route path="/" element={<Home setActivePage={setActivePage} />} />
            <Route
              path="/tagger"
              element={<TaggerUI setActivePage={setActivePage} />}
            />
          </Routes>
        </div>

        <Footer className="footer-pin" />
      </div>
    </BrowserRouter>
  );
}
