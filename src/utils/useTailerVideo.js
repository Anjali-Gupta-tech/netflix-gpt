import { useEffect } from "react";
import { option_Api } from "../utils/constant";
import { addMovieId } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

export const useTailerVideo=()=>{
     const dispatch = useDispatch();
 
     const getmovieId = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/755898/videos?",
      option_Api
    );
    const json = await data.json();

    const tailer = json.results;
    console.log(tailer);
    dispatch(addMovieId(tailer));
  };
  useEffect(() => {
    getmovieId();
  }, []);

 }