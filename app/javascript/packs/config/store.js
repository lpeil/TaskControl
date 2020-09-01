import { createStore } from 'redux';

export const initial = {
  alerts: [],
  user: {},
  theme: localStorage.getItem('theme') ?? 'dark',
  createdTheme: JSON.parse(localStorage.getItem('createdTheme')) ?? {},
  locale: 'pt-BR'
}

function reducer(state = initial, action) {
  switch(action.type) {
    case 'setAlert':
      return {...state, alerts: [...state.alerts, action.alert]}
    case 'setAlerts':
      return {...state, alerts: action.alerts }
    case 'removeAlerts':
      return {...state, alerts: [] }
    case 'setUser':
      return {...state, user: action.user }
    case 'signOut':
      return {...state, user: {} }
    case 'changeTheme':
      return {...state, theme: action.theme }
    case 'setCreatedTheme':
      return {...state, createdTheme: action.theme }
    default:
      return state;
  }
}

export default createStore(reducer, initial);