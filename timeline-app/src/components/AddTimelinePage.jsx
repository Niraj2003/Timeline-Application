import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

function AddTimelinePage() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddTimeline = async () => {
    try {
      await axios.post('http://localhost:5000/api/timelines', { date, description }, {
        withCredentials: true
      });
      navigate('/timelines');
    } catch (error) {
      console.error('Add timeline error', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add Timeline</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTimeline}>Add</Button>
      </Form>
    </Container>
  );
}

export default AddTimelinePage;
