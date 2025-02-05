import { useEffect } from "react";
import { addTrailerVideo } from "../../../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTION } from "../../../utils/constants";

const useTrailerVideo = (movieID) => {
    const dispatch = useDispatch();

    const getVideoTrailer = async () => {
        const trailers = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, TMDB_API_OPTION)
        const json =await trailers.json()
        const trailerFilter = json.results?.filter( trailer => trailer.type == 'Trailer')
        const totalTrailer =  trailerFilter.length;
        const x = Math.floor((Math.random() * totalTrailer-1) + 1);
        const trailer = trailerFilter[x];
        dispatch(addTrailerVideo(trailer))
    } 
    
    
    useEffect( ()=> {
        getVideoTrailer()
    }, [])
}

export default useTrailerVideo