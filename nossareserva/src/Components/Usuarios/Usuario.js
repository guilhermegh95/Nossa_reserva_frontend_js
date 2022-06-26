import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CadastrarUsuario from './CadastrarUsuario';
//import LoginCreate from './LoginCreate';
//import LoginPasswordLost from './LoginPasswordLost';
//import LoginPasswordReset from './LoginPasswordReset';
//import { UserContext } from '../../UserContext';
import styles from './Usuario.module.css';

const Usuario = () => {

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="cadastrar" element={<CadastrarUsuario />} />
        </Routes>
      </div>
    </section>
  );
};

export default Usuario;
