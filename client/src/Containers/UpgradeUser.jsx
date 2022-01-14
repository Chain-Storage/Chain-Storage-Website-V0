import { Component } from "react";
import axios from "axios";

export class UpgradeUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmitGold = this.onSubmitGold.bind(this);
    this.onSubmitPreminum = this.onSubmitPreminum.bind(this);
  }

  onSubmitGold(e) {
    e.preventDefault();
    axios
      .patch("/api/v1/users/me/storage/buyGbGold")
      .then((res) => {
        console.log(res.data);
        alert("Buyed Gold Role");
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmitPreminum(e) {
    e.preventDefault();
    axios
      .patch("/api/v1/users/me/storage/buyGbPreminum")
      .then((res) => {
        console.log(res.data);
        alert("Buyed Preminum Role");
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Gold</h1>
        <h1>Price: 0.007 Eth</h1>
        <h1>50 Gb</h1>
        <form onSubmit={this.onSubmitGold}>
          <div className="form-group">
            <input type="submit" />
          </div>
        </form>
        <br />
        <h1>Preminum</h1>
        <h1>Price: 0.05 Eth</h1>
        <h1>1000 Gb</h1>
        <form onSubmit={this.onSubmitPreminum}>
          <div className="form-group">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
