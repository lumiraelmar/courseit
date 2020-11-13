import styled from 'styled-components';

export const CardStyles = styled.div`
border-left: 10px solid ${props => props.color};
border-top: 5px solid #555;
border-right: 5px solid #555;
border-bottom: 5px solid #555;
width: 500px;
padding: 10px;
margin: 10px;
&:hover {
  box-shadow: 5px 10px 15px 5px rgba(0,0,0,0.5);
}
`;
export const TitleStyles = styled.h1`
  font-size: 2rem;
`;

export const TagStyles = styled.p`
  background: ${(props) => props.color};
  padding: 10px;
  color: #fafafa;
  display: inline;
  margin-right: 10px;
`;

export const PriceStyles = styled.p`
  font-size: 1.2rem;
`;