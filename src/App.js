
import './App.css';
import {useState,useEffect} from 'react';
import Header from "./components/Header";
import axios from "axios";
import CarouselView from "./components/Carousel";
import CryptoCurrencies from "./components/CryptoCurrencies";

function App() {
const [data,setData] = useState([]);

const [page, setPage] = useState(1);
const [rowsPerPage,setRowsPerPage] = useState(10);

const fetchData = async() =>{
   const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=${rowsPerPage}&amp;page=${page}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`)
   console.log(response.config.url)
   const result =  response.data;
   console.log(result)
     setData(result);
}

useEffect(() => {
  fetchData()
},[])

useEffect(() => {
   fetchData()
},[page,rowsPerPage])


  
return (
    <div className="App">
           <Header/>
           <CarouselView setRowsPerPage={setRowsPerPage}/>
           <CryptoCurrencies data={data} page={page} setPage={setPage} rowsPerPage={rowsPerPage}/>
    </div>
  );
}

export default App;
