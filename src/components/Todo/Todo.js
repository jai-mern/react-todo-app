// Todo.js
import React, { useState } from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';

const Todo = ({ todo, onDelete, onUpdateStatus }) => {
  const [status, setStatus] = useState(todo.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onUpdateStatus(todo.id, newStatus);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          Column1
        </div>
        <div className="col">
          Column2
        </div>
        <div className="col">
          Column3
        </div>
      </div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{todo.name}</Card.Title>
          <Card.Text>{todo.description}</Card.Text>
          <Card.Text>Status: {status}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Change Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleStatusChange('Complete')}>Complete</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusChange('Not Complete')}>Not Complete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" onClick={() => onUpdateStatus(todo.id, status)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Todo;
