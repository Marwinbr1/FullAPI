import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import TabelaDeUsuarios from "../../components/TabelaDeUsuarios/TabelaDeUsuarios";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalAtividades from '../../components/Modal/ModalAtividades';


function TelaPrincipal() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        console.log("Usuário fez logout");
    };

    const handleDelete = (username) => {
        axios.delete(`http://localhost:3000/api/user/${username}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmNvc3VsdGltbyIsImlhdCI6MTcxOTQ3ODAzMCwiZXhwIjoxNzE5NzM3MjMwfQ.4oJRAqr7tuvB4fgC2v-be8_-yNe-qvfaoo3ylDHzhvE`
            }
        })
        .then(response => {
            console.log("Usuário deletado com sucesso!", response.data);
        })
        .catch(error => {
            console.error("Erro ao deletar usuário!", error);
        });
    };

    return (   
        <Layout estilo="telaPrincipal">  
            <Navbar onLogout={handleLogout}/>
            <h1 style={{ marginBottom: '8px', marginTop: '80px', color:'#593B25' }}>Atribua atividades</h1>
            <p style={{ marginBottom: '80px', color:'#593B25' }} >Gerencie e organize as atividades de sua equipe facilmente.</p>
            <TabelaDeUsuarios handleDelete={handleDelete} />
            <ModalAtividades/>
        </Layout>
    );
}

export default TelaPrincipal;
