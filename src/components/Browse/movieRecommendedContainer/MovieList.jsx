import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
    return <>{ movies && (
        <div className=""> 
            <h2 className="py-3 ml-12 text-2xl">{title}</h2>
            <div className="flex overflow-x-scroll scrollbar-custom">
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