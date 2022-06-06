import React, { useState, useEffect } from "react";

import styled from "styled-components";

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 100%;
  width: auto;
  @media (max-width: 1050px) {
    margin-left: 3rem;
  }
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 11 / 13;
    margin-left: 0;
    font-size: 0.8rem;
  }
`;

export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 3 / 13;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 1 / 13;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font: Helvetica Neue;
  font-size: 3em;
  text-align: start;
  color: #034e80;
  letter-spacing: 0px;
  opacity: 1;
  text-transform: uppercase;
  padding-left: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Table = styled.table`
  grid-area: 3 / 1 / 13 / 13;
  margin-left: 2rem;
  height: 100%;
  width: auto;
  text-align: center;
  border-collapse: collapse;
  & th {
    border-bottom: 1px solid #034e80;
  }
  & td {
    border-bottom: 0.5px solid #034e80;
  }
  @media (max-width: 768px) {
    grid-area: 2 / 1 / 12 / 12;
  }
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
  padding-right: .5rem;
`;

export const TdChange = styled.td`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
`;

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
          <th>#</th>
          <th style={{ width: "30%" }}>Moneda</th>
          <th>Precio</th>
          <th>Capital de mercado</th>
          {isDesktop && (
            <>
              <th>Volumen en 24h</th>
              <th>Cambio</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
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
              <td>{coin.current_price} US$</td>
              {isDesktop ? (
                <>
                  <td>{coin.total_volume} US$</td>
                  <td>{coin.market_cap} US$</td>
                </>
              ) : (
                <></>
              )}
              <TdChange change={coin.price_change_percentage_24h}>
                {coin.price_change_percentage_24h} %
              </TdChange>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
