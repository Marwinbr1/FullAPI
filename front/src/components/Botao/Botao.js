import React from 'react';
import "./Botao.css";

function Botao({ texto, estilo, onClick }) {
  const botaoClassName = `${estilo}`;

  return (
    <button className={botaoClassName} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Botao;
