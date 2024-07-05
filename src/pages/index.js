import { useState } from 'react';
import axios from 'axios';
import SearchForm from '@/components/SearchForm';
import Address from '@/components/Address';

export default function Home() {
  const [endereco, setEndereco] = useState(null);
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  const buscar = async (event) => {
    event.preventDefault();

    try {
      let cepFormatado = cep.replace(/\D/g, '');
      if (cepFormatado.length !== 8) return setError('Digite um cep válido!');
      const buscarCep = await axios.get(`https://viacep.com.br/ws/${cepFormatado}/json/`);
      if (buscarCep.data.erro) return setError('Endereço não encontrado!');

      setEndereco(buscarCep.data);
      setError(null);
    } catch (err) {
      setError('Erro ao buscar o CEP.');
      console.log(err);
    }
  };

  const limparEndereco = () => {
    setEndereco(null);
    setError(null);
    setCep('');
  };

  return (
    <div className="isolate bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 py-24 sm:py-10 lg:px-8 min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto max-w-2xl text-center bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Buscador de CEP</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Digite o cep para encontrar o seu endereço.
        </p>
        <SearchForm cep={cep} setCep={setCep} buscar={buscar} />
        {(endereco || error) && (
          <Address endereco={endereco} error={error} limparEndereco={limparEndereco} />
        )}
      </div>
    </div>
  );
}
