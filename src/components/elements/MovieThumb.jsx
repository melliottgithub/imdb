import React from "react";
import PropTypes from "prop-types";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "@reach/router";

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt="moviethumb"></img>
        </Link>
      ) : (
        <img src={image} alt="moviethumb"></img>
      )}
    </StyledMovieThumb>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  cliackable: PropTypes.bool,
};

export default MovieThumb;
