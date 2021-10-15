import React from 'react';

type MultiLineSelectProps = {
    label: string;
    state: string[];
    setState: (newState: string[]) => void;
    values: string[];
};

const MultiLineSelect: React.FC<MultiLineSelectProps> = (props: MultiLineSelectProps) => {
    const {label, state, setState, values} = props;
    const addLine = () => {
        const newData = [...state, values[0]];
        setState(newData);
    };
    /* eslint-disable jsx-a11y/no-onchange */
    const updateLine = (lineIndex: number, e: React.ChangeEvent<HTMLSelectElement>) => {
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
                    <select
                        value={step}
                        onChange={(e) => updateLine(i, e)}
                        // eslint-disable-next-line
                        autoFocus
                    >
                        {
                            values.map((value: string) => {
                                return <option key={value}>{value}</option>;
                            })
                        }
                    </select>
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

export default MultiLineSelect;