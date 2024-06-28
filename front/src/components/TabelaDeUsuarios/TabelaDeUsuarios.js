import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './TabelaDeUsuarios.css';
import BotaoDeletar from '../BotaoDeletar/BotaoDeletar';
import BotaoEditar from '../BotaoEditar/BotaoEditar';
import ModalAtividades from '../Modal/ModalAtividades';
import BotaoAdd from '../BotaoAdd/BotaoAdd';

const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#664934',
    },
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#D9CABF',
    },
  },
  rows: {
    style: {
      backgroundColor: '#C2B4AB',
      color: '#593B25',
      fontSize: '14px',
      fontWeight: '600',
      '&:nth-of-type(even)': {
        backgroundColor: '#CDBFB5',
      },
    },
  },
};

function TabelaDeUsuarios({ handleDelete }) {
  const [rows, setRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState('');

  const fetchData = () => {
    axios.get('http://localhost:3000/api/user', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmNvc3VsdGltbyIsImlhdCI6MTcxOTQ3ODAzMCwiZXhwIjoxNzE5NzM3MjMwfQ.4oJRAqr7tuvB4fgC2v-be8_-yNe-qvfaoo3ylDHzhvE`
      }
    })
    .then(response => {
      console.log(response.data);
      setRows(response.data);
    })
    .catch(error => {
      console.error("Houve um erro ao buscar os dados!", error);
    });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const columns = [
    {
      name: "Username",
      selector: row => row.username
    },
    {
      name: "Role",
      selector: row => row.role
    },
    {
      name: "Created At",
      selector: row => new Date(row.createdAt).toLocaleString()
    },
    {
      name: "Updated At",
      selector: row => new Date(row.updatedAt).toLocaleString()
    },
    {
      name: "Actions",
      cell: row => (
        <div style={{ display: 'flex', gap: '1rem' }} >
          <BotaoEditar onClick={() => handleEdit(row.username)} />
          <BotaoDeletar onClick={() => handleDelete(row.username)} />
          <BotaoAdd onClick={() => handleOpenModal(row.username)}></BotaoAdd>
        </div>
      )
    }
  ];

  const handleEdit = (username) => {
    setSelectedUsername(username); // Define o username selecionado para exibição no modal
    setIsModalOpen(true); // Abre o modal de atividades
  };

  const handleOpenModal = (username) => {
    setSelectedUsername(username); // Define o username selecionado
    setIsModalOpen(true); // Abre o modal
  };

  return (
    <div className='tabela'>
      <DataTable
        columns={columns}
        data={rows}
        customStyles={customStyles}
      />
      <ModalAtividades
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedUser={selectedUsername} // Passa o username selecionado para o modal
      />
    </div>
  );
}

export default TabelaDeUsuarios;
