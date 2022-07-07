import styled from "styled-components";
import device from "../../utils/Variables";

export const Title = styled.h1`
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
  @media ${device.tablet} {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const Text = styled.div`
  font-weight: bold;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  @media ${device.tablet} {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  padding: 1rem;
  overflow: hidden;
  width: fit-content;
  @media ${device.tablet} {
  }
`;

export const RowItem = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
`;

export const Img = styled.img`
  width: 12px;
  height: 12px;
  padding-right: 0.3rem;
`;

export const TdChange = styled.span`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
  padding-left: 0.5rem
`;
