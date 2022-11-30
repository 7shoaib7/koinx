import React, { useState } from "react";
import Container from '@mui/material/Container';
import Carousel from "react-elastic-carousel";
import Carousel1 from "../../assets/Carousel1.svg";
import Carousel2 from "../../assets/Carousel2.svg";
import Carousel3 from "../../assets/Carousel3.svg";
import "./styles.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
];


const CarouselView = () => {
    // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    return (
        <div className="carousel">
            <Container maxWidth="lg">
                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>
                        {/* {items.map((item) => ( */}
                             <div className="carousel-item">
                                   <div className="carousel-item-img">
                                     <img src={Carousel1} alt="carousel-img"/>
                                   </div>
                                   <div className="carousel-item-details">
                                           <span className="carousel-item-text-top">Take a quiz!</span>
                                           <span className="carousel-item-text-bottom">Learn and earn $CKB</span>
                                   </div>
                             </div>
                             <div className="carousel-item">
                                   <div className="carousel-item-img">
                                     <img src={Carousel2} alt="carousel-img"/>
                                   </div>
                                   <div className="carousel-item-details">
                                           <span className="carousel-item-text-top">Portfolio 🔥</span>
                                           <span className="carousel-item-text-bottom">Track your trades in one place, not all over the place</span>
                                   </div>
                             </div>
                             <div className="carousel-item">
                                   <div className="carousel-item-img">
                                     <img src={Carousel3} alt="carousel-img"/>
                                   </div>
                                   <div className="carousel-item-details">
                                           <span className="carousel-item-text-top">Portfolio</span>
                                           <span className="carousel-item-text-bottom">Track your trades in one place, not all over the place</span>
                                   </div>
                             </div>
                             <div className="carousel-item">
                                   <div className="carousel-item-img">
                                     <img src={Carousel1} alt="carousel-img"/>
                                   </div>
                                   <div className="carousel-item-details">
                                           <span className="carousel-item-text-top">Take a quiz!</span>
                                           <span className="carousel-item-text-bottom">Learn and earn $CKB</span>
                                   </div>
                             </div>
                        {/* ))} */}
                    </Carousel>
                </div>
            </Container>
        </div>
    )
}

export default CarouselView