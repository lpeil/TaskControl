import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  NewTheme,
  NewThemeLabel
} from './style'

const CreateTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const createdTheme = useSelector(state => state.createdTheme);

  const [bg, setBG]           = useState(createdTheme.bg);
  const [menu, setMenu]       = useState(createdTheme.menu);
  const [primary, setPrimary] = useState(createdTheme.primary);
  const [action, setAction]   = useState(createdTheme.action);
  const [text, setText]       = useState(createdTheme.text);

  const changeColor = (name, color) => {   
    var newTheme = createdTheme;
    newTheme[name] = color;

    dispatch({type: 'setCreatedTheme', theme: newTheme});
    localStorage.setItem('createdTheme', JSON.stringify(newTheme));
  }

  return (
    <NewTheme show={theme === 'created'} >
      <NewThemeLabel>
        <span>Background</span>
        <input 
          type="color"
          value={bg}
          onChange={e => {
            setBG(e.target.value)
            changeColor('bg', e.target.value)
          }}
        />
      </NewThemeLabel>
      <NewThemeLabel>
        <span>Menu</span>
        <input 
          type="color"
          value={menu}
          onChange={e => {
            setMenu(e.target.value)
            changeColor('menu', e.target.value)
          }}
        />
      </NewThemeLabel>
      <NewThemeLabel>
        <span>Cor primária</span>
        <input
          type="color"
          value={primary}
          onChange={e => {
            setPrimary(e.target.value)
            changeColor('primary', e.target.value)
          }}
        />
      </NewThemeLabel>
      <NewThemeLabel>
        <span>Cor segundária</span>
        <input
          type="color"
          value={action}
          onChange={e => {
            setAction(e.target.value)
            changeColor('action', e.target.value)
          }}
        />
      </NewThemeLabel>
      <NewThemeLabel>
        <span>Texto</span>
        <input
          type="color"
          value={text}
          onChange={e => {
            setText(e.target.value)
            changeColor('text', e.target.value)
          }}
        />
      </NewThemeLabel>
    </NewTheme>
  )
}

export default CreateTheme;
