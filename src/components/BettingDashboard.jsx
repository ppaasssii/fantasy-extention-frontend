import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import BetSlip from './BetSlip';
import { fetchOdds } from '../services/api';
import './styles/BettingDashboard.css';

const BettingDashboard = () => {
    const [games, setGames] = useState([]);
    const [betSlip, setBetSlip] = useState([]);

    useEffect(() => {
        const loadOdds = async () => {
            const data = await fetchOdds(); // Fetch from backend or Firebase
            setGames(data);
        };
        loadOdds();
    }, []);

    const addToBetSlip = (bet) => {
        setBetSlip((prev) => [...prev, bet]);
    };

    return (
        <div className="betting-dashboard">
            <div className="games-list">
                {games.map((game) => (
                    <GameCard key={game.eventID} game={game} onAddToBetSlip={addToBetSlip} />
                ))}
            </div>
            <BetSlip bets={betSlip} />
        </div>
    );
};

export default BettingDashboard;
