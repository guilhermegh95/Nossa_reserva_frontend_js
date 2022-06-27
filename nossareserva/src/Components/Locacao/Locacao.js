import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CadastrarLocacao from './CadastrarLocacao';
import LocacaoHeader from './LocacaoHeader';
import Navegacao from './Navegacao';
import ListarLocacao from './ListarLocacao'
import Feed from '../Feed/Feed';
import styles from './Locacao.module.css';

const Locacao = () => {

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LocacaoHeader />
        <Routes>
          <Route path="/" element={<Navegacao />} />
          <Route path="cadastrar" element={<CadastrarLocacao />} />
          <Route path="listar" element={<ListarLocacao />} />
        </Routes>
      </div>
    </section>
  );
};

export default Locacao;

