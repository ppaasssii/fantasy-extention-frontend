import './Hero.css'
import { Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Hero = ({userBets}) => {

    const playerInfo = Array.isArray(userBets) ? userBets : [];

    return (
        <div>
            <h1>ALL PLAYERS STATS</h1>

            {playerInfo.map((allPlayerInfoAndStats) => {

                const player = allPlayerInfoAndStats.player;
                console.log('Player:', player); // Log player to verify the object
                const stats = allPlayerInfoAndStats.stats;
                return(
                    <Paper key={allPlayerInfoAndStats.playerId}>
                        <div className='player-card-container'>
                            <div className="player-card">
                                <div className="player-detail">
                                    <div className="player-ino">
                                        <p>Player first name: {player.playerFirstName}</p>
                                        <p>Player last name: {player.playerLastName}</p>
                                        <p>Player position: {player.playerPosition}</p>
                                    </div>
                                    <div className="player-stats">
                                        <p>Passing Yards: {stats.pass_yd}</p>
                                        <p>Rushing Yards: {stats.rush_yd}</p>
                                        <p>Touchdowns: {stats.pass_td}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })}

        </div>
    )
}

export default Hero;