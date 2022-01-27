import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Logo1 from "../../../images/kmscarpets.png";
import styled from "styled-components";
import emailjs from "emailjs-com";
import "./Footer.css";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail1",
      "template_l234y0h",
      e.target,
      "user_cZLRhARtSHe6CghuYMhf8"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Subscribe = styled.div``;
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper></FooterLinksWrapper>
          <FooterLinksWrapper>
            <Subscribe>
              <div className="ft-main-item">
                <h2 className="ft-title">Stay Updated</h2>
                <p>Get free updates before others do!</p>
                <br />
                <form onSubmit={sendEmail}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </Subscribe>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/blog" onClick={toggleHome}>
              <img src={Logo1} alt="KMS Carpets"></img>
            </SocialLogo>

            <WebsiteRights>
              kmscarpets © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/KMS-Traders-111394100782518/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/kms.carpets/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
