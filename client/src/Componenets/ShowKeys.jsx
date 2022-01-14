import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class ShowKeys extends Component {
  constructor(props) {
    super(props);
    this.state = { userCollection: [] };
  }

  componentDidMount() {
    axios
      .get("/api/v1/users/me")
      .then((res) => {
        this.setState({ userCollection: res.data.data.data });
        localStorage.setItem("jwt", res.data.token);
        console.log(res.data.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="keys">
          <h5>
            Here is your Private Key you have you have to use that when you are
            login
          </h5>
        </div>
        <h3>Private Key: {this.state.userCollection.PrivateKey}</h3>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
