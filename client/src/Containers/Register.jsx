import { Component } from "react";
import axios from "axios";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserPasswordConfirm =
      this.onChangeUserPasswordConfirm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: "",
      passwordConfirm: "",
    };
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeUserPasswordConfirm(e) {
    this.setState({ passwordConfirm: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };

    axios
      .post("/api/v1/users/signup", userObject)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/showKeys";
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ password: "", passwordConfirm: "" });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
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
            <label>Password Confrim</label>
            <input
              type="password"
              value={this.state.passwordConfirm}
              onChange={this.onChangeUserPasswordConfirm}
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
