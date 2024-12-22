import React from 'react';
import BettingDashboard from './components/BettingDashboard';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>NFL Betting Platform</h1>
                <p>FAAB Balance: 1000 (Placeholder)</p>
            </header>
            <BettingDashboard />
        </div>
    );
}

export default App;
