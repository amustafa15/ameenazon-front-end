import React from "react";
import Header from "../HomePage Components/Header";
import { Button, Form, Col } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const UploadProductComponent = () => {

    const [productData, setProductData] = useState({
        "name": "",
        "cost": "",
        "count": "",
        "tag": "",
        "searchID": "",
        "imgURL": "/Product Images/brooklyn-bridge.png",
        "imgCarousel": [
            "/Details Images/brooklyn bridge 1375px.png",
            "/Details Images/brooklyn-bridge-900px.png",
            "/Details Images/brooklyn bridge GONY 900px.png"
        ],
        "desc": ""
    })

    const navigate = useNavigate()

    const createItem = () => {
        const reqOptions = {
            method: 'POST',
            headers: { 'accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        };

        fetch('http://localhost:3001/products', reqOptions)
            .then(
                console.log("posted")
            )
            .then(res => res.json())
            .then(data => console.log(" ", data)) 
    }

    function handleChange(e) {
        if (e.target.name == "name") {
            const val = e.target.value 
            setProductData((prev) => ({...prev, name: val}))
        } else if (e.target.name == "cost") {
            const thing = e.target.value 
            const val = parseInt(thing)
            setProductData((prev) => ({...prev, cost: val}))
        } else if (e.target.name == "count") {
            const thing = e.target.value 
            const val = parseInt(thing)
            setProductData((prev) => ({...prev, count: val}))
        } else if (e.target.name == "tag") {
            const val = e.target.value 
            setProductData((prev) => ({...prev, tag: val}))
        } else if (e.target.name == "searchID") {
            const val = e.target.value
            setProductData((prev) => ({...prev, searchID: val}))
        } else if (e.target.name == "desc") {
            const val = e.target.value
            setProductData((prev) => ({...prev, desc: val}))
        }
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
                        <Form.Control name="cost" type="text" placeholder="Cost" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="count" type="text" placeholder="Count" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="tag" type="text" placeholder="Tag" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="searchID" type="text" placeholder="searchID" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group style={{height: '60px'}}>
                        <Form.Control name="desc" type="text" placeholder="Description" onChange={handleChange} />
                    </Form.Group>
                </Form>
            </Col>
            <Link to={"/"} style={{textDecoration: "none", color: "black"}}>
                <Button onClick={createItem} variant="outline-primary" style={{borderRadius: '20px', width: '200px', margin: '20px'}}>Create Product</Button>
            </Link>
            
        </div>
        
    )
}

export default UploadProductComponent