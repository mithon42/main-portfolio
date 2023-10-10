import React from "react";
import Navbar from "./components/navbar/Navbar";
import Features from "./components/features/Features";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}
export default App;
