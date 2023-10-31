import React, { useEffect, useState } from 'react'
import Header from '../HomePage Components/Header'
import { useLocation } from 'react-router-dom'

const SearchResultsPage = () => {

    const state = useLocation()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/products")
        .then(response => response.json())
        .then(data => setProduct(data))
        .then(product.filter((prod) => {
            if (prod.name.match(state.state)) {
                return("it is a match") 
            }
            return prod.name.match(state.state)
        })) 
    }, [])

    return (
        <div>
            <Header />
            <p></p>
            <p>there should be a table here with a list or whatever</p>
            <p>there should be a different screen rendered for if the search fails</p>
        </div>
        
    )
}

export default SearchResultsPage