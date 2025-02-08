import { useSelector } from "react-redux"
import MovieList from "../Browse/movieRecommendedContainer/MovieList"

const GptMovieSuggestions = () => {
    const { movieResults, movieNames} = useSelector(store => store.gpt)
    if(!movieResults) return null;
    return <>
        <div className="bg-black text-white my-5 p-4 opacity-85 m-4">
            {
                movieResults.map((movies, index) => <MovieList key={index} title={movieNames[index]} movies={movies.results} isHomePage={0} />)
                /*  */
            }
            {/* {movieNames} */}
        </div>
    </>
}

export default GptMovieSuggestions