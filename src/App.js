import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "./App.css";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        });
        if (this.state.count === 10) {
            this.setState({
                count: this.state.count + 0,
            });
        }
    }

    decrement() {
        this.setState({
            count: this.state.count - 1,
        });
        if (this.state.count === 0) {
            this.setState({
                count: this.state.count - 0,
            });
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
                            Number Increment
                        </Navbar.Brand>
                    </Navbar>
                </Container>
                <div className="count">
                    <center style={styles.count}>{this.state.count}</center>

                    <Button
                        onClick={() => this.increment()}
                        variant="success"
                        style={styles.button}
                        className="button__text"
                    >
                        Increase
                    </Button>
                    <Button
                        onClick={() => this.decrement()}
                        variant="danger"
                        style={styles.button_2}
                        className="button__text"
                    >
                        Decrease
                    </Button>
                </div>
            </div>
        );
    }
}
const styles = {
    container: {
        borderColor: "lightgreen",
    },

    title: {
        fontSize: "35px",
        marginLeft: "500px",
    },
    count: {
        fontSize: "60px",
        marginleft: "100px",
        placeContent: "center",
        marginLeft: "100px",
        marginTop: "260px",
    },
    button: {
        fontSize: "30px",
        height: "60px",
        width: "150px",
        marginTop: "115px",
        marginLeft: "690px",
    },
    button_2: {
        position: "fixed",
        fontSize: "30px",
        height: "60px",
        width: "150px",
        marginLeft: "10px",
        marginTop: "115px",
    },
};
