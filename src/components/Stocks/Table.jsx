/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import * as S from "./Styles";

const Table = ({ coins }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 820);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 820);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <S.Card>
      <S.Table>
        <thead>
          <tr>
            <th>Moneda</th>
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
                  <S.Img src={coin.image} alt={coin.name} />
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
                <S.TdChange change={coin.price_change_percentage_24h}>
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </S.TdChange>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.Card>
  );
};

export default Table;
