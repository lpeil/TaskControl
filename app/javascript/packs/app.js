import React, { useEffect, useState } from  'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import themes from './config/themes';
import { signCheck } from './api/sign'

import Logged from './routes/logged'
import UnLogged from './routes/unlogged'

import SnackBar from './components/SnackBar';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const createdTheme = useSelector(state => state.createdTheme);
  const themeSelected = useSelector(state => state.theme);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    signCheck().then(data => {
      if(data.authenticated) {
        dispatch({type: 'setUser', user: data.user})
      }
      setLoading(false);
    })
  }, [])

  return (
    <ThemeProvider theme={themeSelected === 'created' ? createdTheme : themes[themeSelected] ?? themes.dark}>
      {!loading ? 
        <BrowserRouter>
          <SnackBar />
          {user.id ?
            <Logged /> :
            <UnLogged /> 
          }
        </BrowserRouter> :
        null
      }
    </ThemeProvider>
  )
}

export default App;
