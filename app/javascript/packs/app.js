import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import themes from './config/themes';

import Login from './pages/Login'
import Logged from './pages/Logged'

const App = () => {
  const user = useSelector(state => state.user);
  const themeSelected = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={themes[themeSelected] ?? themes.dark}>
      <BrowserRouter>
        {user.id ?
          <Logged /> :
          <Login /> 
        }
      </BrowserRouter>        
    </ThemeProvider>
  )
}

export default App;
