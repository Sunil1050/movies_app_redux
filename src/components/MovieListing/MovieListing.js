import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import Loader from "../Loader";
import { settings } from "../../common/settings";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector((state) => state.movies.loading)
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );



  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="movie-wrapper">
          <div className="movie-list">
            <h2>Movies</h2>
            {Object.keys(movies).length === 0 ? (
              <div className="loader">
                <Loader />
              </div>) : (
              <div className="movie-container">
                <Slider {...settings}>
                  {renderMovies}
                </Slider>
              </div>
            )
            }
          </div>
          <div className="show-list">
            <h2>Shows</h2>
            {Object.keys(movies).length === 0 ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <div className="movie-container">
                <Slider {...settings}>
                  {renderShows}
                </Slider>
              </div>
            )
            }
          </div>
        </div>
      )
      }
    </>

  );
};

export default MovieListing;