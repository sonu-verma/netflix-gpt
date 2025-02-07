import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTION, TMDB_PLAYING_NOW_MOVIE_URL } from "../../../utils/constants";
import { addNowPlayingMovies } from "../../../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovie = useSelector(store => store.movies?.topRatedMovies)
   
    const getNowPlayingMovies = async () => {
        const data = await fetch(TMDB_PLAYING_NOW_MOVIE_URL, TMDB_API_OPTION)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
        console.log("Now Playing Movies",json)
    }

    useEffect( () => {
        !getNowPlayingMovie && getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies