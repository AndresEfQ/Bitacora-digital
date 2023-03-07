import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  background-color: ${props => props.visible? 
    'rgba(0,0,0,0.7)' :
    'rgba(255, 255, 255, 0)'};
  color: #666;
  height: 95vh;
  position: absolute;
  transition: background-color 300ms ease-out;
  pointer-events: ${props => props.visible ? 'all' : 'none'};
  z-index: 3;
  
  & > div {
    position: relative;
    left: ${props => props.visible ? '0' : '-70%'};
    background-color: #eee;
    opacity: 1;
    width: 70%;
    transition: left 300ms ease-out;
    
    & div {
      border-bottom: 1px solid #ccc;
      padding: 1rem;
    }
  }

  input {
    padding: 0.5rem 0 0.5rem 2rem;
    margin: 0.5rem 1rem;
    width: 80%;
    font-size: 1rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 0.625rem 0.5rem;
    background-size: 1rem;
    position: relative;
    border-radius: 7px;
    border: 1px solid #ddd;
  }

  #sync-icon {
    position: absolute;
    padding: 0;
    z-index: 2;
    top: 1.3rem;
    left: 1.5rem;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    display: ${props => props.hiddenSyncIcon ? "none" : "block"};
  }

  input + * {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
  }

  li {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 7px;
  }

  li:active {
    background-color: rgba(0, 152, 163, 0.2);
  }
`;