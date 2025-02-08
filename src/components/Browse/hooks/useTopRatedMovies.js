import { useEffect } from "react";
import { TMDB_API_OPTION } from "../../../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../../../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const topRatedMovie = useSelector(store => store.movies?.topRatedMovies)
    
    const topRatedMovies = async () => {
        const movies = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", TMDB_API_OPTION)
        const json = await movies.json();
        console.log("Top Rated Movies:",json)
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect( () => {
        !topRatedMovie && topRatedMovies()
    }, [])
}

export default useTopRatedMovies