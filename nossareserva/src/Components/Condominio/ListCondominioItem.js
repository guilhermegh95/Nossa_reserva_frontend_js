import React from 'react';
import styles from './ListCondominioItem.module.css';
import CondominioDelete from './CondominioDelete';

const ListCondominioItem = ({ condominio }) => {
  return (
    <li className={styles.photo}>
        <h3>Nome: {condominio.nome} - ID: {condominio.id}</h3>
        <CondominioDelete id={condominio.id} />
    </li>
  );
};

export default ListCondominioItem;
