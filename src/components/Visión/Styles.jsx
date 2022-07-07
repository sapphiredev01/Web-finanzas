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
  text-align: justify;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 13rem;
  margin-right: 20%;
`;

export const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 16rem;
  position: relative;
  margin-bottom: -5%;
  @media ${device.tablet} {
    margin-right: 1rem;
  }
`;
