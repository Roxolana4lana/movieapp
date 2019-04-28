import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import MovieData from "./MovieData";
import { StoreContext } from "./Store";

const keyApi = process.env.REACT_APP_API_KEY_MOVIE;

export default function ListData({ stored }) {
  const [film, setFilm] = useState([]);
  const [state] = useContext(StoreContext);
  useEffect(() => {
    if (state.value === "extended") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?&api_key=${keyApi}&query=${stored}`
        )
        // .then(res => setFilm(res.data.results));
        .then(res => console.log(res.data.results));
    } else {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${stored}`
          )
          .then(res => setFilm(res.data.results));
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <div>
      {" "}
      {film.length < 1 ? (
        <h1 style={{ fontSize: "1.5rem", margin: "1.5rem", color: "red" }}>
          Type the correct title
        </h1>
      ) : (
        <MovieData film={film} />
      )}
    </div>
  );
}
