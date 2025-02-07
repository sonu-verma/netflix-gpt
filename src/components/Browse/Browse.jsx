import Header from "../Header"
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovie from "./hooks/usePopularMovie";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import MovieRecommendedContainer from "./movieRecommendedContainer/MovieRecommendedContainer";
import MovieVideoContainer from "./movieVideoContainer/MovieVideoContainer";
const Browse = () => {

    useNowPlayingMovies()
    usePopularMovie()    
    useTopRatedMovies()
  
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