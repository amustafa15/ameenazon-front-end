import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const ProductPageCarousel = ({carouselURL}) => {
    
    const [index, setIndex] = useState(0)

    const handleSelect = (selectionIndex) => {
        setIndex(selectionIndex)
    }

    return (
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {carouselURL && carouselURL.map((imgCarouselURL) => {
                        return (
                            <Carousel.Item>
                                <img src={imgCarouselURL} alt="picket to pickens"/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default ProductPageCarousel