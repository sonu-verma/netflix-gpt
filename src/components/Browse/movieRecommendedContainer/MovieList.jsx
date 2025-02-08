import MovieCard from "./MovieCard"

const MovieList = ({title, movies, isHomePage=true}) => {
    return <>{ movies && (
        <div className=""> 
            <h2 className={`py-3 text-2xl ${isHomePage?' ml-12': ' ml-5'}`}>{title.toUpperCase()}</h2>
            <div className="flex overflow-x-scroll scrollbar-custom scrollbar-hide">
                <div className="flex">
                    {
                        movies.map( (movie) => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>
            </div>
        </div>
    ) }
    </>
}

export default MovieList