// import React from 'react'
// import { FaChevronRight } from 'react-icons/fa6'
// import {GoogleAuthProvider, GithubAuthProvider, signInWithRedirect} from "firebase/auth"
// import { auth } from "../Config/firebase.config"

// const Authbutton = ({Icon, label, provider}) => {

//     const googleAuthProvider = new GoogleAuthProvider();
//     const githubAuthProvider = new GithubAuthProvider();

//     const handleClick = async ()=>{
//         switch(provider){
//             case "GoogleAuthProvider":
//                 await signInWithRedirect(auth, googleAuthProvider)
//                 .then((result)=>{
//                     console.log(result)
//                 }) 
//                 .catch( (err) =>{
//                     console.log(`Error : ${err.Message}`);
//                 })
//                 break

//             case "GithubAuthProvider":
//                 await signInWithRedirect(auth, githubAuthProvider)
//                 .then((result)=>{
//                     console.log(result)
//                 }) 
//                 .catch( (err) =>{
//                     console.log(`Error : ${err.Message}`);
//                 })

//             default:
//                 await signInWithRedirect(auth, googleAuthProvider)
//                 .then((result)=>{
//                     console.log(result)
//                 }) 
//                 .catch( (err) =>{
//                     console.log(`Error : ${err.Message}`);
//                 })
//                 break               
//         }
//     }

//   return (
//     <div onClick={handleClick} className='w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md'>
//         <Icon  className='text-txtPrimaryPrimary text-xl group-hover:text-white' />
//         <p className='text-txtPrimary text-lg group-hover:text-white'>{label}</p>

//         <FaChevronRight className='text-txtPrimary text-base group-hover:text-white' />
//     </div>
//   )
// }

// export default Authbutton

import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../Config/firebase.config";

const Authbutton = ({ Icon, label, provider }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const handleClick = async () => {
    switch (provider) {
      case "GoogleAuthProvider":
        await signInWithRedirect(auth, googleAuthProvider).catch((err) => {
          console.log(`Error: ${err.message}`);
        });
        break;
      case "GithubAuthProvider":
        await signInWithRedirect(auth, githubAuthProvider).catch((err) => {
          console.log(`Error: ${err.message}`);
        });
        break;
      default:
        await signInWithRedirect(auth, googleAuthProvider).catch((err) => {
          console.log(`Error: ${err.message}`);
        });
        break;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md"
    >
      <Icon className="text-txtPrimaryPrimary text-xl group-hover:text-white" />
      <p className="text-txtPrimary text-lg group-hover:text-white">{label}</p>
      <FaChevronRight className="text-txtPrimary text-base group-hover:text-white" />
    </div>
  );
};

export default Authbutton;
