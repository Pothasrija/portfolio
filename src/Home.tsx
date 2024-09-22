import Hero from "./Components/Hero";
import Header from "./Components/Header";
import About from "./Components/About";
import RoundedElement from "./Components/MouseFollower";
import Skills from "./Components/Skills";
// import Experience from "./Components/Experience";
// import Project from "./Components/Project";
import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";
// import { Suspense } from "react";
//
// import { lazy } from "react";

// const Project = lazy(() => import("./Components/Project"));
function hasMousePointer() {
  return window.matchMedia("(pointer:fine)").matches;
}
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      {/* <Suspense fallback={""}>
        <Project />
      </Suspense> */}
      {/* <Contact /> */}
      <Footer />
      {hasMousePointer() ? <RoundedElement /> : ""}
    </>
  );
}
