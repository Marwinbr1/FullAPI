import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TelaLogin from './view/TelaLogin/TelaLogin';
import TelaPrincipal from './view/TelaPrincipal/TelaPrincipal';
import TelaCadastro from './view/TelaCadastro/TelaCadastro';

function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<TelaLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={isAuthenticated ? <TelaPrincipal /> : <Navigate to="/login" />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;