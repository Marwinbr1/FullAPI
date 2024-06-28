import React, { useState } from 'react';
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/user`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmNvc3VsdGltbyIsImlhdCI6MTcxOTQ3ODAzMCwiZXhwIjoxNzE5NzM3MjMwfQ.4oJRAqr7tuvB4fgC2v-be8_-yNe-qvfaoo3ylDHzhvE'
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao acessar recurso seguro');
      }

      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      alert('Credenciais inválidas');
    }
  };

  const handleCadastroClick = () => {
    navigate('/cadastro');
  };

  return (
    <Layout estilo="layout">
      <div className="espacamento">
        <img src={logoImage} alt="Logo da Aplicação" />
        <form className="espacamento" onSubmit={handleLogin}>
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
          <Botao texto="Login" estilo="botaoPrimario" type="submit" />
          <OuComLinha />
          <Botao texto="Cadastre-se" estilo="botaoOutline" onClick={handleCadastroClick} />
        </form>
      </div>
    </Layout>
  );
}

export default TelaLogin;
