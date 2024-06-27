import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputPadrao from '../../components/InputPadrao/InputPadrao';
import Layout from '../../components/Layout/Layout';
import Botao from '../../components/Botao/Botao';
import OuComLinha from '../../components/oucomlinha.css/OuComLinha';
import "./TelaLogin.css";


import logoImage from '../../assets/logo-login.png';

function TelaLogin({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleCadastroClick = () => {
    navigate('/cadastro');
  };

  return (
    <Layout>
      <div className="espacamento">
        <img src={logoImage} alt="Logo da Aplicação" />
        <form className="espacamento" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div>
            <InputPadrao
              estilo="inputLogin"
              placeholder="Insira seu usuário"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <InputPadrao
              estilo="inputLogin"
              placeholder="Insira sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Botao texto="Login" estilo="botaoPrimario" onClick={handleLogin} />
          <OuComLinha />
          <Botao texto="Cadastre-se" estilo="botaoOutline" onClick={handleCadastroClick} />
        </form>
      </div>
    </Layout>
  );
}

export default TelaLogin;
