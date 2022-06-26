import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { LOCACAO_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';

const CadastrarLocacao = () => {
  const data = useForm();
  const nome_pessoa = useForm();
  const area_comum = useForm();
  
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = LOCACAO_POST({
      data: data.value,
      nome_pessoa: nome_pessoa.value,
      area_comum: area_comum.value,
    });
    const response = await fetch(url, options);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastrar Área Comum</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Data de locação (YYY-MM-DD)" type="data" name="data" {...data} />
        <Input label="Número do apartamento" type="text" name="nome_pessoa" {...nome_pessoa} />
        <Input label="ID da área comum" type="text" name="area_comum" {...area_comum} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default CadastrarLocacao;
