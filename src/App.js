import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "./App.css";
export function Increase() {
    alert("Increased");
}

export function Decrease() {
    const count = 0;
    alert("Decreased");
}
function App(props) {
    const count = 0;
    return (
        <div className="App">
            <Container style={styles.container}>
                <Navbar expand="lg" variant="dark" bg="info" style={styles.nav}>
                    <Navbar.Brand href="#" style={styles.title}>
                        Number Increment
                    </Navbar.Brand>
                </Navbar>
            </Container>
            <div className="count">
                <center>{count}</center>
            </div>
            <Button
                onClick={() => Increase()}
                variant="success"
                style={styles.button}
                className="button__text"
            >
                Increase
            </Button>
            <Button
                onClick={() => Decrease()}
                variant="danger"
                style={styles.button_2}
                className="button__text"
            >
                Decrease
            </Button>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "lightgreen"
    },

    title: {
        fontSize: "35px",
        marginLeft: "500px",
    },
    button: {
        fontSize: "30px",
        height: "60px",
        width: "150px",
        marginTop: "300px",
        marginLeft: "690px",
    },
    button_2: {
        position: "fixed",
        fontSize: "30px",
        height: "60px",
        width: "150px",
        marginLeft: "10px",
        marginTop: "300px",
    },
};
export default App;
