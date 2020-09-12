import React, { Component, useState } from "react";
import { Container, Navbar, Button, Alert } from "react-bootstrap";
import "./App.css";
import { render } from "@testing-library/react";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count_style: {
                color: "black",
                fontSize: "50px",
                placeContent: "center",
                marginLeft: "30px",
                marginTop: "285px",
            },
            error: "",
        };
    }

    increment() {
        this.state.error = "";
        this.setState({
            count: this.state.count + 1,
        });

        if (this.state.count == 0) {
            let style = {
                color: "black",
                fontSize: "50px",
                placeContent: "center",
                marginLeft: "30px",
                marginTop: "285px",
            };
            this.state.count_style = style;
        }
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
        if (this.state.count <= 1) {
            let style = {
                color: "red",
                fontSize: "50px",
                placeContent: "center",
                marginLeft: "30px",
                marginTop: "255px",
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
                        <div class="container">
                            <h4 className="head">Number increment</h4>
                        </div>
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
                        <p style={styles.error} class="text-10px">
                            {this.state.error}
                        </p>
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
    container: {
        height: "10px",
    },
    button: {
        fontSize: "20px",
        marginLeft: "700px",
        marginTop: "15px",
    },
    button_2: {
        fontSize: "20px",
        marginLeft: "15px",
        marginTop: "15px",
    },
    error: {
        color: "red",
        fontSize: "20px",
        marginTop: "20px",
        marginLeft: "30px",
        marginRight: "0",

        placeContent: "center",
    },
};
