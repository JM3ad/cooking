import React from 'react';
import 'app/pages/Tables.scss';

const UsefulCharts: React.FC = () => {
    const gasToDegrees = [
        [1, 140, 275],
        [2, 150, 300],
        [3, 165, 325],
        [4, 180, 350],
        [5, 190, 375],
        [6, 200, 400],
        [7, 220, 425],
        [8, 230, 450],
        [9, 245, 475]
    ];

    return <div className="app-page">
        <table>
            <tr>
                <th>Gas Mark</th>
                <th>C°</th>
                <th>C° (fan)</th>
                <th>F°</th>
            </tr>
            {gasToDegrees.map((set, index) => {
                return <tr key={index}>
                    <td>{set[0]}</td>
                    <td>{set[1]}</td>
                    <td>{set[1] - 20}</td>
                    <td>{set[2]}</td>
                </tr>
            })}
        </table>
    </div>
};

export default UsefulCharts;