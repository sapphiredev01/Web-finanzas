import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Item from "./Item";

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

export const Img = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 0.3rem;
`;

export const TdChange = styled.td`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
`;

export const Row = styled.div`
  grid-area: 1 / 2 / 2 / 13;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 0 0;
  padding: 1rem 0;
  overflow: hidden;
  height: 5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSlider = styled(Slider)`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  grid-area: 2 / 3 / 2 / 12;
  height: auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  & div {
    float: left;
  }
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    margin-bottom: 15rem;
    width: 90vw;
  }
`;

export const CryptoRow = ({ coins }) => {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    variableWidth: true,
    arrows: false,
  };
  return (
    <StyledSlider {...settings}>
      {coins.map((coin, index) => {
        return <Item key={index} coin={coin} />;
      })}
    </StyledSlider>
  );
};

export const TableRender = ({ coins }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <Table>
      <thead>
        <tr>
          <th style={{}}>Moneda</th>
          <th>Precio</th>
          <th>Capital de mercado</th>
          {isDesktop && (
            <>
              <th>Cambio</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => {
          const precio = coin.current_price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          const capital = coin.market_cap.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          return (
            <tr key={index}>
              <td>
                <Img src={coin.image} alt={coin.name} />
                <span>{coin.name}</span>
                {isDesktop && (
                  <>
                    <span
                      style={{
                        textTransform: "uppercase",
                        opacity: "50%",
                        paddingLeft: "1rem",
                        fontSize: "0.8rem",
                      }}
                    >
                      {coin.symbol}
                    </span>
                  </>
                )}
              </td>
              <td>{precio} US</td>
              {isDesktop ? (
                <>
                  <td>{capital} US</td>
                </>
              ) : (
                <></>
              )}
              <TdChange change={coin.price_change_percentage_24h}>
                {coin.price_change_percentage_24h.toFixed(2)} %
              </TdChange>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
