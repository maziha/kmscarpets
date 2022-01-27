import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 900px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: #000;
`;

export const HeroSlide = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

&::before {
    content:'',
    position:absolute;
    z-index:2;
    width:100%;
    height:100%;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%,)
}


`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 100px;
  right: 20px;
  display: flex;
  z-index: 11;
`;
