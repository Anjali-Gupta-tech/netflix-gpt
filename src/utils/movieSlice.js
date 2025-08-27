const { createSlice } = require("@reduxjs/toolkit");

const movieSlice=createSlice(
    {
        name:"movies",
        initialState:{
        nowPlayingMovies:null,
        addMovieId:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addMovieId:(state,action)=>{
                state.tailerbackground=action.payload;
            }
        }
    }
)
export const{addNowPlayingMovies,addMovieId} = movieSlice.actions;
export default movieSlice.reducer;