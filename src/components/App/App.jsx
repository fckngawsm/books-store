import React from "react";
import Header from "../Header/Header";
import { slides } from "../../utils/slides";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main slides={slides} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
