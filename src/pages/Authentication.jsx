import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Logo } from "../assets";
import { Footer } from "../containers";
import { Authbutton, MainSpinner } from "../components"; 
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Authentication = () => {
  const { data, isLoading, isError } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data) {
      navigate("/", { replace: true }); 
    }
  }, [isLoading, data, navigate]);

  if (isLoading) {
    return <MainSpinner />; 
  }

  return (
    <div className="auth-section">
      <img src={Logo} className="w-12 h-auto object-contain" alt="Logo" />
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-3xl lg:text-4xl text-blue-400">Welcome to Resume</h1>
        <p className="text-2xl text-gray-600">Express way to create a resume</p>
        <h2 className="text-2xl text-gray-600">Authenticate</h2>
        <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
          <Authbutton 
            Icon={FaGoogle} 
            label="Sign in with Google" 
            provider="GoogleAuthProvider" 
          />
          
          <Authbutton 
            Icon={FaGithub} 
            label="Sign in with Github" 
            provider="GithubAuthProvider" 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;