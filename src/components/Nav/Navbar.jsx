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


    return (
        <nav style={styles.navbar}>
            <h1>Jermaine Strand</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}