import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Layout/Navbar.css";

export class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.myNavbar = this.myNavbar(this);
    this.logout = this.logout.bind(this);

    this.state = { userCollection: [] };
  }

  componentDidMount() {
    axios
      .get("/api/v1/users/me")
      .then((res) => {
        this.setState({ userCollection: res.data.data.data });
        console.log(res.data.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  logout() {
    axios
      .get("/api/v1/users/me/logout")
      .then((res) => {
        console.log(res);
        alert("logouted");
        window.location.href = "/";
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  myNavbar() {
    if (true) {
      return (
        <>
          <Nav.Link>
            <Link to="/register">Signin</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/profile">Profile</Link>{" "}
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile/wallet">Wallet</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile/storage">Storage</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile/storage/updradeUser">Buy More Gb</Link>
          </Nav.Link>
          <Nav.Link>
            <button onClick={this.logout}>Logout</button>
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link>
            <Link to="/register">Register</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Chain Storage</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">{this.myNavbar}</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
