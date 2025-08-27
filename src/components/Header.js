import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { logo,userlogo } from "../utils/constant";

const Header = () => {
 
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect( ()=>{
 const unsubscribe=onAuthStateChanged(auth, (user) => {
      if(user){
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      }
  
      
    else {
      // User is signed out
        dispatch(removeUser());
        navigate("/")
    }
   
  })
  //  unsubscribe when my component is unmout
   return()=> unsubscribe();
  },[]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
       
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-slate-950 z-10">
      <img
        className="w-48"
        src={logo}
        alt="logo"
      />
      
      <div className="flex mt-5 ">
        <img
          className="w-[35px] h-[35px]"
          src={userlogo}
          alt="sign out"
        />
        <button onClick={handleSignout} className="mb-5 font-bold text-white">
          Sign Out
        </button>
      </div>
      
    </div>
  );
};

export default Header;
