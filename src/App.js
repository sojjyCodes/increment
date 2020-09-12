import React, { Component, useState } from "react";
import { Container, Navbar, Button, Alert } from "react-bootstrap";
import "./App.css";
import { render } from "@testing-library/react"; // dfdhdfvjfdnhfgj
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count_style: {
                color: "black",
                fontSize: "60px",
                marginleft: "100px",
                placeContent: "center",
                marginLeft: "80px",
                marginTop: "260px",
            },
            error: "",
        };
    }

    increment() {
        this.state.error = "";
        this.setState({
            count: this.state.count + 1,
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1,
        });
        if (this.state.count < 1) {
            this.setState({
                count: (this.state.count = 0),
            });
            this.state.error = "Sorry, you can't go less than zero!";
        }
        if (this.state.count === 0) {
            let style = {
                color: "red",
                fontSize: "60px",
                marginleft: "100px",
                placeContent: "center",
                marginLeft: "80px",
                marginTop: "260px",
            };
            this.state.count_style = style;
        }
    }

    render() {
        return (
            <div className="App">
                <Container style={styles.container}>
                    <Navbar
                        expand="lg"
                        variant="dark"
                        bg="info"
                        style={styles.nav}
                    >
                        <Navbar.Brand href="#" style={styles.title}>
                            <h1 class="head"> Number Increment</h1>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
                <div className="count">
                    <center style={this.state.count_style}>
                        {this.state.count}
                    </center>

                    <Button
                        onClick={() => this.increment()}
                        variant="success"
                        style={styles.button}
                    >
                        Increase
                    </Button>
                    <Button
                        onClick={() => this.decrement()}
                        variant="danger"
                        style={styles.button_2}
                    >
                        Decrease
                    </Button>
                </div>
                <Container>
                    <center>
                        <p style={styles.error}>{this.state.error}</p>
                    </center>
                </Container>
                <footer className="footer">
                    <p id="footer-text">
                        <center>
                            {" "}
                            <strong>Increment Number</strong> by{" "}
                            <a href="https://github.com/sojjyCodes">
                                Ebenezer Alagbe.{" "}
                            </a>{" "}
                            The source code is licensed
                            {""}
                            <a href="http://opensource.org/licenses/mit-license.php">
                                {""} MIT.
                            </a>
                        </center>
                    </p>
                </footer>
            </div>
        );
    }
}
const styles = {
    title: {
        marginLeft: "470px",
    },
    button: {
        fontSize: "25px",
        marginTop: "50px",
        marginLeft: "740px",
    },
    button_2: {
        fontSize: "25px",
        marginLeft: "15px",
        marginTop: "50px",
    },
    count: {
        color: "red",
        fontSize: "60px",
        marginleft: "100px",
        placeContent: "center",
        marginLeft: "80px",
        marginTop: "260px",
    },
    error: {
        color: "red",
        fontSize: "20px",
        marginTop: "20px",
        marginLeft: "100px",
        marginRight: "0",
    },
};
