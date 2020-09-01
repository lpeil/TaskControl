import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: ${props => props.width ?? '250px'};
  height: fit-content;
  max-height: 75vh;
  padding: 15px 20px;

  color: ${props => props.theme.text};
  border-radius: 5px;
  background-color: ${props => props.theme.menu};

  overflow-y: auto;
`

export const ModalButtons = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-around;

  width: 100%;

  & button {
    margin: 0 10px;
  }
`