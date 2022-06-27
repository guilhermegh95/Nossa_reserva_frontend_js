import React from 'react';
import ListCondominioItem from './ListCondominioItem';
import useFetch from '../../Hooks/useFetch';
import { CONDOMINIO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './ListCondominio.module.css';

const ListarCondominio = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchcondominios() {
      const { url, options } = CONDOMINIO_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchcondominios();
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
        {data.map((condominio) => (
          <ListCondominioItem key={condominio.id} condominio={condominio} />
        ))}
      </ul>
    );
  else return null;
};

export default ListarCondominio;