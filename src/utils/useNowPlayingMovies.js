import { option_Api } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/movieSlice";
export const useNowPlayingMovies=()=>{
     const dispatch=useDispatch();
      const getNowplaying= async() =>{
          const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', option_Api);
          const json=await data.json();
         console.log(json.results);
          dispatch(addNowPlayingMovies(json.results));
       }
       useEffect( ()=>{
        getNowplaying()
      },[] );
}
