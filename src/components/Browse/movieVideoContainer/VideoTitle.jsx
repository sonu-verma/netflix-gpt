const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute mt-30 px-15 text-white">
        <h2 className="font-bold text-6xl my-10">{title}</h2>
        <p className="w-1/4">{overview.slice(0,150)}...</p>
        <div className="my-4">
            <button className="bg-white text-black px-6 py-1 mr-2 rounded-sm">
                Play
            </button>
            <button className="bg-gray-400 text-white px-6 py-1 mr-2 rounded-sm">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
