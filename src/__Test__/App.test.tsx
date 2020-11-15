import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Start text', () => {
    render(<App />);
    const divElement = screen.getByText(/Start/i);
    expect(divElement).toBeInTheDocument();
});
