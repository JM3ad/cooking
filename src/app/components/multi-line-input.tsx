import React from 'react';

type MultiLineInputProps = {
    label: string;
    state: string[];
    setState: (newState: string[]) => void;
};

const MultiLineInput: React.FC<MultiLineInputProps> = (props: MultiLineInputProps) => {
    const {label, state, setState} = props;
    const addLine = () => {
        const newData = [...state, ""];
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
                    <input value={step} onChange={(e) => updateLine(i, e)} autoFocus/>
                    <button
                        className="small-action-button"
                        onClick={() => deleteLine(i)}
                        data-testid="delete"
                    >
                        -
                    </button>
                </div>;
            })
        }
        <button onClick={addLine} className="small-action-button" data-testid="add">+</button>
    </>;
};

export default MultiLineInput;