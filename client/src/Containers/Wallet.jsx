import { Component } from "react";
import axios from "axios";
import { Form, Button, Container, Row } from "react-bootstrap";

export class Wallet extends Component {
  constructor(props) {
    super(props);

    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeEthValue = this.onChangeEthValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      to: "",
      ethValue: "",
    };
  }
  onChangeTo(e) {
    this.setState({ to: e.target.value });
  }

  onChangeEthValue(e) {
    this.setState({ ethValue: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();

    const userObject = {
      to: this.state.to,
      ethValue: this.state.ethValue,
    };

    axios
      .post("/api/v1/users/me/sendTransactions", userObject)
      .then(async (res) => {
        console.log(res.data);
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ to: "", ethValue: "" });
  }

  render() {
    return (
      <div>
        <Container className="mb-5 mt-5">
          <h1>Send Transaction</h1>
          <Row>
            <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>To</Form.Label>
                <Form.Control
                  value={this.state.to}
                  onChange={this.onChangeTo}
                  type="text"
                  placeholder="0x2423425435"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Value</Form.Label>
                <Form.Control
                  value={this.state.ethValue}
                  onChange={this.onChangeEthValue}
                  type="text"
                  placeholder="0.05"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
