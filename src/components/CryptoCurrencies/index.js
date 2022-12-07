import React, { useState,useEffect } from 'react'
import "./styles.css";
import Container from '@mui/material/Container';
import DownArrow from "../../assets/DownArrow.svg";
import RedDown from "../../assets/RedDown.svg";
import GreenDown from "../../assets/GreenDown.svg";
import TableCellStar from "../../assets/TableCellStar.svg";
import TableCellMenu from "../../assets/TableCellMenu.svg";
import ModalCross from "../../assets/ModalCross.svg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import Pagination from '@mui/material/Pagination';
import StarIcon from '@mui/icons-material/Star';



const CryptoCurrencies = ({ data,page,setPage,rowsPerPage,list,handleList}) => {
    const [open, setOpen] = useState(false);
    const [rowItem, setRowItem] = useState("");



    const handleOpen = (event, item) => {
        setOpen(true);
        setRowItem(item)
        // console.log(item)
    }
    const handleClose = () => setOpen(false);


    useEffect(() => {
        console.log("list",list)
    },[list])

    return (
        <div className="tableView">
            <Container maxWidth="lg">
                <TableContainer>
                    <Table className="tableLarge">
                        <TableHead className="tableHead">
                            <TableRow>
                                <TableCell className="thStar"></TableCell>
                                <TableCell className="th1">#</TableCell>
                                <TableCell className="th2">NAME</TableCell>
                                <TableCell className="th3">PRICE</TableCell>
                                <TableCell className="th4">24H <img src={DownArrow} alt="downArrow" /></TableCell>
                                <TableCell className="th5">7D</TableCell>
                                <TableCell className="th6">MARKET CAP</TableCell>
                                <TableCell className="th7">VOLUME(24H)</TableCell>
                                <TableCell className="th8">CIRCULATING SUPPLY</TableCell>
                                <TableCell className="thMenu"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="tdStar" onClick={()=>handleList(item)}>{!list.includes(item) ?<img src={TableCellStar} alt="cellStar" />:<StarIcon fontSize="small"/>}</TableCell>
                                        <TableCell className="td1">{(page-1)*rowsPerPage+index+1}</TableCell>
                                        <TableCell className="td2">
                                            <div style={{ display: 'flex' }}>
                                                <img src={item.image} className="coin-image" alt="coin" />
                                                <span className="coin-name">{item.name}</span>
                                                <span className="coin-symbol">{item.symbol.toUpperCase()}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="td3">
                                            <span className="coin-price">${item["current_price"]}</span>
                                        </TableCell>
                                        <TableCell className="td4">
                                            <div style={{ display: 'flex' }}>
                                                <img src={RedDown} alt="redDown" style={{ marginRight: "0.3rem" }} />
                                                <span className="coin-24H-text">{item["price_change_percentage_24h_in_currency"].toFixed(2)}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="td5">
                                            <div style={{ display: 'flex' }}>
                                                <img src={GreenDown} alt="greenDown" style={{ marginRight: "0.3rem" }} />
                                                <span className="coin-7D-text">{item["price_change_percentage_7d_in_currency"].toFixed(2)}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="td6">
                                            <span className="coin-market-cap">$1,502,989,963,439,782</span>
                                        </TableCell>
                                        <TableCell className="td7">
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span className="coin-volume1">$51,502,989,963,439</span>
                                                <span className="coin-volume2">932,071 {item.symbol.toUpperCase()}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="td8">
                                            <span className="coin-circulating-supply">19220606 {item.symbol.toUpperCase()}</span>
                                        </TableCell>
                                        <TableCell className="tdMenu">
                                            <img src={TableCellMenu} alt="tableMenu" />
                                        </TableCell>
                                    </TableRow>

                                ))}
                        </TableBody>
                    </Table>

                    <Table className="tableSmall">
                        <TableHead className="tableHead">
                            <TableRow>
                                <TableCell className="thStar"></TableCell>
                                <TableCell className="th1">#</TableCell>
                                <TableCell className="th2">NAME</TableCell>
                                <TableCell className="th3">PRICE</TableCell>
                                <TableCell className="th4">24H <img src={DownArrow} alt="downArrow" /></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((item, index) => (
                                    <TableRow key={item.id} onClick={(event) => handleOpen(event, item)} style={{ cursor: "pointer" }}>
                                        <TableCell className="tdStar"><img src={TableCellStar} alt="cellStar" /></TableCell>
                                        <TableCell className="td1">{(page-1)*rowsPerPage+index+1}</TableCell>
                                        <TableCell className="td2">
                                            <div style={{ display: 'flex' }}>
                                                <img src={item.image} className="coin-image" alt="coin" />
                                                <span className="coin-name">{item.name}</span>
                                                <span className="coin-symbol">{item.symbol.toUpperCase()}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="td3">
                                            <span className="coin-price">${item["current_price"]}</span>
                                        </TableCell>
                                        <TableCell className="td4">
                                            <div style={{ display: 'flex' }}>
                                                <img src={RedDown} alt="redDown" style={{ marginRight: "0.3rem" }} />
                                                <span className="coin-24H-text">{item["price_change_percentage_24h_in_currency"].toFixed(2)}%</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {rowItem ? (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        className="modal"
                    >
                        <div className="modal-box">
                            <div className="modal-box-header">
                                <div className="modal-box-header-left">
                                    <img src={rowItem.image} className="coin-image" alt="coinImg" />
                                    <span className="coin-name">{rowItem.name}</span>
                                </div>
                                <div className="modal-box-header-right">
                                    <img src={ModalCross} alt="cross" onClick={handleClose} style={{ cursor: 'pointer' }} />
                                </div>
                            </div>

                            <div className="modal-box-top">
                                <div className="modal-box-price modal-top-flex">
                                    <span className="th3">PRICE</span>
                                    <span className="coin-price">${rowItem["current_price"]}</span>
                                </div>
                                <div className="modal-box-24H modal-top-flex">
                                    <span className="th4">24H</span>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={RedDown} alt="redDown" style={{ marginRight: "0.3rem", height: "6px", width: "10px" }} />
                                        <span className="coin-24H-text">{rowItem["price_change_percentage_24h_in_currency"].toFixed(2)}%</span>
                                    </div>
                                </div>
                                <div className="modal-box-7D modal-top-flex">
                                    <span className="th5">7D</span>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={GreenDown} alt="greenDown" style={{ marginRight: "0.3rem" }} />
                                        <span className="coin-7D-text">{rowItem["price_change_percentage_7d_in_currency"].toFixed(2)}%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-box-bottom">
                                <div className="modal-box-market-cap modal-box-bottom-flex modal-box-margin">
                                    <span className="market-cap">MARKET CAP</span>
                                    <span className="coin-market-cap">$1,502,989,963,439,782</span>
                                </div>
                                <div className="modal-box-market-cap modal-box-bottom-flex modal-box-margin">
                                    <span className="volume-24H">VOLUME(24H)</span>
                                    <div>
                                        <span className="coin-volume1">$51,502,989,963,439</span><span className="coin-volume2"> (932,071 {rowItem.symbol.toUpperCase()})</span>
                                    </div>

                                </div>
                                <div className="modal-box-market-cap modal-box-bottom-flex modal-box-margin">
                                    <span className="circulating">CIRCULATING SUPPLY</span>
                                    <span className="coin-circulating-supply">19220606 {rowItem.symbol.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                    </Modal>
                ) : null}

                <div className="pagination">
                    <Pagination
                        page={page}
                        onChange={(e, value) => setPage(value)}
                        // count={Math.ceil(data.length / rowsPerPage)}
                        count={10}
                        variant="outlined"
                        size="small"
                        color="primary" 
                        shape="rounded" />
                </div>
            </Container>
        </div >
    )
}

export default CryptoCurrencies


// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//      "current_price": 1379967,
//     "price_change_percentage_24h_in_currency": 2.1694403172327794,
//     "price_change_percentage_7d_in_currency": 4.426901569473925,
//     "market_cap": 26527476327625,
//      "total_volume": 2200229024230,
//      "high_24h": 1389885,
//     "circulating_supply": 19220606,
// }

// data.slice((page - 1) * rowsPerPage, page * rowsPerPage)