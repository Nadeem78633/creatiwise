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
  .card {
    background-color: var(--card-bg);
    border-radius: 30px;
    margin-bottom: 20px;
    padding: 5px;
  }
  .ds-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distributes space evenly */
    height: 100%; /* Ensures it takes the full height of the grid cell */
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .description {
    height: 54px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    color: #ffffff;
    margin-bottom: 10px;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 166px;
    height: 30px;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 10px;

    width: 91px;
    height: 30px;
    border: 1px solid #ffffff;
    border-radius: 100px;
  }

  .study {
    margin-top: auto; /* Pushes the button to the bottom */
    padding: 16px 32px;
    gap: 10px;
    width: 184px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 100px;
  }

  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: #ffffff;
      margin-bottom: 20px;
    }
    .button-container {
      margin-top: 30px;
    }
    .study {
      margin-top: 30px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: #ffffff;
      margin-bottom: 20px;
    }
    .button-container {
      margin-top: 30px;
    }
    .study {
      margin-top: 30px;
    }
  }
`;
export default Wrapper;
