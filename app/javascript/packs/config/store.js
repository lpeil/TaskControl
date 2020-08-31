import { createStore } from 'redux';

export const initial = {
  alerts: [],
  user: {},
  theme: 'dark',
  locale: 'pt-BR'
}

function reducer(state = initial, action) {
  switch(action.type) {
    case 'setAlert':
      alertTimeOut(action.alert, state)
      return {...state, alerts: [...state.alerts, action.alert]}
    case 'setAlerts':
      return {...state, alerts: action.alerts }
    case 'removeAlerts':
      return {...state, alerts: [] }
    case 'setUser':
      return {...state, user: action.user }
    default:
      return state;
  }
}

const alertTimeOut = (alert, state) => {
  const newAlerts = state.alerts.filter(item => item != alert);
}

export default createStore(reducer, initial);