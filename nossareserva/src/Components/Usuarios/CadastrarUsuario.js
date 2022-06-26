import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';

const CadastrarUsuario = () => {
  const apartamento = useForm();
  const email = useForm('email');


  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      apartamento: apartamento.value,
      email: email.value,
    });
    const response = await fetch(url, options);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastrar usuario</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Apartamento" type="text" name="apartamento" {...apartamento} />
        <Input label="Email" type="email" name="email" {...email} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default CadastrarUsuario;
