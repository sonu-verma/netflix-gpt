import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MovieRecommendedContainer  = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    const latestMovies = useSelector(store => store.movies?.popularMovies)
    const topRatedMoviesMovies = useSelector(store => store.movies?.topRatedMovies)
    return <>
        <div className="text-white bg-gray-950 -mt-40">
            <MovieList title="New on Netflix" movies ={movies} />
            <MovieList title="Latest Movies" movies ={latestMovies} />
            <MovieList title="Top Rated Movies" movies = {topRatedMoviesMovies} />
        </div>
    </>
}
export default MovieRecommendedContainer