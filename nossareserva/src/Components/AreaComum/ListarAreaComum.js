import React from 'react';
import ListAreaComumItem from './ListAreaComumItem';
import useFetch from '../../Hooks/useFetch';
import { AREACOMUM_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './ListarAreaComum.module.css';

const ListarAreaComum = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchareacomum() {
      const { url, options } = AREACOMUM_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchareacomum();
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
        {data.map((areacomum) => (
          <ListAreaComumItem key={areacomum.id} areacomum={areacomum} />
        ))}
      </ul>
    );
  else return null;
};

export default ListarAreaComum;