import React, { useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { motion } from "framer-motion";
import kms from "../../images/kms.svg";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  SliderButtons,
} from "./HeroSectionElements";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5e5d7;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  left: 0;
  filter: brightness(80%);
  top: 0;
  width: 80%;
  height: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const Img = styled(motion.img)`
  position: absolute;
  width: 15%;
  height: 15%;
  top: 40px;
  left: 100px;
  @media screen and (max-width: 768px) {
    width: 20%;
    height: 20%;
    left: 80px;
    top: 20px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #000;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

// const Button = styled(motion.button)`
//   padding: 1rem 3rem;
//   font-size: 1rem;
//   border: 2px solid #fff;
//   border-radius: 4px;
//   outline: none;
//   cursor: pointer;
//   background: #000;
//   color: #fff;
// `;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  z-index:2000;
  

  &:hover {
    background: #cd8f5c;
    transform: scale)=(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 50px;
  height: 50px;
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <Section>
                    <Container>
                      <ColumnLeft>
                        <Img
                          src={kms}
                          alt="Best Turkish Carpets Kolencherry"
                          // initial={{ opacity: 0, rotate: 0 }}
                          animate={{
                            opacity: 1,

                            transition: { duration: 2, repeat: Infinity },
                            rotate: 360,
                          }}
                        />
                        <motion.h1
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          variants={fadeLeft}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 2 }}
                        >
                          {slide.price}
                        </motion.p>
                        {/* <Button
                          to="contact"
                          whileHover={{
                            scale: 1.05,
                            transition: { repeat: Infinity, duration: 2 },
                            cursor: "pointer",
                          }}
                          whileTap={{
                            scale: 0.95,
                            backgroundColor: "#cd8f5c",
                            border: "none",
                            color: "#fff",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 1.5 },
                          }}
                        >
                          Get Started
                        </Button> */}
                      </ColumnLeft>
                      <ColumnRight>
                        <Image
                          src={slide.image}
                          whileTap={{ scale: 0.8 }}
                          drag={true}
                          dragConstraints={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                          }}
                          initial={{ opacity: 0, y: 100 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                          }}
                        />
                      </ColumnRight>
                    </Container>
                  </Section>
                  {/* </HeroContent> */}
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;

// slideIndex=current
// dataSlider=slides
// obj=slide
