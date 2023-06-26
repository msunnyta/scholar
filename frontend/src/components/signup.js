import React, {useState} from 'react';
import {Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

 

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

 

    const nameHandler = (event) => {
        const title = event.target.value;
        if (/^[a-zA-Z\s]{0,100}$/.test(title)) {
          setName(title);
          if (title === "") {
            setNameErrorMessage("enter the Name");
            setNameError(true);
          } else {
            setNameErrorMessage("");
            setNameError(false);
          }
        }
    }

 

    const emailHandler = (event) => {
        const send = event.target.value;
        setEmail(send)
        if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{0,100}$/.test(send)) {
            setEmailError(true)
            setEmailErrorMessage('Invalid email address')
        } else {
            setEmailError(false);
            setEmailErrorMessage('')
        }
    }

    const passwordHandler = (event) => {
        const digits = event.target.value;
        if (/^\d{0,10}$/.test(digits)) {
          setPassword(digits);
          if (digits.length < 10) {
            setPasswordErrorMessage("Number Must Contain 10 Digits");
            setPasswordError(true);
          } else if (digits === "") {
            setPasswordErrorMessage("Enter the Number");
            setPasswordError(true);
          } else {
            setPasswordErrorMessage("");
            setPasswordError(false);
          }
        }
    }

 

    const formHandler = (event) => {
        event.preventDefault();
        if(name === '') {
            setNameError(true);
            setNameErrorMessage("Please enter your Name")
        } else {
            setNameError(false)
            setNameErrorMessage('')
        }

 

        if(email === '') {
            setEmailError(true)
            setEmailErrorMessage('Please enter valid mail id')
        } else {
            setEmailError(false)
            setEmailErrorMessage('')
        }

 

        if(password === '') {
            setPasswordError(true);
            setPasswordErrorMessage('Please enter Password.')
        } else {
            setPasswordError(false);
            setPasswordErrorMessage("")
        }

 

        if(name !== '' && email !== '' && password !== '') {
            axios.post('http://localhost:4000/signup', {
                name: name,
                email: email,
                password: password
            })
            .then((response) => {
                const data = response.data;
                if(data.message === 'User already exists') {
                    setModalMessageError(true);
                    setShowModal(true)
                } else if(data.message === 'Signed successfully.') {
                    setModalMessageError(false);
                    setShowModal(true);
                }
            })
        }
    }

 

    const [showModal, setShowModal] = useState(false);
    const [modalMessageError, setModalMessageError] = useState(false);

 

    const handleClose = () => {
        alert('your account has been created')
        // setShowModal(false)
        navigate('/form')
    }

return (
<div className='col-6 offset-3'>
<h1 className='text-center display-3 text-capitalize '>create account</h1>
<p className='display-6 text-center text-capitalize'>enter your details</p>
<Form onSubmit={formHandler}>
<Form.Group className="mb-3">
<Form.Label >Name <span style={{ color: "red" }}>*</span></Form.Label>
<Form.Control type='text' value={name} onChange={nameHandler} placeholder='Enter your username' style={{ border: nameError ? "2px solid red" : "2px solid black" }}/>
<p style={{ color: "red" }}> {nameErrorMessage} </p>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label >Email <span style={{ color: "red" }}>*</span></Form.Label>
<Form.Control type='email' value={email} onChange={emailHandler} placeholder='Enter your email address' style={{ border: emailError ? "2px solid red" : "2px solid black" }} />
<p style={{ color: "red" }}> {emailErrorMessage} </p>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label >Password<span style={{ color: "red" }}>*</span></Form.Label>
<Form.Control type='password' value={password} onChange={passwordHandler} placeholder='xxxxx xxxxx' style={{ border: passwordError ? "2px solid red" : "2px solid black" }} />
<p style={{ color: "red" }}> {passwordErrorMessage} </p>
</Form.Group>
<Button type="submit" className='signup mt-3' onClick={handleClose}>Sign Up</Button>
</Form>
</div>
);
}


export default SignUp;