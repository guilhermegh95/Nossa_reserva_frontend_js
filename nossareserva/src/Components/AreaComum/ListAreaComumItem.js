import React from 'react';
import styles from './ListAreaComumItem.module.css';
import AreaComumDelete from './AreaComumDelete';

const ListAreaComumItem = ({ areacomum }) => {
  return (
    <li className={styles.photo}>
        <h3>Nome: {areacomum.nome} - ID: {areacomum.id}</h3>
        <AreaComumDelete id={areacomum.id} />
    </li>
  );
};

export default ListAreaComumItem;
