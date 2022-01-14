import "./App.css";
import { Login } from "./Containers/Login";
import { Register } from "./Containers/Register";
import { ShowKeys } from "./Componenets/ShowKeys";
import { Switch, Route } from "react-router-dom";
import { Profile } from "./Containers/Profile";
import { Wallet } from "./Containers/Wallet";
import { Storage } from "./Containers/Storage";
import { MyNavbar } from "./Componenets/Layout/Navbar";
import { UpgradeUser } from "./Containers/UpgradeUser";
import { Container, Row } from "react-bootstrap";
import { Home } from "./Containers/Home";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container className="mb-5 mt-5">
        <Row>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/showKeys" component={ShowKeys} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/wallet" component={Wallet} />
            <Route exact path="/profile/storage" component={Storage} />
            <Route
              exact
              path="/profile/storage/updradeUser"
              component={UpgradeUser}
            />
          </Switch>
        </Row>
      </Container>
      <footer>
        <p>Craeted by Yurikaza all right are reserved</p>
      </footer>
    </div>
  );
}

export default App;
