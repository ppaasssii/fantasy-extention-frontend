import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axiosConfig';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/events.json');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <Link to={`/event/${event.eventID}`} key={event.eventID}>
            <div className="event-tile">
              <h2>{event.info.seasonWeek}</h2>
              <p>{event.leagueID}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;