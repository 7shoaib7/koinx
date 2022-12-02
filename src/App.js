
import './App.css';
import {useState,useEffect} from 'react';
import Header from "./components/Header";
import axios from "axios";
import CarouselView from "./components/Carousel";
import CryptoCurrencies from "./components/CryptoCurrencies";

function App() {
const [data,setData] = useState([])

const fetchData = async() =>{
   const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d")
   const result =  response.data;
     setData(result);
}

useEffect(() => {
   fetchData()
},[])
  
return (
    <div className="App">
           <Header/>
           <CarouselView />
           <CryptoCurrencies data={data} />
    </div>
  );
}

export default App;
