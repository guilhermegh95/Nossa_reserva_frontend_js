import React from 'react';
import styles from './LocacaoDelete.module.css';
import { LOCACAO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = LOCACAO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) navigate('/');;
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
