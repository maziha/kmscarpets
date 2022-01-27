import React from "react";
// import { Button } from "./globalStyles";
// import { AiFillThunderbolt } from 'react-icons/ai';
import { BiSupport } from "react-icons/bi";
import { ImTruck } from "react-icons/im";
import { FaTools } from "react-icons/fa";
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from "react-icons/lib";
import {
  ServicesSection,
  ServicesWrapper,
  // ServicesHeading,
  ServicesContainer,
  ServicesCard,
  ServicesCardInfo,
  ServicesCardIcon,
  ServicesCardPlan,
  // ServicesCardCost,
  // ServicesCardLength,
  ServicesCardFeatures,
  ServicesCardFeature,
} from "./ServicesElements.js";

function Services() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <ServicesSection id="services">
        <ServicesWrapper>
          <h2 className="c-section__title" data-aos="fade-up">
            <span>OUR SERVICES</span>
          </h2>
          <ServicesContainer data-aos="zoom-in-up">
            <ServicesCard to="/">
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <FaTools />
                </ServicesCardIcon>
                <br />
                <ServicesCardPlan>Custom Made Carpets</ServicesCardPlan>
                <br />
                <br />
                {/* <ServicesCardCost>$99.99</ServicesCardCost>
                <ServicesCardLength>per month</ServicesCardLength> */}
                <ServicesCardFeatures>
                  <ServicesCardFeature>
                    You visualize, We Craft!
                  </ServicesCardFeature>
                  <ServicesCardFeature>
                    Your choice of Material, Size and Shape.
                  </ServicesCardFeature>
                  <ServicesCardFeature>
                    at Affordable rates.
                  </ServicesCardFeature>
                </ServicesCardFeatures>
              </ServicesCardInfo>
            </ServicesCard>
            <ServicesCard to="/">
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <BiSupport />
                </ServicesCardIcon>
                <br />
                <ServicesCardPlan>24/7 Support Service</ServicesCardPlan>
                <br /> <br />{" "}
                {/* <ServicesCardCost>$299.99</ServicesCardCost>
                <ServicesCardLength>per month</ServicesCardLength> */}
                <ServicesCardFeatures>
                  <ServicesCardFeature>Ready Support.</ServicesCardFeature>
                  <ServicesCardFeature>Reach us through</ServicesCardFeature>
                  <ServicesCardFeature>
                    E-mail, Social Media, Phone at any time.
                  </ServicesCardFeature>
                </ServicesCardFeatures>
              </ServicesCardInfo>
            </ServicesCard>
            <ServicesCard to="/">
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <ImTruck />
                </ServicesCardIcon>
                <br />
                <ServicesCardPlan>Easy Return for 15 Days.</ServicesCardPlan>
                <br />
                <br />
                {/* <ServicesCardCost>$999.99</ServicesCardCost>
                <ServicesCardLength>per month</ServicesCardLength> */}
                <ServicesCardFeatures>
                  <ServicesCardFeature>Price Protection</ServicesCardFeature>
                  <ServicesCardFeature>
                    The Beautiful Guarantee
                  </ServicesCardFeature>
                  <ServicesCardFeature>
                    Read our Refund Policy.
                  </ServicesCardFeature>
                </ServicesCardFeatures>
              </ServicesCardInfo>
            </ServicesCard>
          </ServicesContainer>
        </ServicesWrapper>
      </ServicesSection>
    </IconContext.Provider>
  );
}
export default Services;
