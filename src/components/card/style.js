import styled from "styled-components";

const statusColors = {
  process: "#4dd390",
  cleaning: "#4d88d3",
  clean: "#fff",
  maintenance: "#d34d4d",
  toBeCleaned: "#ffeb3b"
}

export const Container = styled.div`
  font-size: 14px;
  margin: 1rem;
  padding: 1rem;
  gap: 1rem;
  background-color: #eee;
  box-shadow: 1px 1px 10px -4px #000;
  border-radius: 5px;
  display: flex;
  align-items: center;

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  & > div:nth-child(2) {
    flex: 1;
  }

  & > div:last-child {
    gap: 0.5rem;
  }

  progress {
    margin-top: 10px;
    border: none; 
    width: 100%;
    height: 5px;
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
  box-shadow: 0 0 10px -5px #000;
  position: relative;

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
