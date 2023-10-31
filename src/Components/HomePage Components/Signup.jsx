import React, { useState } from 'react'
import Header from './Header';
import { Button, Form, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const Signup = () => {

    const [signupData, setSignupData] = useState({
        "name": "",
        "email": "",
        "password": "",
        "address": "",
        "phoneNumber": ""
    })

    const {
        isLoggedIn, 
        setIsLoggedIn
    } = useAuth()

    function handleChange(e) {
        if (e.target.name == "name") {
            const val = e.target.value 
            setSignupData((prev) => ({...prev, name: val}))
        } else if (e.target.name == "password") {
            const val = e.target.value 
            setSignupData((prev) => ({...prev, password: val}))
        } else if (e.target.name == "email") {
            const val = e.target.value 
            setSignupData((prev) => ({...prev, email: val}))
        } else if (e.target.name == "address") {
            const val = e.target.value 
            setSignupData((prev) => ({...prev, address: val}))
        } else if (e.target.name == "phoneNumber") {
            const val = e.target.value 
            setSignupData((prev) => ({...prev, phoneNumber: val}))
        }
    }

    const navigate = useNavigate()

    const createProfile = () => {
        const reqOptions = {
            method: 'POST',
            headers: { 'accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(signupData)
        };

        fetch('http://localhost:3001/users', reqOptions)
            .then(
                console.log("posted")
            )
            .then(res => res.json())
            .then(data => console.log(" henlo", data)) 
            .then(
                localStorage.setItem("authenticated", true),
                // need auth context here
                setIsLoggedIn(true),
                navigate("/")
                
            )
            .then(
                console.log("the localStorage.getItem('authenticated') = ", localStorage.getItem("authenticated"))
            )
    }

    return (
        <div>
            <Header />
            <Col xl={{span: 4, offset: 4}} style={{marginTop: '35px'}}>
                <Form>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="name" type="text" placeholder="Name" style={{verticalAlign: 'middle', display: 'inline-block'}} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="email" type="text" placeholder="email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="address" type="text" placeholder="address" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="phoneNumber" type="text" placeholder="phone number" onChange={handleChange}/>
                    </Form.Group>
                </Form>
            </Col>

            <Button onClick={createProfile} variant="outline-primary" style={{borderRadius: '20px', width: '200px', margin: '20px'}}>Create Profile</Button>
        </div>
    )
}

export default Signup