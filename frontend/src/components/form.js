import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Registration form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const [showModal, setShowModal] = useState(false);
  const [modalMessageError, setModalMessageError] = useState(false);
  const handleClose = () => {
    alert('you have succefully registered')
  }
  return (
    <div className='col-6 offset-3'>
<h1 className='text-center display-3 text-capitalize '>registration form </h1>
<p className='display-6 text-center text-capitalize'>enter your details</p>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label htmlFor="firstName"> First Name:</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label htmlFor="lastName">Last Name:</Form.Label>
        <Form.Control
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" className='signup mt-3' onClick={handleClose}>Register</Button>
    </Form>
    </div>
  );
}
