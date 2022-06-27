import React from 'react';
import styles from './ListLocacaoItem.module.css';
import LocacaoDelete from './LocacaoDelete';

const ListLocacaoItem = ({ locacao }) => {
  return (
    <li className={styles.photo}>
        <h3>Apartamento: {locacao.nome_pessoa} - AreaComum: {locacao.area_comum} - Data: {locacao.data}</h3>
        <LocacaoDelete id={locacao.id} />
    </li>
  );
};

export default ListLocacaoItem;
