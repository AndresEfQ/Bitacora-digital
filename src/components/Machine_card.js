import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;

  & div {
    margin: 10px;
    display: flex;
    gap: 20px;
  }

  & img {
    border-radius: 5px;
  }
`;

class MachineCard extends React.Component {
  render () {

    return (
      <StyledDiv>
        <h3>{this.props.name}</h3>
        <img src={this.props.img} alt={this.props.name} width="300px" height="200px"/>
        <div>
          <button>Bitácora de uso</button>
          <button>Bitácora de limpieza</button>
        </div>
      </StyledDiv>
    )
  }
}

export default MachineCard;