import React from "react";

import NoImage from "../images/no_image.jpg";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import MovieThumb from "./MovieThumb";

const MoveInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>Plot</h3>
        <p>{movie.overview}</p>
        <div className="rating-director">
          <div>
            <h3> IMDb Rating</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map((element) => (
              <p key={element.credit_id}>{element.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);

MoveInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

export default MoveInfo;
