import React from "react";
import styled from "styled-components";
import MachineCard from "./MachineCard";
import machines from "../Data/machines";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  background-color: rgb(120, 120, 120);
  padding: 20px;
`;

const Main = () => {

  const handleImgClick = () => {
    //react-router?
  }

  const handleUseLog = () => {

  }

  const handleCelaningLog = () => {

  }

  return (
    <StyledMain>
      {machines.map((machine) => {
        return (
          <MachineCard 
            name={machine.name} 
            img={machine.img} 
            status={machine.status} 
            lastCleanedDate={machine.lastCleanedDate}
            handleImgClick={handleImgClick}
            handleUseLog={handleUseLog}
            handleCelaningLog={handleCelaningLog}
          />
        )
      })}
    </StyledMain>
  )
}

export default Main;
