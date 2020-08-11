import React, { Fragment } from "react";
import Navigation from "./Navigation";
import MoveInfo from "./MoveInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
import Grid from "./Grid";
import Spinner from "./Spinner";

import { useMovieFetch } from "../Hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Something went wrong</div>;
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Navigation movie={movie.original_title} />
      <MoveInfo />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
    </Fragment>
  );
};

export default Movie;
