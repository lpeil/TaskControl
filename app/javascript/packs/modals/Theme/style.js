import styled from 'styled-components';

export const Themes = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;
  margin: 10px 0;
`;

export const ThemeInput = styled.label`
  display: flex;
  flex-flow: row nowrap;

  & img {
    width: 175px;
    height: 100px;
    margin: 5px 0 5px -20px;
  }
`

export const NewTheme = styled.div`
  display: ${props => props.show ? 'show' : 'none'};
  flex-flow: column nowrap;
  justify-content: center;

  width: 100%;
  margin: 5px 0 10px;
`

export const NewThemeLabel = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;

  margin: 2px 0;
  
  & span {
    width: 150px;
  }
`