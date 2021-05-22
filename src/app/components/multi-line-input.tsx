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


    return <>
        <label>{label}</label>
        {
            state.map((step, i) => {
                return <input key={i} value={step} onChange={(e) => updateLine(i, e)} />
            })
        }
        <button onClick={addLine}>+</button>
    </>;
};

export default MultiLineInput;