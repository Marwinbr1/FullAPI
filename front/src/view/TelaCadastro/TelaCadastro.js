import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputPadrao from '../../components/InputPadrao/InputPadrao';
import Layout from '../../components/Layout/Layout';
import Botao from '../../components/Botao/Botao';
import "../TelaLogin/TelaLogin.css";
import logoImage from '../../assets/logo-login.png';

function TelaCadastro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    // Adicionar Lógica de Cadastro
    localStorage.setItem('username', username);
    navigate('/login');
  };

  return (
    <Layout>
      <div className="espacamento">
        <img src={logoImage} alt="Logo da Aplicação" />
        <form className="espacamento" onSubmit={(e) => { e.preventDefault(); handleCadastro(); }}>
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
          <Botao texto="Concluir cadastro" estilo="botaoPrimario" onClick={handleCadastro} />
        </form>
      </div>
    </Layout>
  );
}

export default TelaCadastro;
