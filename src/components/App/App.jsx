import React from "react";
import Header from "../Header/Header";
import Novetly from "../Novelty/Novetly";
import { slides } from "../../utils/slides";
import Shops from "../Shops/Shops";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header slides={slides} />
        <Novetly />
        <Shops />
      </div>
    </div>
  );
}

export default App;
