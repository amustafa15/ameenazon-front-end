import React from "react"

const ProductSquares = ({product}) => {

    return (
        <div style={{backgroundColor: "#6a9e32"}}>
            <img src={product.imgURL} alt="a good bridge" />
            <p >{product.name}</p>
            <p>${product.cost}</p>
        </div>
    )
}

export default ProductSquares