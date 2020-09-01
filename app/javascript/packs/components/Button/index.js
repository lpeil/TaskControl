import styled from 'styled-components';

const Button = styled.button`
  width: ${props => props.width ?? '100%'};
  margin: 5px 0;
  height: 35px;

  color: ${props => props.theme.text};
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 3px;
  background: ${props => props.theme[props.color] ?? props.theme.primary};

  cursor: pointer;
`

export default Button;