import { createStore } from 'redux';

export const initial = {
  user: {},
  theme: 'dark',
  locale: 'pt-BR'
}

function reducer(state = initial, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default createStore(reducer, initial);