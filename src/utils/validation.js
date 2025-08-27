 export const checkvalidemail=(email)=>{
    const isEmailvalid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   if (!isEmailvalid) return "Email is not valid";
   return null;
}
export const checkvalidpassword=(password)=>{
 const isPasswordvalid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(password);
 if(!isPasswordvalid) return "Password is not valid";
 return null;
}