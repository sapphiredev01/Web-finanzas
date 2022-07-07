import styled from "styled-components";
import device from "../../utils/Variables";
import Slider from "react-slick";

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  padding: 1rem;
  overflow: hidden;
  width: fit-content;
  @media ${device.tablet} {
    :not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
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
  padding-left: 0.5rem;
`;

export const Table = styled.table`
  height: 100%;
  width: auto;
  text-align: left;
  border-collapse: collapse;
  & th {
    font-size: 14px;
    padding-bottom: 10px;
  }
  & td {
    padding-top: 3%;
    padding-bottom: 3%;
    padding-right: 1rem;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    text-align: center;
    & td {
      font-size: small;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  overflow: hidden;
  width: 70%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSlider = styled(Slider)`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  & div {
    float: left;
  }
  @media (max-width: 768px) {
  }
`;
