import React from "react";
import Try from "./Try";

export default function MovieData({ film }) {
  return (
    <div className="MovieData">
      {film &&
        film.map((i, index) => (
          <ul key={index}>
            <li>
              <Try
                image={`https://image.tmdb.org/t/p/w200${i.poster_path}`}
                title={i.title}
                overview={i.overview}
                date={i.release_date}
                id={i.id}
              />
            </li>
          </ul>
        ))}
    </div>
  );
}
