import React from 'react';

type MultiLineInputProps = {
    label: string;
    state: string[];
    setState: (newState: string[]) => void;
};

const MultiLineInput: React.FC<MultiLineInputProps> = (props: MultiLineInputProps) => {
    const {label, state, setState} = props;
    const addLine = () => {
        const newData = [...state, ""]
        setState(newData);
    };
    const updateLine = (lineIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = [...state];
        newState[lineIndex] = e.target.value;
        setState(newState);
    };
    const deleteLine = (lineIndex: number) => {
        state.splice(lineIndex, 1);
        setState([...state]);
    };


    return <>
        <label>{label}</label>
        {
            state.map((step, i) => {
                return <div key={i}>
                    <input value={step} onChange={(e) => updateLine(i, e)} />
                    <button onClick={() => deleteLine(i)}>delete</button>
                </div>;
            })
        }
        <button onClick={addLine}>+</button>
    </>;
};

export default MultiLineInput;