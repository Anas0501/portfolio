import React from "react";

import Header from "../components/Header";
import Intro from "../components/Intro";
import MySelf from "../components/MySelf";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import TalkToMe from "../components/TalkToMe";

const MainPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <MySelf />
      <Skills />
      <Projects />
      <Testimonial />
      <TalkToMe />
    </>
  );
};

export default MainPage;
