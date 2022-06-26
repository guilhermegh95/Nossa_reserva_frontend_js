import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { CONDOMINIO_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';

const CadastrarAreaComum = () => {
  const nome = useForm();

  
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = CONDOMINIO_POST({
      nome: nome.value,
    });
    const response = await fetch(url, options);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastrar Área Comum</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome do condomínio" type="text" name="nome" {...nome} />
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

export default CadastrarAreaComum;
