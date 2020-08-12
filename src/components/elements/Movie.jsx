import React, { Fragment } from "react";
import Navigation from "./Navigation";
import MoveInfo from "./MoveInfo";
import MovieInfoBar from "./MovieInfoBar";
import Grid from "./Grid";
import Actor from "./Actor";
import Spinner from "./Spinner";

import { useMovieFetch } from "../Hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Navigation movie={movie.original_title} />
      <MoveInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Movie;
