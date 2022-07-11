import styled from "styled-components";
import { device } from "../../../utils/Variables";

export const Container = styled.div`
  z-index: 3;
  grid-area: 1 / 1 / 2 / 13;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  @media ${device.tablet} {
    justify-content: center;
    padding: 2rem;
  }
`;

export const MediaItem = styled.button`
  padding: 0 1.3rem;
  font-size: 1.7rem;
  border-radius: 5px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    transition: 0.2s ease-in-out;
  }
`;
