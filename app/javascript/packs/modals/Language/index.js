import React from 'react';
import i18n from '../../locales/i18n'
import { useTranslation } from 'react-i18next';

import Modal from '../../components/Modal'
import { ModalButtons } from '../../components/Modal/style'
import Typography from '../../components/Typography'
import Button from '../../components/Button'

import {
  FlagLabel 
} from './style'

const SignOutModal = (props) => {
  const { t } = useTranslation();

  const _change = e => {
    var lang = e.target.value;
    i18n.changeLanguage(lang)
  }

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <Typography variant="h2" margin="2">{t('Choose your language')}</Typography>
      <FlagLabel>
        <input 
          type="radio"
          name="flag"
          value="en"
          checked={localStorage.getItem('i18nextLng') === 'en'}
          onChange={_change}
        />
        <span>English</span>
      </FlagLabel>
      <FlagLabel>
        <input 
          type="radio"
          name="flag"
          value="pt"
          checked={localStorage.getItem('i18nextLng') === 'pt'}
          onChange={_change}
        />
        <span>Português</span>
      </FlagLabel>
      <ModalButtons>
        <Button color="primary" onClick={() => props.setShow(false)}>
          {t('Go back')}
        </Button>
      </ModalButtons>
    </Modal>
  )
}

export default SignOutModal;
