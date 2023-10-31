import React, {useState} from "react"
import Header from "./Header"
import { Button, Form, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/AuthContext"

const Login = () => {

    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    }) 

    const navigate = useNavigate()

    function handleChange(e) {
        
        if (e.target.name == "email") {
            const val = e.target.value 
            setLoginData((prev) => ({...prev, email: val}))
        } else { 
            const val = e.target.value
            setLoginData((prev) => ({...prev, password: val}))
        }
    }

    const login = () => {
        const reqOptions = {
            method: 'POST',
            headers: { 'accept':'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        };

        fetch('http://localhost:3001/auth/login', reqOptions)
            .then(res => res.json())
            .then(data => console.log(" ", data)) // <---- this is the auth token
            .then(setIsLoggedIn(true))
            .then(navigate("/"))
    }

    const signup = () => {
        navigate("/signup")
    }

    const thing = () => {
        login()
            .then(setIsLoggedIn(true))
            .then(navigate("/"))
    }

    const other = () => {
        setIsLoggedIn(false)
            .then(navigate("/"))
    }

    return (
        <div>
            <Header />
            <Col xl={{span: 4, offset: 4}}>
                <Form>
                    <Row style={{ height: '100px', paddingTop: '35px'}}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control name="email" type="text" placeholder="Enter email" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row style={{height: '100px', paddingTop: '5px'}}>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    
                    <Button onClick={login} variant="outline-primary" style={{borderRadius: '20px', width: '200px', marginBottom: '20px'}} >Log In</Button>
                
                </Form>
            </Col>
            <Button onClick={signup} variant="outline-primary" style={{borderRadius: '20px', width: '200px'}} >Signup</Button>
        </div>
    )

    // functionality comes from auth
}

export default Login