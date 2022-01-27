import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsItem = styled.div`
   {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    background: white;
    cursor: pointer;
  }
`;
const Link = styled.a`
   {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
  }
`;
const CardsItemPicWrap = styled.div`
   {
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.4s;
  }
  &:after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    box-sizing: border-box;
  }
`;
const CardsItemInfo = styled.div`
   {
    padding: 20px 30px 30px;
  }
`;
const CardsItemText = styled.div`
   {
    color: #000;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }
`;

function TopPicksItems(props) {
  return (
    <>
      <CardsItem>
        <li>
          <Link className="cards__item__link" to={props.path} href="/products">
            <CardsItemPicWrap data-category={props.label}>
              <img alt="KMS Traders " src={props.src} />
            </CardsItemPicWrap>
            <CardsItemInfo>
              <CardsItemText>{props.text}</CardsItemText>
            </CardsItemInfo>
          </Link>
        </li>
      </CardsItem>
      <br />
      <br />
    </>
  );
}

export default TopPicksItems;
