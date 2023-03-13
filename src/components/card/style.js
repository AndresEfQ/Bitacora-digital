import styled from "styled-components";

const statusColors = {
  process: "#1ca962",
  cleaning: "#4d88d3",
  clean: "#fff",
  maintenance: "#d34d4d",
  toBeCleaned: "#ffeb3b"
}

export const Container = styled.div`
  height: ${props => props.open ? "20rem" : "6.1rem"};
  overflow-y: hidden;
  font-size: 14px;
  margin: 1rem;
  padding: 1rem;
  background-color: #eee;
  box-shadow: 1px 1px 10px -4px #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;

  & > div:first-child {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 55% 25%;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
    }
  
    & > div:nth-child(2) > h3, div:first-of-type {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  
    & > div:last-child {
      align-self: flex-start;
      align-items: center;
      gap: 0.5rem;
  
      & > div {
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
      }
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    border-radius: 3px;
  }
  li {
    display: flex;
    justify-content: space-between;
    margin: 10px;    
  }
  svg {
    align-self: flex-end;
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & button {
    background-color: #009ba5;
    box-shadow: 0 0 10px -2px #000;
    border: none;
    border-radius: 5px;
    padding: 0.2rem 0.2rem 0 0.2rem;
  }

  #action-button {
    font-family: inherit;
    font-weight: bold;
    padding: 0.55rem 2rem;
    color: #ddd;
  }

  & > div > button, #action-button {
    transition: opacity 300ms ease-out, transform 300ms ease-out 50ms;
    opacity: ${props => props.open ? "1" : "0"};
    transform: ${props => props.open ? "scaleY(1)" : "scaleY(0.5)"};
    transform-origin: top;
  }

  progress {
    margin-top: 10px;
    border: none; 
    width: 92%;
    height: 5px;
    margin-left: 3%;
  }

  progress::-webkit-progress-bar {
    border-radius: 7px;
    box-shadow: inset 0 0 10px -5px rgba(0, 0, 0, 0.9);
    background-color: #f5f9f9;
  }
  progress::-webkit-progress-value {
    background-color: ${props => {
      if (props.cleanTimeRemaining >= 0.5) {
        return "#4dd390";
      } else if (props.cleanTimeRemaining >= 0.25) {
        return "#ffeb3b";
      } else if (props.cleanTimeRemaining >= 0.1) {
        return "#f58421";
      } else {
        return "#d34d4d"
      }
      }
    };
    border-radius: 7px;
  }
`;

export const StatusIndicator = styled.div`
  height: 40px;
  width: 30px;
  border-radius: 50%;
  background-color: ${props => statusColors[props.status]};
  box-shadow: 0 0 10px -2px #000;
  position: relative;
  transition: transform 300ms ease-out;
  transform: ${props => props.open ? "rotate(180deg)" : "rotate(0deg)"};

  &:before {
    content: "";
    position: absolute;
    height: 37px;
    width: 27px;
    background-color: ${props => props.status === "clean" ? "#ddd" : "#fff"};
    border-radius: 50%;
    top: -1px;
    left: -1px;
  }

  &:after {
    content: "";
    position: absolute;
    height: 33px;
    width: 23px;
    background-color: ${props => statusColors[props.status]};
    border-radius: 50%;
    top: 0px;
    left: 0px;
  }
`;

export const ProgressScale = styled.div`
  margin-top: 5px;
  position: relative;
  width: 100%;
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  span {
    position: relative;
  }

  span:before {
    content: "";
    position: absolute;
    height: 8px;
    width: 1px;
    background-color: #fff;
    z-index: 2;
    left: 50%;
    bottom: 18px;
    outline: 1px solid #aaa
  }
`;
