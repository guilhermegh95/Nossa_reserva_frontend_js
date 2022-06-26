import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CadastrarAreaComum from './CadastrarAreaComum';
import LocacaoHeader from './AreaComumHeader';
import Navegacao from './Navegacao';
import Feed from '../Feed/Feed';
import styles from './AreaComum.module.css';

const Locacao = () => {

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LocacaoHeader />
        <Routes>
          <Route path="/" element={<Navegacao />} />
          <Route path="cadastrar" element={<CadastrarAreaComum />} />
          <Route path="listar" element={<CadastrarAreaComum />} />
          <Route path="unitario" element={<CadastrarAreaComum />} />
        </Routes>
      </div>
    </section>
  );
};

export default Locacao;

