import React from "react";
import Footer from "./Home/footer";
import Header from "./Home/Header";
import Body from "./Home/body";
import Homefoodcategories from "./Home/Homefoodcategories"
function Home() {
  return (
    <div>
     <Header />
      <Body />
      <Homefoodcategories/>
      <Footer/>
    </div>
  );
}

export default Home;
