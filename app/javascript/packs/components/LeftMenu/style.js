import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.div`
  width: 250px;
  height: 100vh;

  overflow-y: auto;
  background-color: ${props => props.theme.menu};
`

export const MenuHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 75px;

  font-size: 24px;
  font-weight: bold;
`

export const MenuSection = styled.section`
  width: 100%;
  margin-bottom: 10px;

  & span, a {
    padding-left: 15px;
    line-height: 150%;
  }
`

export const MenuSectionTitle = styled.div`
  width: 100%;
  
  font-size: 18px;
  border-bottom: 1px solid ${props => props.theme.text};
`

export const MenuList = styled.div`
  display: flex;
  flex-flow: column;

  margin: 5px 0;
  
  & a, span {
    font-size: 14px;
    padding: 5px 0 5px 15px;

    transition: .25s;
    cursor: pointer;
  }

  & a:hover, span:hover {
    background-color: ${props => props.theme.action};
  }

  & a.active {
    font-weight: bold;
    background-color: ${props => props.theme.action};
  }

  & i {
    width: 15px;
  }

  &.menu-projects i {
    font-size: 16px;
  }
`