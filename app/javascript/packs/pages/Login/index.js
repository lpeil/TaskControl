import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { signIn } from '../../api/sign';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

import {
  LoginPage,
  LoginForm,
  LoginLinks
} from './style'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _submit = e => {
    e.preventDefault();

    signIn({email, password}).then(data => {
      console.log(data);
    })
  }

  return (
    <LoginPage>
      <LoginForm onSubmit={_submit}>
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
        <LoginLinks>
          <Link to="/signup">Registrar-se</Link>
          <Link to="/recoverPassword">Recuperar Senha</Link>
        </LoginLinks>
      </LoginForm>
    </LoginPage>
  )
}

export default Login;
