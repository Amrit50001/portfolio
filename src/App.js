import Navbar from "./senes/Navbar"
import React,{useState ,useEffect} from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import DotGroup from "./senes/DotGroup";
import Landing from "./senes/Landing";
import MySkills from "./senes/MySkills"
import Projects from "./senes/Projects"
import Contact from "./senes/Contact"
import Footer from "./senes/Footer"
import LineGradiant from "./component/LineGradiant"


function App() {

  const [selectedPage, setSelectedPage]=useState('home');
  const [isTopOfPage ,setIsTopOfPage] = useState(true);
  const isAboveMediuScreens = useMediaQuery("(min-width:1060px)");

  useEffect(()=>{
    const handleScroll =()=>{
      if (window.scrollY ===0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);

  },[]);
  return (
    <div className="app bg-deep-blue "> 
      <Navbar 
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediuScreens && (
          <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}/>
        )}

        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradiant />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div >
      <LineGradiant/>
      <div className="w-5/6 mx-auto ">
          <Projects/>
      </div >
      <LineGradiant/>
      <div className="w-5/6 mx-auto ">
          <Contact/>
      </div >
      <Footer />

    </div>
  );
}

export default App;
