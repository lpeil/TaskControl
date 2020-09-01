import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  signOut
} from '../../api/sign'

import Modal from '../../components/Modal'
import { ModalButtons } from '../../components/Modal/style'
import Typography from '../../components/Typography'
import Button from '../../components/Button'

const SignOutModal = (props) => {
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
      <Typography variant="h2" margin="2">Deseja sair?</Typography>
      <ModalButtons>
        <Button color="primary" onClick={() => props.setShow(false)}>
          Voltar
        </Button>
        <Button color="danger" onClick={_signOut}>
          Sair
        </Button>
      </ModalButtons>
    </Modal>
  )
}

export default SignOutModal;
