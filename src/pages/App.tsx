import { useEffect, useState } from "react";
import CircleBlue from "../resources/assets/icons/circle-blue.png";
import CirclePink from "../resources/assets/icons/circle-pink.png";
import Footer from "../uikit/footer";
import Loader from "../uikit/loader";
import Navbar from "../uikit/navbar";
import { AppWrapper } from "./GlobalStyles";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import Skills from "./components/Skill";
import Testimoni from "./components/Testimoni";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <AppWrapper>
      <div className="circle-one">
        <img src={CirclePink} alt="circle" />
      </div>
      <Navbar />
      <div className="circle-two">
        <img src={CircleBlue} alt="circle" />
      </div>
      <Hero />
      <About />
      <div className="circle-tree">
        <img src={CirclePink} alt="circle" />
      </div>
      <Qualification />
      <Skills />
      <div className="circle-for">
        <img src={CircleBlue} alt="circle" />
      </div>
      <div className="circle-five">
        <img src={CirclePink} alt="circle" />
      </div>
      <Portfolio />
      <Testimoni />
      <Contact />
      <div className="circle-seven">
        <img src={CirclePink} alt="circle" />
      </div>
      <div className="circle-eight">
        <img src={CircleBlue} alt="circle" />
      </div>
      <div className="circle-nine">
        <img src={CirclePink} alt="circle" />
      </div>
      <div className="circle-teen">
        <img src={CircleBlue} alt="circle" />
      </div>
      <div className="circle-21">
        <img src={CirclePink} alt="circle" />
      </div>
      <Footer />
    </AppWrapper>
  );
};

export default App;
