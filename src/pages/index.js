import React, { useState } from "react";
import Hero from "../components/HeroSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SliderData from "../components/HeroSection/SliderData";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Services from "../components/Services";
import FloatingWhatsapp from "../components/FloatingWhatsapp/FloatingWhatsapp";
import TopPicks from "../components/TopPicks";

import Cards from "../components/DiscoverSec/Cards";
import Contact from "../components/Contact";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <FloatingWhatsapp />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...homeObjOne} />
      <Cards />

      <TopPicks />
      <Services />
      <Contact />
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
