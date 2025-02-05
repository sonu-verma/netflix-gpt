import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MovieVideoContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
    if(movies == null)  return;
    const x = Math.floor((Math.random() * 10) + 1);
    const mainMovies = movies[x];
   
    const { overview, title, poster_path, id} = mainMovies;

    return <>
        <div className="">
            <VideoTitle title={title} overview = {overview} />
            <VideoBackground poster_path = {poster_path} movieID = {id} />
        </div>
    </>
}

export default MovieVideoContainer