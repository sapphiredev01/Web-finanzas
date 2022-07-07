import styled from "styled-components";
import device from "../../utils/Variables";

export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const ContentText = styled.div`
  flex-basis: 60%;
  text-align: justify;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const ContentImages = styled.div`
  flex-basis: 40%;
  margin-left: 10%;
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 13rem;
  margin-right: 0rem;
`;

export const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 16rem;
  position: relative;
  margin-bottom: -10%;
  margin-left: 40%;
  @media ${device.tablet} {
    margin-right: 1rem;
  }
`;
