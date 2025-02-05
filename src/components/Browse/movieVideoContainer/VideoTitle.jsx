const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute mt-40 px-10 text-white">
        <h2 className="font-bold text-6xl my-10">{title}</h2>
        <p className="w-2/4">{overview.trim()}</p>
        <div className="my-4">
            <button className="bg-white text-black px-6 py-1 mr-2">
                Play
            </button>
            <button className="bg-gray-400 text-white px-6 py-1 mr-2">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
