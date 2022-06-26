import React from 'react';
import Button from '../Forms/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";



const Navegacao = () => {


  return (
    <section className="animeLeft">
      <h3> Escolha o seguimento que você deseja gerenciar</h3>
      <Link to="cadastrar">
        <Button>Locar Área comum para locação</Button>
      </Link>
      <br/>
      <br/>
      <Link to="listar">
        <Button>Listar Locações</Button>
      </Link>
    </section>
  );
};

export default Navegacao;
