import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'app/App';

test('renders home page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Categories/i);
    expect(linkElement).toBeInTheDocument();
});
