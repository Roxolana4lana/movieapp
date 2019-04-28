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
      <h1>Hello</h1>
    </Store>
  );
}

export default App;
