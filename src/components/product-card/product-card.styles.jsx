import styled from "styled-components";

const smallScreen = 643;
const mediumScreen = 900;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    transition: opacity 0.3s ease;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    font-size: 16px;
    @media (max-width: ${mediumScreen}px) {
      font-size: 12px;
    }
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductCardName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const Price = styled.span`
  width: 10%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
