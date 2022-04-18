import styled from "styled-components";

const Container = styled.div`
  display: ${props => props.grid ? "grid" : "flex"};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
`;

export default Container;
