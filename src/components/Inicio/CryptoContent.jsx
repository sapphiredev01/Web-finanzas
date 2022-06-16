import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Table = styled.table`
  
  height: 100%;
  width: auto;
  text-align: center;
  border-collapse: collapse;
  & th {
    border-bottom: 1px solid #034e80;
  }
  & td {
    border-bottom: 0.5px solid #034e80;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: large;
  }
  @media (max-width: 768px) {
    & td {
    font-size: small;
  }
  }
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
  padding-right: .3rem;
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
                <th>Cambio</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => {
            const precio = coin.current_price.toLocaleString('en-US', {style: 'currency',currency: 'USD'});
            const capital = coin.market_cap.toLocaleString('en-US', {style: 'currency',currency: 'USD'});
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
                <td>{precio} US</td>
                {isDesktop ? (
                  <>
                    <td>{capital} US</td>
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
  