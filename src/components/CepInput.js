import React from 'react';

export default function CepInput({ cep, setCep }) {
    const handleCepChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) {
            value = value.slice(0, 8);
        }
        if (value.length > 5) {
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        setCep(value);
    };

    return (
        <input
            onChange={handleCepChange}
            value={cep}
            type="text"
            name="cep"
            id="cep"
            placeholder="00000-000"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            maxLength={9}
        />
    );
};