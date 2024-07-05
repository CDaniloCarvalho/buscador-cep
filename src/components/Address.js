import React from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Address({ endereco, error, limparEndereco }) {
    return (
        <div className="mt-10 p-5 bg-gray-100 rounded-lg shadow-inner relative">
            <XMarkIcon onClick={limparEndereco} className="h-6 w-6 text-black cursor-pointer absolute top-2 right-2" aria-hidden="true" />
            {error ? (
                <p className="text-red-400 mt-2 font-semibold text-center">{error}</p>
            ) : (
                <div className="text-center mt-2 text-sm text-gray-600">
                    <p>Logradouro: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>Estado: {endereco.uf}</p>
                </div>
            )}
        </div>
    );
}
