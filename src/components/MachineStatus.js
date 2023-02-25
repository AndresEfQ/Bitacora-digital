import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0;
  width: fit-content;
  background: ${props => props.bgColor};
  color: ${props => props.bgColor === '#fff' ? '#000' : '#fff'};
  border: 1px solid #000;
  font-size: 0.9em;
  font-weight: bold;
`;

const MachineStatus = (props) => {
  
  const status = {
    process: {
      name: 'Proceso',
      color: '#008f18',
    },
    clean: {
      name: 'Limpio',
      color: '#fff',
    },
    toBeCleaned: {
      name: 'Pendiente de Limpieza',
      color: '#e0ce00',
    },
    cleaning: {
      name: 'En Limpieza',
      color: '#05009e',
    },
    maintenance: {
      name: 'Mantenimiento',
      color: '#ff0000',
    },
  }

  console.log(status[props.status], props.status);

  return (
    <StyledDiv bgColor={status[props.status].color}>
        {status[props.status].name}
    </StyledDiv>
  )
}

export default MachineStatus