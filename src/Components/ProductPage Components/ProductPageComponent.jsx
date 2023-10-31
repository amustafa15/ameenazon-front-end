import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../HomePage Components/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductPageCarousel from './ProductPageCarousel'
import { Container, Row, Col, Button } from 'react-bootstrap'

const ProductPageComponent = () => {

    const {id} = useParams()
    
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(response => response.json())
        .then(data => setProductData(data))
    }, [])

    

    return (
        <div>
            <Header />
            <Container fluid style={{margin: "50px"}}>
                <Row>
                    <Col xl={5} style={{backgroundColor: "#f5a9b8"}}>
                        <ProductPageCarousel carouselURL={productData.imgCarousel}/>
                    </Col>
                    <Col xl={6} style={{backgroundColor: "#6a9e32", margin: "20px"}}>
                        <h1>The {productData.name}</h1>
                        <h2>It could be yours for only ${productData.cost} </h2>
                        <h5>Details about bridge</h5>
                        <h3>Description: {productData.desc}</h3>
                        <Col xxs={{span: 2, offset: 5}}>
                        <Row >
                        </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductPageComponent