import React, {useEffect, useState} from "react";
import Header from "./Header";
import ProductSquares from "./ProductSquares";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import ProductGrid from "./ProductGrid";

function HomePage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header />
            <Container>
                 <Row style={{backgroundColor: "#f5a9b8"}}>
                    {products && products.map((product) => {
                        return (
                            <Col md={4}>
                                <div style={{width: "350px"}}>
                                    <div>
                                        <Link to={`/products/${product.id}`} style={{textDecoration: "none", color: "black"}} >
                                            <Card style={{margin: "15px"}}>
                                                <Card.Img variant="top" src={product.imgURL}/>
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>
                                                        {product.tag} for only ${product.cost}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
        )
    }

export default HomePage