import { Component } from "react";
import axios from "axios";
import { TotalStorage } from "../Componenets/TotalStorage";

export class Storage extends Component {
  constructor(props) {
    super(props);

    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);

    this.state = {
      myFile: null,
      storageCollection: [],
    };
  }

  fileChangedHandler(event) {
    this.setState({ myFile: event.target.files[0] });
  }

  uploadHandler() {
    const formData = new FormData();
    formData.append("myFile", this.state.myFile, this.state.myFile.name);
    axios.post("/api/v1/users/me/storage/uploadFile", formData).then((res) => {
      console.log(res);
      alert("file uploaded");
    });
  }

  componentDidMount() {
    axios
      .get("/api/v1/users/me")
      .then((res) => {
        this.setState({ storageCollection: res.data.data.Storage });
        console.log(res.data.data.Storage);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>

        <h1>Files</h1>
        <h5>
          {" "}
          <TotalStorage />{" "}
        </h5>
        <div className="files">
          {this.state.storageCollection.map((file) => (
            <div className="user">
              {file.Userfile} - {file.fileSizeAsMb} Mb{" "}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(file.link[0]);
                  alert("Link Copied");
                }}
              >
                Share
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
