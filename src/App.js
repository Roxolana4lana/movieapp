import React from "react";
import Movie from "./components/Movie";
import Store from "./components/Store";
import "./styles/output.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Store>
      <div className="App">
        <Navigation />
        <Movie />
      </div>
    </Store>
  );
}

export default App;
//<Movie />
