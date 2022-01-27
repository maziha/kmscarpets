import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Heading.css";
//
import {
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  // Watermark,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,

  image,
  alt,

  headline,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <h2 className="c-section__title" data-aos="fade-up">
            <span>ABOUT</span>
          </h2>
          {/* <Watermark>ABOUT</Watermark> */}
          <InfoRow imgStart={imgStart}>
            <Column1 data-aos="zoom-in-up">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2 data-aos="zoom-in-up">
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
