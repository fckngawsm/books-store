import React from "react";
import Header from "../Header/Header";
import Novetly from "../Novelty/Novetly";
import { slides } from "../../utils/slides";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header slides={slides} />
        <Novetly />
      </div>
    </div>
  );
}

export default App;
