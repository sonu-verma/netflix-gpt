import { useEffect } from "react";
import { TMDB_API_OPTION } from "../../../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../../utils/moviesSlice";

const usePopularMovie = () => {
    const dispatch = useDispatch()
    const popularMovie = useSelector(store => store.movies?.topRatedMovies)
   
    const popularMovies = async () => {
        const movies = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", TMDB_API_OPTION)
        const json = await movies.json();
        dispatch(addPopularMovies(json.results))
        console.log("Popular Movies:",json)
    }

    useEffect( () => {
        !popularMovie && popularMovies()
    }, [])
}

export default usePopularMovie