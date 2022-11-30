import React from 'react';
import Container from '@mui/material/Container';
import "./styles.css";
import Logo from "../../assets/Logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

    return (
        <div className="navbar">
            <Container maxWidth="lg">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <div className="navbar-menu-large"><MenuIcon /></div>
                        <div className="navbar-logo">
                            <img src={Logo} />
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-search"><SearchIcon /></div>
                        <div className="navbar-menu"><MenuIcon /></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header