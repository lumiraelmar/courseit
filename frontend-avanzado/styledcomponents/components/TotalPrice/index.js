import styled from 'styled-components';

export const PriceStyles = styled.p`
  font-size: 2rem;
  margin-left: 10px;
`;

export default function TotalPrice({totalPrice}) {
  return (
    <>
      <PriceStyles>Total: ${totalPrice}</PriceStyles>
    </>
  )
}