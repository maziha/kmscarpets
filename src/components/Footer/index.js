import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
// import emailjs from "emailjs-com";
// import styled from "styled-components";
import "./Footer.css";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

// const Subscribe = styled.div``;
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "gmail1",
  //       "template_l234y0h",
  //       e.target,
  //       "user_cZLRhARtSHe6CghuYMhf8"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>KMS Carpets</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                Home
              </FooterLink>
              <FooterLink to="/" id="about">
                About
              </FooterLink>
              <FooterLink to="/" id="discover">
                Discover
              </FooterLink>
              <FooterLink to="/" id="services">
                Services
              </FooterLink>
              <FooterLink to="/" id="contact">
                Contact Us
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink
                href="https://www.instagram.com/kms.carpets/"
                target="_blank"
                aria-label="Instagram"
              >
                Instagram
              </FooterLink>
              <FooterLink
                href="https://www.facebook.com/KMS-Traders-111394100782518/"
                target="_blank"
                aria-label="Facebook"
              >
                Facebook
              </FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink
                href="https://wa.me/+917558077632 "
                target="_blank"
                aria-label="WhatsApp"
              >
                WhatsApp
              </FooterLink>
            </FooterLinkItems>
            {/* <Subscribe>
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
            </Subscribe> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>
              <img
                src="https://i.postimg.cc/7ZG5hf2c/kmscarpets.png
"
                alt="Best Carpets in Kerala"
              ></img>
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
