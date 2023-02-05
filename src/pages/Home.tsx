import React from "react";
import firebase, { provider } from "../services/firebaseService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleGoogleLogin = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    setIsSubmitted(true);
    try {
      await firebase.auth().signInWithPopup(provider);
      const idToken = await firebase.auth().currentUser?.getIdToken(true);
      localStorage.setItem("token", idToken ?? "");
      navigate("/proviza");
    } catch (error: any) {
      setIsSubmitted(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-[100vh] items-center">
      <img src={logo} alt="logo" className="w-20 h-20 mb-5" />
      <button
        disabled={isSubmitted}
        onClick={handleGoogleLogin}
        type="button"
        className="drop-shadow-md text-dark bg-white hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
      >
        <img
          src="https://developers.google.com/static/identity/images/g-logo.png"
          alt=""
          className="h-[20px] w-[20px] mr-2"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default Home;
