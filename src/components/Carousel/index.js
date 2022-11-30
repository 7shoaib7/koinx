import React, { useState } from "react";
import Container from '@mui/material/Container';
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];


const CarouselView = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    return (
        <div className="carousel">
            <Container maxWidth="lg">
                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>
                        {items.map((item) => (
                             <div>

                             </div>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </div>
    )
}

export default CarouselView