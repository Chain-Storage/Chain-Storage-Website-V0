/* eslint-disable no-const-assign */
import { Component } from "react";
import axios from "axios";
import { WalletBalance } from "../Componenets/WalletBalance";
import { TotalStorage } from "../Componenets/TotalStorage";

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.ethPrice = this.ethPrice.bind(this);
    this.state = { userCollection: [] };
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

  ethPrice() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    const myUser = this.state.userCollection;
    return (
      <div>
        <h3>Private Key: {myUser.PrivateKey}</h3>
        <h3>Public Key: {myUser.Address}</h3>
        <h3>Role: {myUser.role}</h3>
        <h3>
          {" "}
          <WalletBalance />{" "}
        </h3>
        <h3>
          <TotalStorage />
        </h3>
      </div>
    );
  }
}
