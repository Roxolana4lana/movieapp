import React, { useState, useEffect } from "react";
import ListData from "./ListData";
import Suggested from "./Suggested";
import Selector from "./Selector";

export default function Movie() {
  const [value, setValue] = useState("");
  const [stored, setStored] = useState(
    localStorage.getItem("storedValue") || ""
  );
  useEffect(() => {
    localStorage.setItem("storedValue", stored);
  }, [stored]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    setStored(value.replace(" ", "+"));
    setValue("");
  };
  return (
    <div>
      <div className="myInput">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter the key word"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <i
            className="fas fa-search"
            onClick={e => handleSubmit(e)}
            style={{
              fontSize: "3rem",
              padding: "1rem",
              color: "#2d3f70",
              top: "5px",
              position: "relative",
              cursor: "pointer"
            }}
          />
        </form>
        <div className="Category">
          <h1>Searched movies</h1>
        </div>
        {stored && <ListData stored={stored} />}
        <div className="Category">
          <h1>Most popular in World of Movies</h1>
          <Selector
            action={"Action"}
            adventure={"Adventure"}
            animation={"Animation"}
            comedy={"Comedy"}
            crime={"Crime"}
            documentary={"Documentary"}
            drama={"Drama"}
            family={"Family"}
            fantasy={"Fantasy"}
            history={"History"}
            horror={"Horror"}
            music={"Music"}
            mystery={"Mystery"}
            romance={"Romance"}
            thriller={"Thriller"}
            western={"Western"}
          />
        </div>
        <Suggested />
      </div>
    </div>
  );
}

// <Selector extended={"Extended seatch"} normal={"Normal search"} />
