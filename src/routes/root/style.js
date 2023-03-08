import styled from "styled-components";
import "@fontsource/poppins";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5vh;
  padding: 1vh 2vh;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  background-color: #009ba5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;

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
  margin-top: 5vh;
  padding-bottom: 5vh;
  color: #666;
  height: 100%;
  overflow: hidden;

  & > h2 {
    padding: 0.5rem;
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
  }
`;