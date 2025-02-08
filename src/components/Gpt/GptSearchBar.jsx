import { useDispatch, useSelector } from "react-redux"
import { languages } from "../../utils/langConstance"
import { openai } from "../../utils/openai"
import { TMDB_API_OPTION } from "../../utils/constants"
import { addMovieResults } from "../../utils/gptSlice"
import { useRef } from "react"

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const lang = useSelector(lang => lang.config?.lang)
    const searchBar = useRef()

    const handleGptSearchBtn = async (e) => {
        e.preventDefault();
        console.log("searchBar", searchBar)
        if(searchBar.current.value.length == 0){
            alert("please enter value for search...")
            return false
        }
        // const completion = openai.chat.completions.create({
        //     // model: "gpt-4o-mini",
        //     model: "gpt-3.5-turbo",
        //     store: true,
        //     message: [
        //         {
        //             "role": "user",
        //             "content": "write a haiku about ai"
        //         }
        //     ]
        // })
    
        const movieNames = "andaz apna apna, Raaz, Desi boyz, Murder".split(",")
        
        if(movieNames.length > 0)
        {
            const moviePromises = movieNames.map(movieName => searchMovieByName(movieName))
            const results =await Promise.all(moviePromises);
            console.log("results", results)
            dispatch(addMovieResults({movieNames:movieNames, movieResult: results}))
        }
    
    }

    const searchMovieByName = async (movie) => {
        const movieData  = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTION)
        const json = await movieData.json()
        return json;
    }

   
    return <>
       <div className="pt-20 flex justify-center">
            <form className="bg-black text-white grid grid-cols-12 flex justify-center w-1/2">
                <input className="p-2 m-3 col-span-9 border-2 bg-white text-black border-gray-600" ref={searchBar} type="text" placeholder={ languages[lang].searchPlaceholder } />
                <button className="bg-red-500 p-2 m-4 col-span-3" onClick={handleGptSearchBtn}>{ languages[lang].search }</button>
            </form>
       </div>
    </>

}

export default GptSearchBar