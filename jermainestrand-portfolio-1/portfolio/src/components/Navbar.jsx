const styles = {
    navbar: {
        backgroundColor: "#333",
        color: "rgb(65, 164, 225)",
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

function Navbar() {
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