import React from "react";
import styled from "styled-components";
import "@fontsource/inter";
import MachineStatus from "./MachineStatus";

const StyledDiv = styled.div`
  padding-top: 10px;
  display: flex;
  font-family: "inter", Arial, Helvetica, sans-serif;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;

  & header {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > * {
      margin: 0;
    }
  }
  
  & img {
    border-radius: 5px;
    cursor: pointer;
  }

  & div {
    margin: 10px;
    display: flex;
    gap: 20px;
  }

  & button {
    cursor: pointer;
    font-family: inherit;
    display: flex;
    justify-content: center;
  }
`;

const MachineCard = (props) => {

  return (
    <StyledDiv>
      <header>
        <h2>{props.name}</h2>
        <MachineStatus status={props.status} />
      </header>
      <img 
        src={props.img} 
        alt={props.name} 
        width="300px" 
        height="300px"
        onClick={props.handleImgClick}
      />
      <div>
        <button onClick={props.handleUseLog}>Bitácora de uso</button>
        <button onClick={props.handleCelaningLog}>Bitácora de limpieza</button>
      </div>
    </StyledDiv>
  )
}

export default MachineCard;