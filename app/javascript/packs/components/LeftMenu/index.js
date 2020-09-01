import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ThemeModal from '../../modals/Theme'
import SignOutModal from '../../modals/SignOut'

import {
  Menu,
  MenuHome,
  MenuSection,
  MenuSectionTitle,
  MenuList
} from './style';

const LeftMenu = () => {
  const [modalTheme, setModalTheme] = useState(false);
  const [modalSignOut, setModalSignOut] = useState(false);
  const [modalSettings, setModalSettings] = useState(false);
  const [modalLanguage, setModalLanguage] = useState(false);

  return (
    <Menu>
      <MenuHome to="/">Task Control</MenuHome>
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
          <span onClick={() => setModalSettings(true)}>
            <i className="fas fa-user-circle"></i> Minha Conta
          </span>
          <span onClick={() => setModalLanguage(true)}>
            <i className="fas fa-globe"></i> Idioma
          </span>
          <span onClick={() => setModalTheme(true)}>
            <i className="fas fa-palette"></i> Tema e Cores
          </span>
          <span onClick={() => setModalSignOut(true)}>
            <i className="fas fa-sign-out-alt"></i> Sair
          </span>
        </MenuList>
      </MenuSection>
      <ThemeModal show={modalTheme} setShow={setModalTheme} />
      <SignOutModal show={modalSignOut} setShow={setModalSignOut} />
    </Menu>
  )
}

export default LeftMenu;
