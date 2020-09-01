import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  signOut
} from '../../api/sign'

import Modal from '../../components/Modal'
import { ModalButtons } from '../../components/Modal/style'
import Typography from '../../components/Typography'
import Button from '../../components/Button'

const SignOutModal = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const _signOut = () => {
    localStorage.removeItem('token');
    signOut();
    dispatch({type: 'signOut'});
    dispatch({type: 'setAlert', alert: {
      type: 'success',
      text: 'Você saiu com sucesso'
    }})
    props.setShow(false);
    history.push('/');
  }

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <Typography variant="h2" margin="2">{t('Do you want to leave?')}</Typography>
      <ModalButtons>
        <Button color="primary" onClick={() => props.setShow(false)}>
          {t('Go back')}
        </Button>
        <Button color="danger" onClick={_signOut}>
          {t('Sign Out')}
        </Button>
      </ModalButtons>
    </Modal>
  )
}

export default SignOutModal;
