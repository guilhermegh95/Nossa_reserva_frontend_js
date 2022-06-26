import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CadastrarCondominio from './CadastrarCondominio';
import LocacaoHeader from './CondominioHeader';
import Navegacao from './Navegacao';
import Feed from '../Feed/Feed';
import styles from './Condominio.module.css';

const Locacao = () => {

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LocacaoHeader />
        <Routes>
          <Route path="/" element={<Navegacao />} />
          <Route path="cadastrar" element={<CadastrarCondominio />} />
          <Route path="listar" element={<CadastrarCondominio />} />
          <Route path="unitario" element={<CadastrarCondominio />} />
        </Routes>
      </div>
    </section>
  );
};

export default Locacao;

