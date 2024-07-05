import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';

test('deve chamar a função buscar ao submeter o formulário', () => {
    const buscar = jest.fn();
    const setCep = jest.fn();
    render(<SearchForm cep="" setCep={setCep} buscar={buscar} />);

    fireEvent.submit(screen.getByRole('button', { name: /buscar/i }).closest('form'));

    expect(buscar).toHaveBeenCalledTimes(1);
});
