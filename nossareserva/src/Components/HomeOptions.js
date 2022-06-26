import React from 'react';
import Button from './Forms/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";



const HomeOptions = () => {

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <h3> Escolha o seguimento que você deseja gerenciar</h3>
      <Link to="/apartamento">
        <Button>Apartamentos</Button>
      </Link>
        <br/>
        <br/>
      <Link to="/areacomum">  
        <Button>Áreas Comuns</Button>
      </Link>
        <br/>
        <br/>
      <Link to="/locacao">
        <Button>Locações</Button>
      </Link>
    </section>
  );
};

export default HomeOptions;
