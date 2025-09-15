import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Navbar from "../components/navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import Experience from "../components/Experience";
import { PacmanLoader } from "react-spinners";
import { useStateValue } from "../context/StateProvider";

function Home() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (state.loading) {
      const stopLoader = () => {
        dispatch({
          type: "STOP_LOADER",
        });
      };
      const stopLoader2 = () => {
        dispatch({
          type: "STOP_LOADER2",
        });
      };
      setTimeout(() => {
        stopLoader();
      }, 2500);
      setTimeout(() => {
        stopLoader2();
      }, 2600);
    }
  }, [dispatch, state.loading]);

  return (
    <>
      {state.loading ? (
        <div className="min-h-screen w-full flex justify-center items-center bg-slate-900">
          <PacmanLoader color="#3b82f6" loading={true} size={50} />
        </div>
      ) : (
        <div className={state.loading2 ? ` bg-slate-900` : null}>
          <Navbar />
          <Profile />
          <SocialLinks />

          <Experience />
          <Portfolio />
          <Skills />
          <Contact />
        </div>
      )}
    </>
  );
}

export default Home;
