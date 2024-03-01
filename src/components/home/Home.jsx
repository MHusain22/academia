import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import Contact from "../contact/Contact";
import CoursesCard from "../allcourses/CoursesCard";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <CoursesCard />
      <Testimonal />
      <Contact />
      {/* <Hblog /> */}
      {/* <Hprice /> */}
    </>
  );
};

export default Home;
