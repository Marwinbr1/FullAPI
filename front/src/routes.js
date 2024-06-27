import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TelaLogin from './view/TelaLogin/TelaLogin';
import TelaPrincipal from './view/TelaPrincipal/TelaPrincipal';
import TelaCadastro from './view/TelaCadastro/TelaCadastro';
import TelaAtividades from './view/TelaAtividades/TelaAtividades';

function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<TelaLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={isAuthenticated ? <TelaPrincipal /> : <Navigate to="/login" />} />
        <Route path="/atividades" element={isAuthenticated ? <TelaAtividades /> : <Navigate to="/login" />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;