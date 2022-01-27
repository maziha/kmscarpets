import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "#f5e5d7")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ scrollNav }) => (scrollNav ? "0.9rem" : "1rem")};
  position: sticky;
  top: 0;
  width: 100%;
  transition: 0.8s all ease;
  z-index: 999;
  box-shadow: ${({ scrollNav }) =>
    scrollNav
      ? "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.2);"
      : "none"};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 100%;
  }
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding 0 24px;
max-width:1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #111111;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  img {
    height: 70px;
    width: 90px;
    color: #000;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #111111;
  }
    &:hover {
    transition: all 0.2s ease-in-out;
    color: #cd8f5c;
    
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  color: #111111;

  position: relative;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #cd8f5c;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #cd8f5c;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;
// &.active {
//     border-bottom: 3px solid #cd8f5c;}
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #000;
  white-space: none;
  padding: 16px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transition: all 0.6s ease-in-out;
    background: #cd8f5c;
    color: #fff;
  }
`;
