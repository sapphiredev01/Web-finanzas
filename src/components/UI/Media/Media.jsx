import styled from "styled-components";

export const Media = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  display: flex;
  justify-content: flex-end;
  margin-top: -1em;
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