import styled from "styled-components";

export const Container = styled.div`
  z-index: 3;
  grid-area: 1 / 1 / 2 / 13;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  @media (max-width: 620px) {
    justify-content: center;
    margin-top: 65%;
    padding: 0.5rem 0;
    border-top: 12px solid var(--blue);
    border-bottom: 12px solid var(--blue);
  }
  @media (max-height: 740px) {
   margin-top: 100%;
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
