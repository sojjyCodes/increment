import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "./App.css";

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
            reset: 0,
        };
    }

    increment() {
        this.state.error = "";
        this.setState({
            count: this.state.count + 1,
        });

        if (this.state.count === 0) {
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

    reset() {
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <div className="App">
                <Container style={styles.container}>
                    <Navbar
                        expand="lg"
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
                <Button
                    onClick={() => this.reset()}
                    variant="warning"
                    style={styles.reset}
                >
                    RESET
                </Button>
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
    nav: {
        height: "60px",
    },
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
    reset: {
        fontSize: "20px",
        marginLeft: "755px",
        marginTop: "10px",
        width: "100px",
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
