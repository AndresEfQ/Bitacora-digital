import React from "react";
import "@fontsource/poppins";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(120, 120, 120);
  color: rgb(255, 255, 255);
  font-family: "Poppins", serif;
  font-weight: 900;
  font-size: 3em;
  text-align: center;
  height: 5rem;
`;

class Header extends React.Component {
  render () {
    return (
      <StyledHeader>Bitácora Digital</StyledHeader>
    )
  }
}

export default Header;