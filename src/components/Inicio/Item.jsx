import styled from "styled-components";

 const RowItem = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  border-bottom: 0.5px solid #034e8045;
`;

 const Img = styled.img`
  width: 12px;
  height: 12px;
  padding-right: 0.3rem;
`;

 const TdChange = styled.span`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
  padding-left: 0.5rem
`;

const Item = ({coin}) => { 
return (
    <RowItem>
      <Img src={coin.image} alt={coin.name} />
      <span>{coin.symbol.toUpperCase()}</span>
      <TdChange change={coin.price_change_percentage_24h}>
        {coin.price_change_percentage_24h.toFixed(2)} %
      </TdChange>
    </RowItem>
  );
}

export default Item;