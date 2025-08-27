

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video absolute pt-60  pl-16 bg-gradient-to-r from-black text-white">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="w-[410px]"> 
        <p1 className="  text-lg  py-6">{overview}</p1>
      </div>
     
      <div className="flex mt-4  ">
        <button className="bg-white  text-black text-lg mx-7 w-[100px] h-12 rounded-lg font-bold hover:bg-green">▶️Play</button>
        <button  className="bg-white opacity-40 text-black text-lg rounded-lg w-[100px] h-12 font-bold hover:bg-white">More Info</button>
        
      </div>
    </div>
  )
}

export default VideoTitle;
