import styled from 'styled-components';

const Input = styled.input`
  width: 96%;
  height: 30px;
  margin: 5px 0;
  padding: 0 2%;

  color: ${props => props.theme.action};
  border: 1px solid ${props => props.theme.text};
  outline: none;
  border-radius: 3px;
  background: ${props => props.theme.text};
`

export default Input;