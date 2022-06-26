import React from 'react';
import styles from './CondominioHeader.module.css';
import { useLocation } from 'react-router-dom';

const CondominioHeader = () => {

  return (
    <header className={styles.header}>
      <h1 className="title">Bem - vindo</h1>
    </header>
  );
};

export default CondominioHeader;
