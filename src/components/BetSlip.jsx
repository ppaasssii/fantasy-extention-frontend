import React from 'react';
import './styles/BetSlip.css';

const BetSlip = ({ bets }) => {
    return (
        <div className="bet-slip">
            <h2>Bet Slip</h2>
            {bets.map((bet, index) => (
                <div key={index} className="bet-item">
                    <p>{bet.oddID}</p>
                    <p>{`Odds: ${bet.odds}`}</p>
                </div>
            ))}
            <button className="place-bet-button">Place Bet</button>
        </div>
    );
};

export default BetSlip;
