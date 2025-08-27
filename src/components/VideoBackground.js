import { useTailerVideo } from "../utils/useTailerVideo";
import {useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const tailerbackground = useSelector((store) => store.movies?.tailerbackground);
 
 useTailerVideo()
  return (
    <div className="w-screen ">
     
      <iframe
      className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/d9erkpdh5o0?si=qp58GY5tli_I6wNt" +
          tailerbackground?.key +"&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
