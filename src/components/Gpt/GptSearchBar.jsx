import { useSelector } from "react-redux"
import { languages } from "../../utils/langConstance"

const GptSearchBar = () => {
    const lang = useSelector(lang => lang.config?.lang)
    return <>
       <div className="pt-20 flex justify-center">
            <form className="bg-black text-white grid grid-cols-12 flex justify-center w-1/2">
                <input className="p-2 m-3 col-span-9 border-2 bg-white text-black border-gray-600" type="text" placeholder={ languages[lang].searchPlaceholder } />
                <button className="bg-red-500 p-2 m-4 col-span-3">{ languages[lang].search }</button>
            </form>
       </div>
    </>

}

export default GptSearchBar