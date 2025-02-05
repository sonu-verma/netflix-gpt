import { useEffect } from "react"
import { TMDB_API_OPTION, TMDB_PLAYING_NOW_MOVIE_URL } from "../../utils/constants"
import Header from "../Header"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../../utils/moviesSlice"

const Browse = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(TMDB_PLAYING_NOW_MOVIE_URL, TMDB_API_OPTION)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
        console.log(json)
    }

    useEffect( () => {
        getNowPlayingMovies()
    }, [])
    return <>
        <Header />
    </>
}


export default Browse;