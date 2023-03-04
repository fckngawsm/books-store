import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import { slides } from "../../utils/slides";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Books from "../../pages/Books";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main slides={slides} />} />
          <Route path="/books" element={<Books />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
