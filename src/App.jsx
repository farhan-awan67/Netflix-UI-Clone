import "./index.css";
import Hero from "./components/Hero";
import Yourtv from "./components/Yourtv";
import Download from "./components/Download";
import Stream from "./components/Stream";
import Kids from "./components/Kids";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero></Hero>
      <div className=" w-full h-[7px] bg-[#414141]"></div>
      <Yourtv></Yourtv>
      <div className=" w-full h-[7px] bg-[#414141]"></div>
      <Download></Download>
      <div className=" w-full h-[7px] bg-[#414141]"></div>
      <Stream />
      <div className=" w-full h-[7px] bg-[#414141]"></div>
      <Kids></Kids>
      <div className=" w-full h-[7px] bg-[#414141]"></div>
      <Faqs></Faqs>
      <div className=" w-full h-[7px] bg-[#414141]"></div>
      <Footer></Footer>
    </>
  );
}

export default App;
