import React, { useState } from "react";
import Container from '@mui/material/Container';
import Carousel from "react-elastic-carousel";
import Carousel1 from "../../assets/Carousel1.svg";
import Carousel2 from "../../assets/Carousel2.svg";
import Carousel3 from "../../assets/Carousel3.svg";
import Star from "../../assets/Star.svg";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import "./styles.css"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];


const CarouselView = ({setRowsPerPage}) => {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [rows, setRows] = useState(10);
  const handleChange = (event) => {
    setRows(event.target.value);
    setRowsPerPage(event.target.value);
  };

  return (
    <div className="carousel">
      <Container maxWidth="lg" id="container-carousel">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {/* {items.map((item) => ( */}
            <div className="carousel-item">
              <div className="carousel-item-img">
                <img src={Carousel1} alt="carousel-img" />
              </div>
              <div className="carousel-item-details">
                <span className="carousel-item-text-top">Take a quiz!</span>
                <span className="carousel-item-text-bottom">Learn and earn $CKB</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-img">
                <img src={Carousel2} alt="carousel-img" />
              </div>
              <div className="carousel-item-details">
                <span className="carousel-item-text-top">Portfolio 🔥</span>
                <span className="carousel-item-text-bottom">Track your trades in one place, not all over the place</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-img">
                <img src={Carousel3} alt="carousel-img" />
              </div>
              <div className="carousel-item-details">
                <span className="carousel-item-text-top">Portfolio</span>
                <span className="carousel-item-text-bottom">Track your trades in one place, not all over the place</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-img">
                <img src={Carousel1} alt="carousel-img" />
              </div>
              <div className="carousel-item-details">
                <span className="carousel-item-text-top">Take a quiz!</span>
                <span className="carousel-item-text-bottom">Learn and earn $CKB</span>
              </div>
            </div>
            {/* ))} */}
          </Carousel>
        </div>
        <div className="carousel-bottom-content">
          <span className="top-100">Top 100 Cryptocurrencies by Market Cap</span>

          <div className="table-head">
            <div className="table-head-left">
              <div className="favourites flex">
                <img src={Star} className="favourites-star" />
                <span className="favourites-text">Favourites</span>
              </div>
              <div className="cryptoCurrencies flex">
                <span className="crypto-text">CryptoCurrencies</span>
              </div>
              <div className="defi flex">
                <span className="defi-text">DeFi</span>
              </div>
              <div className="nft flex">
                <span className="nft-text">NFTs & Collections</span>
              </div>
            </div>
            <div className="table-head-right">
              <span className="show-rows">show rows</span>
              <Select
                value={rows}
                onChange={handleChange}
                className="select-container"
              >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </div>
        </div>
    </div>
      </Container >
    </div >
  )
}

export default CarouselView