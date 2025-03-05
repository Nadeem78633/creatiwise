import styled from "styled-components";

const Wrapper = styled.section`
  .project {
    text-decoration: none;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .project-active {
    background-color: white;
    color: black;
  }
  .logo {
    width: 40px;
    height: 22px;
    object-fit: contain;
  }
  .app-bar {
    box-shadow: none;
    background-color: var(--bg-color);
    padding-left: 40px;
    padding-right: 40px;
  }
  .button {
    border: 1px solid white; 
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none; 
    color: white; 
    font-weight: bold; 
    transition: background 0.3s, color 0.3s;
  }

  .button:hover {
    background: white;
    color: black; 
  }
`;

export default Wrapper;
