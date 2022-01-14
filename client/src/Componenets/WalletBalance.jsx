/* eslint-disable no-const-assign */
import { Component } from "react";
import axios from "axios";

export class WalletBalance extends Component {
  constructor(props) {
    super(props);

    this.ethPrice = this.ethPrice.bind(this);

    this.state = {
      userCollection: [],
      EthPrice: "",
    };
  }

  componentDidMount() {
    axios
      .get("/api/v1/users/me")
      .then((res) => {
        this.setState({ userCollection: res.data.data.data });
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
        this.EthPrice = res.ethereum.usd;
        console.log(this.EthPrice);
      });
  }

  render() {
    const myUser = this.state.userCollection;
    if (myUser.WalletBalance === undefined || 0 || null) {
      myUser.WalletBalance = 0;
    } else {
      // eslint-disable-next-line no-self-assign
      myUser.WalletBalance = myUser.WalletBalance;
    }
    return (
      <div>
        <h3>
          Wallet Balance: {myUser.WalletBalance} ETH / {this.state.EthPrice} USD{" "}
        </h3>
      </div>
    );
  }
}
