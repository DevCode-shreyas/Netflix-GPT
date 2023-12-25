import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // if filterdata is not empty, use filterdata[0] as trailer else use json.results[0] as trailer

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
