import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({poster_path, movieID}) => {

    const trailer = useSelector(store => store.movies?.trailerVideo)
    
    useTrailerVideo(movieID)
    
    console.log("trailer", trailer)
    return (
        <div className="bg-red-300">
            {
                !trailer ? <img  className=" w-screen h-screen" src={`https://image.tmdb.org/t/p/w3840_and_h2160_bestv2/${poster_path}.jpg`} /> :
                <iframe 
                    className="h-screen w-screen"
                    src={`https://www.youtube.com/embed/${trailer.key}?si=${trailer.key}&start=1&autoplay=1&mute=1` }
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>

            }
           
            
        </div>
    )
}

export default VideoBackground
