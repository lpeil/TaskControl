import api from './api'

export const signIn = (params = {}) => (
  api.post('/sign/in', params).then((response) => response.data)
)

export const signOut = () => (
  api.delete('/sign/out').then((response) => response.data)
)

export const signCheck = () => (
  api.get('/sign/check').then((response) => response.data)
)