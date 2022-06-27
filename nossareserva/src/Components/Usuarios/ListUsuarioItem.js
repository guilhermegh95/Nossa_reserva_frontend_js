import React from 'react';
import styles from './ListUsuarioItem.module.css';
import UsuarioDelete from './UsuarioDelete';

const ListUsuarioItem = ({ usuario }) => {
  return (
    <li className={styles.photo}>
        <h3>Apartamento: {usuario.apartamento} - Email: {usuario.email}</h3>
        <UsuarioDelete id={usuario.apartamento} />
    </li>
  );
};

export default ListUsuarioItem;
