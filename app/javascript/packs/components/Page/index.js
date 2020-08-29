import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-flow: row nowrap;

  width: 100%;
  
  color: ${props => props.theme.text};
`

export default Page;