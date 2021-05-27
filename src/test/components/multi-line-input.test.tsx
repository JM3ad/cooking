import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import MultiLineInput from 'app/components/multi-line-input';

describe('MultiLineInput component', () => {
    const testLabel = 'A test label';
    const getDefaultComponent = () => {
        return <MultiLineInput label={testLabel} state={[]} setState={()=>{}}/>;
    };

    afterEach(cleanup);

    test('renders label', () => {
        render(getDefaultComponent());
        const label = screen.getByText(testLabel);
        expect(label).toBeInTheDocument();
    });

    test('displays a delete option for each element', async() => {
        const numElements = 4;
        const inputs = Array.from(Array(numElements));
        render(<MultiLineInput label={testLabel} state={inputs} setState={() => {}}/>);
        const deleteOptions = await screen.findAllByTestId("delete");
        expect(deleteOptions).toHaveLength(numElements);
    });
    
    test('adds new input when add button clicked', async() => {
        const setStateSpy = jest.fn();
        render(<MultiLineInput label={testLabel} state={[]} setState={setStateSpy}/>);
        const button = screen.getByTestId("add");
        fireEvent.click(button);
        expect(setStateSpy).toHaveBeenCalledTimes(1);
    });
    
    test('renders one less input after delete button hit', () => {
        const setStateSpy = jest.fn();
        const inputs = ["1st", "2nd", "3rd"];
        render(<MultiLineInput label={testLabel} state={inputs} setState={setStateSpy}/>);
        const deleteOptions = screen.getAllByTestId("delete");
        fireEvent.click(deleteOptions[1]);
        expect(setStateSpy).toHaveBeenCalledTimes(1);
        expect(setStateSpy).toHaveBeenCalledWith<string[][]>(["1st", "3rd"]);
    });
});