import React from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../../components/Modal'
import { ModalButtons } from '../../components/Modal/style'
import Typography from '../../components/Typography'
import Button from '../../components/Button'

import CreateTheme from './createTheme';
import {
  Themes,
  ThemeInput
} from './style';

const ThemeModal = (props) => {
  const dispatch = useDispatch();

  const changeTheme = (e) => {
    var theme = e.target.value;
    localStorage.setItem('theme', theme)
    dispatch({type: 'changeTheme', theme: theme})
  }

  return (
    <Modal show={props.show} setShow={props.setShow} width="390px">
      <Typography variant="h2" margin="2">Escolha um tema</Typography>
      <Themes>
        <ThemeInput>
          <input
            type="radio"
            name="theme"
            value='dark'
            onChange={changeTheme}
            checked={localStorage.getItem('theme') === 'dark'}
          />
          <img src="/assets/themes/dark.svg" title="Dark"/>
        </ThemeInput>
        <ThemeInput>
          <input 
            type="radio"
            name="theme"
            value='light'
            onChange={changeTheme}
            checked={localStorage.getItem('theme') === 'light'}
          />
          <img src="/assets/themes/light.svg" title="Light"/>
        </ThemeInput>
        <ThemeInput>
          <input 
            type="radio"
            name="theme"
            value='dracula'
            onChange={changeTheme}
            checked={localStorage.getItem('theme') === 'dracula'}
          />
          <img src="/assets/themes/dracula.svg" title="Dracula"/>
        </ThemeInput>
        <ThemeInput>
          <input 
            type="radio"
            name="theme"
            value='created'
            onChange={changeTheme}
            checked={localStorage.getItem('theme') === 'created'}
          />
          <img src="/assets/themes/new.svg" title="New"/>
        </ThemeInput>
      </Themes>
      <CreateTheme />
      <ModalButtons>
        <Button width="50%" color="primary" onClick={() => props.setShow(false)}>
          Voltar
        </Button>
      </ModalButtons>
    </Modal>
  )
}

export default ThemeModal;
