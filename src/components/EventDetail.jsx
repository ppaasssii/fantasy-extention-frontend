import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';

const EventDetail = ({ addToCart }) => {
  const { eventID } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${eventID}.json`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventID]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.info.seasonWeek}</h1>
      <h2>{event.leagueID}</h2>
      <div>
        <h3>Odds</h3>
        {Object.keys(event.odds).map((oddKey) => (
          <div key={oddKey} onClick={() => addToCart(event.odds[oddKey])}>
            <p>{oddKey}: {event.odds[oddKey].odds}</p>
          </div>
        ))}
      </div>
      {/* Weitere Details wie players, results, status, teams */}
    </div>
  );
};

export default EventDetail;