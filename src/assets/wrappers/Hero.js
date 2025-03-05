import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center; /* Vertically align text and rectangle */
  gap: 20px; /* Add space between items */
  justify-content: center; /* Center the content horizontally */
  flex-wrap: wrap; /* Ensure responsiveness — items will wrap on smaller screens */
  .container {
    margin: 60px;
  }
  .dora-container {
    padding-left: 60px;

    gap: 30px;
  }
  .doradesign {
    margin: 0 40px;
  }

  .san {
    font-family: "Syne", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 80px;
    text-transform: uppercase;
    text-align: center; 
  }

  @media (max-width: 768px) {
    .san {
      font-size: 48px;
      line-height: 60px;
    }
    .rectangle {
      height: 50px;
      width: 50px;
      object-fit: inherit;
    }
    .container {
      margin: 20px;
    }
    .intro-container {
      margin: 20px;
    }
  }

  @media (max-width: 480px) {
    .san {
      font-size: 32px;
      line-height: 40px;
      padding: 10px;
    }
    .rectangle {
      height: 30px;
      width: 30px;
      object-fit: inherit;
    }
    .container {
      margin: 0px;
    }
    .dora-container {
      padding-left: 0px;
      padding-right: 0px;
      gap: 10px;
    }
    .doradesign {
      height: 30px;
      width: 40px;
    }
    .intro-container {
      margin: 20px;
    }
  }
`;

export default Wrapper;
