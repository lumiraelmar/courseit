import styled from 'styled-components';

export const ButtonStyles = styled.button`
  background: white;
  border: 3px solid ${props => props.color};
  padding: 5px;
`;

export default function Button({button, onClick, color}) {
  return (
    <>
      <ButtonStyles onClick={onClick} color={color}>{button}</ButtonStyles>
    </>
  )
}