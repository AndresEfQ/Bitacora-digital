import styled from "styled-components";
import "@fontsource/poppins";

export const Header = styled.header`
  height: 5vh;
  padding: 1vh 2vh;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  background-color: #009ba5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.2rem
  }

  & img {
    height: 3vh;
  }

  & div {
    display: flex;
    gap: 2vh;
  }
`;

export const Main = styled.main`
  color: #666;

  & > h2 {
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
  }
`;