import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import themes from './config/themes';

import Logged from './routes/logged'
import UnLogged from './routes/unlogged'

const App = () => {
  const user = useSelector(state => state.user);
  const themeSelected = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={themes[themeSelected] ?? themes.dark}>
      <BrowserRouter>
        {user.id ?
          <Logged /> :
          <UnLogged /> 
        }
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
