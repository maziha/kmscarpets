import React, { useState, useEffect } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img
                src="https://i.postimg.cc/7ZG5hf2c/kmscarpets.png
"
                alt="Carpet Traders in Muvattupuzha"
              ></img>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <AiOutlineBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-130}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-20}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Contact
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="blog"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-20}
                >
                  Our Blog
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/blog">Blog</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/products">Products</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
