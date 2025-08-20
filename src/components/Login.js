import { useState } from "react";
import Header from "./Header";
//import myImage from "../components/myimage.jpg";
const Login = () => {
  const [isSignInForm, setIsSignUpForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt="logo"
        />
      </div>

      <form className="absolute w-[450px]  p-12  text-white font-bold my-32 mx-auto right-0 left-0 bg-black bg-opacity-80 ">
        <h1 className="text-3xl font-bold pb-5 py-3 ml-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
         
         {!isSignInForm &&
          <input
          type="text"
          placeholder="FullName"
          className="p-3 my-2 w-full bg-gray-900 opacity-50 rounded-lg border border-white"
        />
         }
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-2 w-full bg-gray-900 opacity-50 rounded-lg border border-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full  bg-gray-900 opacity-50 rounded-lg border border-white"
        />
        <button className="p-3 my-4 w-full bg-red-600 rounded-lg">
          {isSignInForm? "Sign In" :"Sign Up"}
        </button>
        <p className="" onClick={toggleSignInForm}>
          {isSignInForm ? " New to Netflix?Sign Up now" : "Already registor?Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
