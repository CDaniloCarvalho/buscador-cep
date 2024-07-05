import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Address from '../Address';

test('deve exibir o endereço corretamente', () => {
    const endereco = {
        logradouro: 'Rua Teste',
        bairro: 'Bairro Teste',
        localidade: 'Cidade Teste',
        uf: 'UF'
    };
    render(<Address endereco={endereco} error={null} limparEndereco={() => { }} />);

    expect(screen.getByText(/Rua Teste/)).toBeInTheDocument();
    expect(screen.getByText(/Bairro Teste/)).toBeInTheDocument();
    expect(screen.getByText(/Cidade Teste/)).toBeInTheDocument();
    expect(screen.getByText(/UF/)).toBeInTheDocument();
});

test('deve exibir a mensagem de erro corretamente', () => {
    const error = 'Erro ao buscar o CEP.';
    render(<Address endereco={null} error={error} limparEndereco={() => { }} />);

    expect(screen.getByText(error)).toBeInTheDocument();
});
