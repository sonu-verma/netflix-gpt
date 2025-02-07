import { useSelector } from "react-redux";
import GptSearch from "../Gpt/GptSearch";
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
  
    const gptFlag = useSelector(gpt => gpt.config?.gpt)
    return <>
        <Header />
        {
            gptFlag ? 
            <GptSearch /> : 
            <>
                <MovieVideoContainer />
                <MovieRecommendedContainer />
            </>

        }
    </>
}


export default Browse;