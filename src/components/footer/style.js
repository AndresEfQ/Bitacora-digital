import "@fontsource/poppins";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 500;
  background-color: #009ba5;
  color: rgb(255, 255, 255);
  padding: 0.4em;
  text-align: center;
  z-index: 4;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
  &:hover {
    color: black;
  }
`;