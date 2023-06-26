import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";


const SignIn = () => {
    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);

    const [emailErrorMessage, setemailErrorMessage] = useState('');
    const [passwordErrorMessage, setpasswordErrorMessage] = useState('');

    const [userFound, setUserFound] = useState(true);

  //   const passwordHandler = (event) => {
  //     const digits = event.target.value;
  //     if (/^\d{0,10}$/.test(digits)) {
  //       setpassword(digits);
  //       if (digits.length < 10) {
  //         setpasswordErrorMessage("password Must Contain 10 Digits");
  //         setpasswordError(true);
  //       } else if (digits === "") {
  //         setpasswordErrorMessage("Enter the password");
  //         setpasswordError(true);
  //       } else {
  //         setpasswordErrorMessage("");
  //         setpasswordError(false);
  //       }
  //     }
  // }

 
    const emailHandler = (event) => {
        const title = event.target.value;
        setemail(title);
        if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{0,100}$/.test(title)) {
          if (title === "") {
            setemailErrorMessage("Please enter the Email ID");
            setemailError(true);
          } else {
            setemailErrorMessage("");
            setemailError(false);
          }
        }
    }

    const passwordHandler = (event) => {
        const digits = event.target.value;
        if (/^\d{0,10}$/.test(digits)) {
          setpassword(digits);
          if (digits.length < 10) {
            setpasswordErrorMessage("password Must Contain 10 Digits");
            setpasswordError(true);
          } else if (digits === "") {
            setpasswordErrorMessage("Enter the password");
            setpasswordError(true);
          } else {
            setpasswordErrorMessage("");
            setpasswordError(false);
          }
        }
    }

    const formHandler = (event) => {
        event.preventDefault();

        if(email === '') {
            setemailError(true);
            setemailErrorMessage("Please enter your Email ID")
        } else {
            setemailError(false)
            setemailErrorMessage('')
        }

        if(password === '') {
            setpasswordError(true);
            setpasswordErrorMessage('Please enter the numbered password.')
        } else {
            setpasswordError(false);
            setpasswordErrorMessage("")
        }

        if(email !== '' && password !== '') {
            // setShowModal(true)
            axios.post('http://localhost:4000/signin', {
                email: email,
                password: password,
            })
            .then((response) => {
                const data = response.data;
                if(data.message === 'User already exists') {
                    // setModalMessage('User Already Existed.');
                    // setShowModal(true)
                    navigate('/form')
                } else if(data.message === 'Account not found') {
                    // setModalMessage('You do not have an account. Please signup to create an account.');
                    // setShowModal(true);
                    setUserFound(false)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        }

    }

    const handleClose = () => {
     alert('user found');
     navigate ('/form');
    }

    return (
<div className="col-6 offset-3">
<h1 className='text-center display-2 text-capitalize '>sign in</h1>
<p className='display-6 text-center text-capitalize'>enter your credentials</p>

<Form onSubmit={formHandler}>
<Form.Group>
<Form.Label >Email: <span style={{ color: "red" }}>*</span></Form.Label>
<Form.Control  type="email" placeholder="Enter the User email" value={email} onChange={emailHandler} style={{ border: emailError ? "2px solid red" : "2px solid black" }} />
<p style={{ color: "red" }}>{emailErrorMessage}</p>
</Form.Group>
<Form.Group>
<Form.Label >Password:<span style={{ color: "red" }}>*</span></Form.Label>
<Form.Control  type="password" placeholder="xxxxx xxxxx" value={password} onChange={passwordHandler} style={{ border: passwordError ? "2px solid red" : "2px solid black" }}  />
<p style={{ color: "red" }}> {passwordErrorMessage}</p>
</Form.Group>
<Button type="submit"  onclick={handleClose} className='signin mt-3'>Sign In</Button>
</Form>

</div>
    )
}


export default SignIn;