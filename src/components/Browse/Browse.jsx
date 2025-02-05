import Header from "../Header"
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MovieRecommendedContainer from "./MovieRecommendedContainer";
import MovieVideoContainer from "./movieVideoContainer/MovieVideoContainer";
const Browse = () => {

    useNowPlayingMovies()    
  
    return <>
        <Header />
        {
            /*
                VideContainer
                    Video Container
                    Video Title
                MovieRecommandedContainer
                    MovieList * N
                    cards * N
            */
        }
        <MovieVideoContainer />
        <MovieRecommendedContainer />
    </>
}


export default Browse;