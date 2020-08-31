import styled from 'styled-components';

export const Snack = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-flow: column-reverse nowrap;
  
  width: 100%;
  bottom: 15px;
  right: auto;

  z-index: 10;
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  
  width: fit-content;
  padding: 5px 15px;
  margin: 5px 0;

  color: ${props => props.theme.text};
  border-radius: 5px;
  background-color: ${props => props.theme[props.type]};

  & span {
    margin: 0 10px;
    font-weight: bold;
  }

  & .action {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    border-radius: 50%;
    transition: .4s;
    cursor: pointer;
  }

  & .action:hover {
    background-color: rgba(0, 0, 0, 0.25)
  }
`