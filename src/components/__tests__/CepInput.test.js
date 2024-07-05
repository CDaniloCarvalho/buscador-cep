import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CepInput from '../CepInput';

test('deve renderizar o componente CepInput e formatar corretamente o CEP', () => {
    const setCep = jest.fn();
    render(<CepInput cep="" setCep={setCep} />);

    const input = screen.getByPlaceholderText('00000-000');
    fireEvent.change(input, { target: { value: '12345678' } });

    expect(setCep).toHaveBeenCalledWith('12345-678');
});
