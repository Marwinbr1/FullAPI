import React from 'react';
import "./InputPadrao.css"

function InputPadrao({ placeholder, type, value, onChange, estilo}) {
  return (
    <input className={`${estilo}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputPadrao;
