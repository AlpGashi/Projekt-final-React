import React from "react";
import Nav from "../Components/HomepageComponents/Nav";
import FirstContainer from "../Components/HomepageComponents/FirstContainer";
import SecondContainer from "../Components/HomepageComponents/SecondContainer";
import ThirdContainer from "../Components/HomepageComponents/ThirdContainer";
import FourthContainer from "../Components/HomepageComponents/FourthContainer";
import FifthContainer from "../Components/HomepageComponents/FifthContainer";
const Homepage = () => {
  return (
    <div>
      <div className="s1">
        <Nav />
        <FirstContainer />
      </div>
      
        <SecondContainer />
     
      
        <ThirdContainer />
      <FourthContainer/>
      <FifthContainer/>

    </div>
  );
};

export default Homepage;
