import React from 'react';
import { render, screen } from '@testing-library/react';
import MultiLineInput from 'app/components/multi-line-input';

describe('MultiLineInput component', () => {
    test('renders label', () => {
        const testLabel = 'A test label';
        render(<MultiLineInput label={testLabel} state={[]} setState={()=>{}}/>);
        const label = screen.getByText(testLabel);
        expect(label).toBeInTheDocument();
    });
    
    test('renders new input when add button clicked', () => {
        expect(1).toEqual(0);
    });
    
    test('renders one less input after delete button hit', () => {
        expect(1).toEqual(0);
    });
    
    test('state is updated when input is used', () => {
        expect(1).toEqual(0);
    });
});