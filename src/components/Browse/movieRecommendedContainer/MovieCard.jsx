const MovieCard = ({movie}) => {
    return <>
        <div className="w-40 ml-5">
            <img className="" src={ `https://image.tmdb.org/t/p/w300/`+movie.poster_path} alt={movie.title} />
        </div>
    </>
}

export default MovieCard