import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Menu,
  MenuHome,
  MenuSection,
  MenuSectionTitle,
  MenuList
} from './style';

const LeftMenu = () => {
  return (
    <Menu>
      <MenuHome to="/">Control</MenuHome>
      <MenuSection>
        <MenuSectionTitle>
          <span>Projetos</span>
        </MenuSectionTitle>
        <MenuList className="menu-projects">
          <NavLink to="/project/fmon" activeClassName="active">
            <i className="fas fa-caret-right"></i> FMON
          </NavLink>
          <NavLink to="/project/faculdade" activeClassName="active">
            <i className="fas fa-caret-right"></i> Faculdade
          </NavLink>
          <NavLink to="/project/farmbox" activeClassName="active">
            <i className="fas fa-caret-right"></i> Farmbox
          </NavLink>
        </MenuList>
      </MenuSection>
      <MenuSection>
        <MenuSectionTitle>
          <span>Configurações</span>
        </MenuSectionTitle>
        <MenuList>
          <NavLink to="/myaccount" activeClassName="active">
            <i className="fas fa-user-circle"></i> Minha Conta
          </NavLink>
          <NavLink to="/language" activeClassName="active">
            <i className="fas fa-globe"></i> Idioma
          </NavLink>
          <NavLink to="/themes" activeClassName="active">
            <i className="fas fa-palette"></i> Tema e Cores
          </NavLink>
          <NavLink to="/signout" activeClassName="active">
          <i className="fas fa-sign-out-alt"></i> Sair
          </NavLink>
        </MenuList>
      </MenuSection>
    </Menu>
  )
}

export default LeftMenu;
