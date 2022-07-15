import styled from "styled-components";
import { device } from "../../utils/Variables";
import Slider from "react-slick";

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000011;
  border-radius: 15px;
  padding: 2rem;
  overflow: hidden;
  width: 100%;
  margin: 3rem 1rem;
  
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 0;
`;

export const Symbol = styled.p`
  font-size: clamp(1rem, 1vw, 2rem);
  margin-bottom: 1rem;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  width: 100%;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 80%;
    flex-direction: column;
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

export const TdChange = styled.td`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
  padding-left: 0.5rem;
`;

export const DivChange = styled.div`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
  padding-left: 0.5rem;
`;

export const Table = styled.table`
  height: 100%;
  width: 100%;
  margin: auto;
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
    font-size: 14px;
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
  box-shadow: 0px 20px 30px #00000011;
  border-radius: 5px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  :not(:last-child) {
    margin-top: 1rem;
  }
  & div {
    float: left;
  }
`;
