import React, { useState, useEffect, useContext } from "react";
import MovieData from "./MovieData";
import axios from "axios";
import { StoreContext } from "./Store";

const keyApi = process.env.REACT_APP_API_KEY_MOVIE;

export default function Suggested() {
  const [film, setFilm] = useState([]);
  const [state] = useContext(StoreContext);
  useEffect(() => {
    if (state.genre !== " ") {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${
            state.genre
          }&sort_by=popularity.desc&api_key=${keyApi}
`
        )
        .then(res => setFilm(res.data.results));
    } else
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${keyApi}`
        )
        .then(res => setFilm(res.data.results));
  });
  return (
    <div>
      {" "}
      <MovieData film={film} />
    </div>
  );
}
