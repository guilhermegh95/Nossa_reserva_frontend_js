import React from 'react';
import ListLocacaoItem from './ListLocacaoItem';
import useFetch from '../../Hooks/useFetch';
import { LOCACAO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './ListLocacao.module.css';

const ListarLocacao = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchlocacao() {
      const { url, options } = LOCACAO_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchlocacao();
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
        {data.map((locacao) => (
          <ListLocacaoItem key={locacao.id} locacao={locacao} />
        ))}
      </ul>
    );
  else return null;
};

export default ListarLocacao;