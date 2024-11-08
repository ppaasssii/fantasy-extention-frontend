import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './compontents/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './compontents/home/Home';


function App() {
  const [userBets, setUserBet] = useState(null);

  const getUserBets = async () => {
    try
    {
      const response = await api.get();
        console.log('Logging: App.js data from GET https://bets-fantasy-extention.europe-west1.firebasedatabase.app/', response.data);
      setUserBet(response.data);
    } catch (error)
    {
      console.log(error);
    }

  }

    useEffect(() => {
        getUserBets();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home userBets={userBets}/>}>  </Route>

                </Route>

            </Routes>

        </div>
    );
}

export default App
