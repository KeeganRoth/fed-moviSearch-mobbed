import React from "react";

const MovieContentDisplay = props => {
  console.log("props", props);
  return (
    <section className={props.className}>
      <section>{props.movie.plot}</section>
      <section>
        <img src={props.movie.poster} alt={props.movie.title} />
      </section>
      <section>{props.movie.actors}</section>
      <section>{props.movie.year}</section>
    </section>
  );
};
export default MovieContentDisplay;
