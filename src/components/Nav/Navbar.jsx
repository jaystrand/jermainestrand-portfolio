import React from 'react';
import './navbar.css';

const styles = {
    navbar: {
        backgroundColor: "#c21809",
        color: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    navbarLinkStyle: {
        color: "white",
        textDecoration: "none",
        padding: "10px"
    }
};

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1>Jermaine Strand</h1>
            <ul>                
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;