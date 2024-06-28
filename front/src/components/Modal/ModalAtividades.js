import React, { useState, useEffect } from 'react';
import './ModalAtividades.css';

function ModalAtividades({ isOpen, onClose, selectedUser }) {
  const [title, setTitle] = useState('');
  const [artifacts, setArtifacts] = useState([]);
  const [newArtifact, setNewArtifact] = useState('');

  useEffect(() => {
    if (isOpen && selectedUser) {
      const savedActivity = JSON.parse(localStorage.getItem(`activity_${selectedUser}`));
      if (savedActivity) {
        setTitle(savedActivity.title);
        setArtifacts(savedActivity.artifacts);
      } else {
        setTitle('');
        setArtifacts([]);
        setNewArtifact('');
      }
    }
  }, [isOpen, selectedUser]);

  const handleAddArtifact = () => {
    if (newArtifact.trim() !== '') {
      setArtifacts([...artifacts, newArtifact]);
      setNewArtifact('');
    }
  };

  const handleRemoveArtifact = (index) => {
    const updatedArtifacts = [...artifacts];
    updatedArtifacts.splice(index, 1);
    setArtifacts(updatedArtifacts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const savedActivity = { title, artifacts };
      localStorage.setItem(`activity_${selectedUser}`, JSON.stringify(savedActivity));

      console.log('Atividade e artefatos criados com sucesso no localStorage');
      onClose();
    } catch (error) {
      console.error('Erro ao criar atividade e artefatos:', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="usernameInput">Username do Usuário:</label>
            <input
              id="usernameInput"
              type="text"
              value={selectedUser}
              readOnly
            />
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título da Atividade"
            required
          />
          <input
            type="text"
            value={newArtifact}
            onChange={(e) => setNewArtifact(e.target.value)}
            placeholder="Novo Artefato"
          />
          <button type="button" onClick={handleAddArtifact}
          
          >Adicionar Artefato</button>
          <ul>
            {artifacts.map((artifact, index) => (
              <li key={index}>
                {artifact}
                <button
                  type="button"
                  onClick={() => handleRemoveArtifact(index)}
                  style={{
                    backgroundColor: '#FF4949', 
                    color: '#FFFFFF', 
                    borderRadius: '4px',
                    padding: '4px 8px', 
                    cursor: 'pointer',
                    border: 'none',
                    width: '140px'
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <button type="submit">Salvar Atividade</button>
        </form>
      </div>
    </div>
  );
}

export default ModalAtividades;
