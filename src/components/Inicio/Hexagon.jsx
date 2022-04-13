import styled from "styled-components";

const Image = styled.img`
    background-image: url(${props => props.src});
    transform: matrix(-0.47, 0.88, -0.88, -0.47, 0, 0);
    height: 100px;
`;

const Hexagon = styled.div`
    display: flex;
    width: 100%;
    height: auto;
`;

export { Image, Hexagon };