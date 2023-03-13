import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 1rem;
  position: fixed;
  top: 5vh;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 3;
  overflow: hidden;

  h2 {
    padding-top: 1rem;
  }

  h3 {
    padding-bottom: 1rem;
  }

  & > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    border-radius: 5px;
  }

  & p {
    margin: 1rem;
    text-align: justify;
  }

  & button {
    background-color: #009ba5;
    box-shadow: 0 0 10px -2px #000;
    border: none;
    border-radius: 5px;
    padding: 0.2rem 0.2rem 0 0.2rem;
    font-family: inherit;
    font-weight: bold;
    padding: 0.55rem 2rem;
    color: #ddd;
    margin: 1rem;
  }
`;