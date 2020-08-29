import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 250px;
  padding: 15px;

  background-color: ${props => props.theme.menu};
  border-radius: 5px;
`
export const LoginLinks = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  margin: 10px 0 0;

  & a {
    margin: 2px 0;
  }
`