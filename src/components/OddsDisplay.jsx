import React from 'react';
import './styles/OddsDisplay.css';

const OddsDisplay = ({ odds, onAddToBetSlip }) => {
    return (
        <div className="odds-display">
            {Object.keys(odds).map((oddKey) => (
                <div key={oddKey} className="odd-item">
                    <p>{oddKey}</p>
                    <p>{`Odds: ${odds[oddKey].odds}`}</p>
                    <button onClick={() => onAddToBetSlip(odds[oddKey])}>Add to Bet Slip</button>
                </div>
            ))}
        </div>
    );
};

export default OddsDisplay;
