import styled from "styled-components";
import { device } from "../../utils/Variables";


export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  padding: 3rem;
  box-shadow: 0px 20px 30px #00000011;
  overflow: hidden;
  height: auto;
  width: 30%;
  @media ${device.tablet} {
    padding: 0;
    margin-top: 2rem;
    width: 80%;
  }
`;

export const Description = styled.ul`
  margin-top: 28rem;
  color: white;
  background-color: #00000099;
  font-weight: bold;
  font-size: clamp(13px, 2.5vw, 16px);

  li{
    padding: 0.3rem;
  }

  @media ${device.laptopL} {
    margin-top: 18rem;
  }
`;
