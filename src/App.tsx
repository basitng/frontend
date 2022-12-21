import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonies";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <About />
      <Testimonials />
      <Blog />
      <Footer />
    </React.Fragment>
  );
}
