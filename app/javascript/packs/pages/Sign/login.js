import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { signIn } from '../../api/sign';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

import {
  SignPage,
  SignForm,
  SignLinks
} from './style'

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _submit = e => {
    e.preventDefault();

    signIn({email, password}).then(data => {
      if(data.user) {
        dispatch({type: 'setAlert', alert: {
          type: 'success',
          text: 'Login feito com sucesso'
        }})
        dispatch({type: 'setUser',user: data.user})
        localStorage.setItem('token', data.token)
      } else {
        dispatch({type: 'setAlert', alert: {
          type: 'danger',
          text: data.error
        }})
      }
    })
  }

  return (
    <SignPage>
      <SignForm onSubmit={_submit}>
        <Typography variant="h2" margin="2">Entrar</Typography>
        <Input 
          type="email"
          placeholder="Insira seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Inserir senha" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        <SignLinks>
          <Link to="/signup">Registrar-se</Link>
          <Link to="/recoverPassword">Recuperar Senha</Link>
        </SignLinks>
      </SignForm>
    </SignPage>
  )
}

export default Login;
