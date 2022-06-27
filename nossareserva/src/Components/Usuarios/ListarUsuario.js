import React from 'react';
import ListUsuarioItem from './ListUsuarioItem';
import useFetch from '../../Hooks/useFetch';
import { USUARIO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './ListarUsuario.module.css';

const ListarUsuario = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchusuario() {
      const { url, options } = USUARIO_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchusuario();
  }, [request]);

  if (error) return <Error error={error} />;
  console.log(error);
  if (loading) return <Loading />;
  console.log(loading);
  console.log("------------------");
  console.log(data);
  console.log("------------------");
  if (data)
    return (
      <ul>
        {data.map((usuario) => (
          <ListUsuarioItem key={usuario.apartamento} usuario={usuario} />
        ))}
      </ul>
    );
  else return null;
};

export default ListarUsuario;