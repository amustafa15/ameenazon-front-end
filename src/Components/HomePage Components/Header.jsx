import React, {useState, useEffect} from 'react'
import logo from '../../amazon-logo.png';
import cartIcon from '../../cart-icon.png';
import SearchBar from './SearchBar';
import styles from './HeaderComponentStyles';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../../hooks/AuthContext';
import { useNavigate } from "react-router-dom"

const Header = () => {

    const [authenticated, setAuthenticated] = useState()
    const {
        isLoggedIn, 
        setIsLoggedIn
    } = useAuth()

    const navigate = useNavigate()

    const loginText = () => {
        console.log("localStorage.getItem(authenticated) = ", localStorage.getItem("authenticated"))
        if (localStorage.getItem("authenticated") === true) {
            console.log("logged in")
            return "Account"
        } else {
            console.log("not logged in")
            return "Login/Signup"
        }   
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    const onLoad = () => {
        setAuthenticated(true)
    }

    useEffect(() => {
        onLoad()
    }, [authenticated])

    return (
        <Navbar expand="lg" style={{backgroundColor: "#0174c3"}}>
            <Container style={{display: "flex", flexDirection: "row"}}>
                <Navbar.Brand href="/">
                    <img src={logo} alt="the ameenazon logo" />
                </Navbar.Brand>
                <SearchBar />

                {isLoggedIn ? (
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate("/upload")}>Upload product</Dropdown.Item>
                            <Dropdown.Item onClick={() => logout()} >Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <Nav.Link href="/login">Login</Nav.Link>
                )}
            </Container>
        </Navbar>
    )
}
export default Header