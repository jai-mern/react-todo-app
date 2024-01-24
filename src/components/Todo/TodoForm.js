// TodoForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && description.trim() !== '') {
      onSubmit({ name, description, status: 'Not Complete' });
      setName('');
      setDescription('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Task Name1</Form.Label>
        <Form.Control type="text" placeholder="Enter task name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Todo submit
      </Button>
    </Form>
  );
};

export default TodoForm;
