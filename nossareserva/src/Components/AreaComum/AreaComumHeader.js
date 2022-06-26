import React from 'react';
import styles from './AreaComumHeader.module.css';
import { useLocation } from 'react-router-dom';

const UsuarioHeader = () => {

  return (
    <header className={styles.header}>
      <h1 className="title">Bem - vindo</h1>
    </header>
  );
};

export default UsuarioHeader;
