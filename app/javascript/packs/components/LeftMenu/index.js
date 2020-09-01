import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ThemeModal from '../../modals/Theme'
import SignOutModal from '../../modals/SignOut'
import LanguageModal from '../../modals/Language'

import {
  Menu,
  MenuHome,
  MenuSection,
  MenuSectionTitle,
  MenuList
} from './style';

const LeftMenu = () => {
  const { t } = useTranslation();

  const [modalTheme, setModalTheme] = useState(false);
  const [modalSignOut, setModalSignOut] = useState(false);
  const [modalSettings, setModalSettings] = useState(false);
  const [modalLanguage, setModalLanguage] = useState(false);

  return (
    <Menu>
      <MenuHome to="/">{t('Task Control')}</MenuHome>
      <MenuSection>
        <MenuSectionTitle>
          <span>{t('Projects')}</span>
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
          <span>{t('Settings')}</span>
        </MenuSectionTitle>
        <MenuList>
          <span onClick={() => setModalSettings(true)}>
            <i className="fas fa-user-circle"></i> {t('My Account')}
          </span>
          <span onClick={() => setModalLanguage(true)}>
            <i className="fas fa-globe"></i> {t('Language')}
          </span>
          <span onClick={() => setModalTheme(true)}>
            <i className="fas fa-palette"></i> {t('Themes and Colors')}
          </span>
          <span onClick={() => setModalSignOut(true)}>
            <i className="fas fa-sign-out-alt"></i> {t('Sign Out')}
          </span>
        </MenuList>
      </MenuSection>
      <ThemeModal show={modalTheme} setShow={setModalTheme} />
      <SignOutModal show={modalSignOut} setShow={setModalSignOut} />
      <LanguageModal show={modalLanguage} setShow={setModalLanguage} />
    </Menu>
  )
}

export default LeftMenu;
