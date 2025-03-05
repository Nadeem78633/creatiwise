import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    padding: 60px;
  }
  .star-container {
    display: flex; /* Align items in a row */
    align-items: center; /* Vertically center the items */
    gap: 10px; 
    margin-bottom: 20px;
  }

  .star-icon {
    width: 24px; /* Adjust size as needed */
    height: auto;
  }

  

  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }
  }
`;
export default Wrapper