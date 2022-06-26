import React from 'react';
import Button from '../Forms/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";



const Navegacao = () => {


  return (
    <section className="animeLeft">
      <h3> Escolha o seguimento que você deseja gerenciar</h3>
      <Link to="cadastrar">
        <Button>Cadastrar Área Comum</Button>
      </Link>
      <br/>
      <br/>
      <Link to="listar">
        <Button>Listar Áreas Comuns</Button>
      </Link>
    </section>
  );
};

export default Navegacao;
