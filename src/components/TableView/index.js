import React from 'react'
import "./styles.css";
import Container from '@mui/material/Container';
import DownArrow from "../../assets/DownArrow.svg";
import RedDown from "../../assets/RedDown.svg";
import GreenDown from "../../assets/GreenDown.svg";
import TableCellStar from "../../assets/TableCellStar.svg";
import TableCellMenu from "../../assets/TableCellMenu.svg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableView = ({ data }) => {
    return (
        <div className="tableView">
            <Container maxWidth="lg">
                <TableContainer>
                    <Table>
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
                            <TableRow>
                                <TableCell className="tdStar"><img src={TableCellStar} alt="cellStar" /></TableCell>
                                <TableCell className="td1">1</TableCell>
                                <TableCell className="td2">
                                    <div style={{ display: 'flex' }}>
                                        <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="coin-image" alt="coin" />
                                        <span className="coin-name">Bitcoin</span>
                                        <span className="coin-symbol">BTC</span>
                                    </div>
                                </TableCell>
                                <TableCell className="td3">
                                    <span className="coin-price">$1379967</span>
                                </TableCell>
                                <TableCell className="td4">
                                    <div style={{ display: 'flex' }}>
                                        <img src={RedDown} alt="redDown" style={{ marginRight: "0.3rem" }} />
                                        <span className="coin-24H-text"> 2.169%</span>
                                    </div>
                                </TableCell>
                                <TableCell className="td5">
                                    <div style={{ display: 'flex' }}>
                                        <img src={GreenDown} alt="greenDown" style={{ marginRight: "0.3rem" }} />
                                        <span className="coin-7D-text"> 4.42%</span>
                                    </div>
                                </TableCell>
                                <TableCell className="td6">
                                    <span className="coin-market-cap">$1,502,989,963,439,782</span>
                                </TableCell>
                                <TableCell className="td7">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span className="coin-volume1">$51,502,989,963,439</span>
                                        <span className="coin-volume2">932,071 BTC</span>
                                    </div>
                                </TableCell>
                                <TableCell className="td8">
                                    <span className="coin-circulating-supply">19220606 BTC</span>
                                </TableCell>
                                <TableCell className="tdMenu">
                                    <img src={TableCellMenu} alt="tableMenu"/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div >
    )
}

export default TableView


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