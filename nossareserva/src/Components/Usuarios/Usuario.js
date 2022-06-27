import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CadastrarUsuario from './CadastrarUsuario';
import UsuarioHeader from './UsuarioHeader';
import ListarUsuario from './ListarUsuario';
import Navegacao from './Navegacao';
import Feed from '../Feed/Feed';
//import LoginCreate from './LoginCreate';
//import LoginPasswordLost from './LoginPasswordLost';
//import LoginPasswordReset from './LoginPasswordReset';
//import { UserContext } from '../../UserContext';
import styles from './Usuario.module.css';

const Usuario = () => {

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <UsuarioHeader />
        <Routes>
          <Route path="/" element={<Navegacao />} />
          <Route path="cadastrar" element={<CadastrarUsuario />} />
          <Route path="listar" element={<ListarUsuario />} />
        </Routes>
      </div>
    </section>
  );
};

export default Usuario;
