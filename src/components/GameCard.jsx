import React from 'react';
import OddsDisplay from './OddsDisplay';
import './styles/GameCard.css';

const GameCard = ({ game, onAddToBetSlip }) => {
    const { eventID, info, odds } = game;

    return (
        <div className="game-card">
            <h3>{`Game ID: ${eventID}`}</h3>
            <p>{`Week: ${info.seasonWeek}`}</p>
            <OddsDisplay odds={odds} onAddToBetSlip={onAddToBetSlip} />
        </div>
    );
};

export default GameCard;
