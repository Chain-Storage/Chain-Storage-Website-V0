import { Component } from "react";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserPrivateKey = this.onChangeUserPrivateKey.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: "",
      PrivateKey: "",
    };
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeUserPrivateKey(e) {
    this.setState({ PrivateKey: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();

    const userObject = {
      password: this.state.password,
      PrivateKey: this.state.PrivateKey,
    };

    axios
      .post("/api/v1/users/login", userObject)
      .then(async (res) => {
        console.log(res.data);
        console.log(res.data.token);
        console.log(res.data.data.user.PrivateKey);
        localStorage.setItem("jwt", res.data.token);
        alert("Login successful");
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ password: "", PrivateKey: "" });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.onChangeUserPassword}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Private Key</label>
            <input
              type="text"
              value={this.state.PrivateKey}
              onChange={this.onChangeUserPrivateKey}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
