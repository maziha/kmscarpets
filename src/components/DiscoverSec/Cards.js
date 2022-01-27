import React, { useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "./Heading.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import newImage from "../../images/new.jpg";

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <div className="cards" id="discover">
        <br />
        <h2 className="c-section__title" data-aos="fade-up">
          <span>DISCOVER</span>
        </h2>

        <div className="cards__container" data-aos="zoom-in-up">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://i.postimg.cc/3RxmftP0/Jhelum1.jpg"
                text="Make your Living Room Beautiful with our Jhelum Carpets"
                label="Jhelum Carpets"
                path="/products"
              />
              <CardItem
                src="https://i.postimg.cc/2jXFMfjk/Turkish.jpg"
                text="Find out our best collection of Turkish Hand-knotted Rugs"
                label="Turkish Carpets"
                path="/products"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://i.postimg.cc/ncjYtwMv/GrassArt.jpg
                "
                text="Landscape using our High Quality Imported Artificial Grass"
                label="Artificial Grass"
                path="/products"
              />
              <CardItem
                src="https://i.postimg.cc/N0Y1msD4/Runners.jpg
                "
                text="Runner Carpets for your Hallways, Bedrooms, Staircase and Narrow Areas."
                label="Runner Carpets"
                path="/products"
              />
              <CardItem
                src="https://i.postimg.cc/DZxd79qc/Doormats.jpg"
                text="Welcome guests with our Amazing Collection of Doormats"
                label="Doormats"
                path="/products"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
