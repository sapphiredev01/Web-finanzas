import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Container;
