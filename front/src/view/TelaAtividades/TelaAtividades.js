import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import TabelaDeUsuarios from "../../components/TabelaDeUsuarios/TabelaDeUsuarios";
import { useNavigate } from 'react-router-dom';
import InputPadrao from "../../components/InputPadrao/InputPadrao";
import Botao from "../../components/Botao/Botao";
import TabelaDeAtividades from "../../components/TabelaDeAtividades/TabelaDeAtividades";


function TelaAtividades() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Implemente a lógica de logout aqui
        console.log("Usuário fez logout");
    };

    return (   
        <Layout estilo="telaPrincipal" >  
            <Navbar onLogout={handleLogout}/>
            <h1 style={{ marginBottom: '8px', marginTop: '80px', color:'#593B25' }}>Cadastre uma atividade</h1>
            <p style={{ marginBottom: '40px', color:'#593B25' }} >Insira o nome de uma atividade, para que ela seja inserida na tabela abaixo:</p>

            <InputPadrao
              estilo="inputLogin meuInputCustomizado"
              placeholder="Nome da atividade"
              type="text"
              />

            <Botao texto="Adicionar atividade" estilo="botaoPrimario meuBotaoCustomizado" />

            <TabelaDeAtividades />
        </Layout>
    );
  }
  
  export default TelaAtividades;