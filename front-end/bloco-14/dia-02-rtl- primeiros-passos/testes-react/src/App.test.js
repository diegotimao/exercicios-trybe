import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testa a aplicação', () => {
  test('Verifica se existe um link na tela', () => {
    render(<App />); // Renderiza o componente  na tela
    const linkElement = screen.getByText(/learn react/i); // procura na tela o um texto
    expect(linkElement).toBeInTheDocument(); // expera que tenha o texto na DOM dentro do componente app
  });
});
