/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-const-assign */
import { Component } from "react";
import axios from "axios";

export class TotalStorage extends Component {
  constructor(props) {
    super(props);

    this.state = { userCollection: [], storage: "" };
  }

  componentDidMount() {
    axios
      .get("/api/v1/users/me")
      .then((res) => {
        this.setState({ userCollection: res.data.data.data });
        console.log(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    const myUser = this.state.userCollection;
    const userStorage = myUser.totalStorage / 10;
    if (myUser.role === "standart") {
      this.state.storage = "1";
    } else if (myUser.role === "gold") {
      this.state.storage = "50";
    } else {
      // eslint-disable-next-line no-unused-expressions
      this.state.storage = "1000";
    }
    return (
      <div>
        Storage: {userStorage} / {this.state.storage} Gb{" "}
      </div>
    );
  }
}
