import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  height: 100vh;
  overflow-y: auto;
  
  background-color: ${props => props.theme.bg};
`

export default Body;