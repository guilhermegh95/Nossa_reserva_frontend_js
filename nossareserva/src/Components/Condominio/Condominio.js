import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CadastrarCondominio from './CadastrarCondominio';
import ListarCondominio from './ListarCondominio';
import Navegacao from './Navegacao';
import Feed from '../Feed/Feed';
import styles from './Condominio.module.css';

const Locacao = () => {

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Navegacao />} />
          <Route path="cadastrar" element={<CadastrarCondominio />} />
          <Route path="listar" element={<ListarCondominio />} />
          <Route path="unitario" element={<CadastrarCondominio />} />
        </Routes>
      </div>
    </section>
  );
};

export default Locacao;

