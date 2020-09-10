import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Container>
                <Navbar expand="lg" variant="dark" bg="info">
                    <Navbar.Brand href="#" style={styles.title}>
                        Increment
                    </Navbar.Brand>
                </Navbar>
            </Container>
            <Button
                variant="info"
                style={styles.button}
                className="button__text"
            >
                Increase
            </Button>
        </div>
    );
}

const styles = {
    title: {
        marginLeft: "500px",
    },
    button: {
        fontSize: "40px",
        height: "60px",
        width: "150px",
        marginTop: "440px",
        marginLeft: "750px",
    },
};
export default App;
