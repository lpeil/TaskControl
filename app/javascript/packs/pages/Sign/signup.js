import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { signUp } from '../../api/sign';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

import {
  SignPage,
  SignForm,
  SignLinks
} from './style'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const _submit = e => {
    e.preventDefault();

    if(password != repeatPassword) {
      return false
    }

    signUp({
      user: {
        name: name, 
        email: email, 
        password: password, 
        password_confirmation: repeatPassword
      }
    }).then((data) => {
      console.log(data);
    })
  }

  return (
    <SignPage>
      <SignForm onSubmit={_submit}>
        <Typography variant="h2" margin="2">Registrar-se</Typography>
        <Input 
          type="name"
          placeholder="Seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          type="email"
          placeholder="Seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
          type="password"
          placeholder="Repetir senha"
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <Button type="submit">Registrar-se</Button>
        <SignLinks>
          <Link to="/">Fazer login</Link>
          <Link to="/recover">Recuperar senha</Link>
        </SignLinks>
      </SignForm>
    </SignPage>
  )
}

export default Register;
