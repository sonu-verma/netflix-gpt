import { BG_IMG } from "../../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
        <div className="fixed opacity-100 -z-20">
            <img 
                src={BG_IMG} 
                alt="Netflix background"
                className="h-screen w-screen object-fill"
            />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
