import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

function TimelineList() {
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/timelines', {
          withCredentials: true
        });
        setTimelines(response.data);
      } catch (error) {
        console.error('Fetch timelines error', error);
      }
    };

    fetchTimelines();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Your Timelines</h2>
      <ListGroup>
        {timelines.map(timeline => (
          <ListGroup.Item key={timeline._id}>
            <strong>{timeline.date}</strong>: {timeline.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
export default TimelineList;
