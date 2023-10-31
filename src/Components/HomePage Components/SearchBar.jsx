import React, { useState, useEffect, useRef } from "react";
import {getProductsAPI} from "../../API/GetProducts";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate()

    const [ searchInput, setSearchInput] = useState("")
    const [productData, setProductData] = useState("")
    const isFirstRender = useRef(true)
    const prodData = []

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    function findProd(prodName) {

    }

    async function search(e) {
        e.preventDefault()
        
        if (searchInput.length > 0) {

            const res = await fetch("http://localhost:3001/products")
            const data = await res.json()

            
            data.filter((prods) => {
                if (prods.name.match(searchInput.toLowerCase())) {
                    console.log("there's a match at ", prods.name)
                    navigate(`/products/${prods.id}`)
                }
            })
        } else {
            alert("you have to enter text to search")
        }
    }

    return (
        <div>
            <Form inline >
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchInput}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Button type="submit" onClick={search}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchBar