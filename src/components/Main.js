import React from "react";
import styled from "styled-components";
import MachineCard from "./Machine_card";
import machines from "../Data/machines";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  background-color: rgb(120, 120, 120);
  padding: 20px;
`;

class Main extends React.Component {

  render () {
    return (
      <StyledMain>
        {machines.map((machine) => <MachineCard name={machine.name} img={machine.img}/>)}
      </StyledMain>
    )
  }
}

export default Main;