import styled from "styled-components";
import Img from "../../images/business.jpg";
import device from "../../utils/Variables";

export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
flex-basis: 40%;
padding: 0 2rem 0 0;
@media ${device.tablet} {
    padding: 0;
  }
`;

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  margin: 5% 0 0 0;
  @media ${device.tablet} {
    margin: 5% 0 20% 0;
  }
`;

export const Image = styled.img`
  flex-basis: 60%;
  box-shadow: 0px 3px 6px #00000029;
  content: url(${Img});
  align-self: center;
  width: 50%;
  display: ${(props) => (props.desktop ? "block" : "none")};
  @media ${device.tablet} {
    width: 80vw;
    display: ${(props) => (props.movil ? "block" : "none")};
  }
`;

export const Description = styled.ul`
font-weight: bold;
font-size: clamp(14px, 4vw, 20px);
@media (max-height: 667px) and (max-width: 375px) {
    font-size: .8rem;
  }
`;