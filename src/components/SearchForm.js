import React from 'react';

import CepInput from './CepInput';

export default function SearchForm({ cep, setCep, buscar }) {
    return (
        <form onSubmit={buscar} className="mt-10">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="flex-1">
                    <label htmlFor="cep" className="block text-left text-sm font-semibold leading-6 text-gray-900">
                        Cep
                    </label>
                    <CepInput cep={cep} setCep={setCep} />
                </div>
                <button
                    type="submit"
                    className="rounded-md h-10 mt-6 bg-indigo-600 px-6 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}
