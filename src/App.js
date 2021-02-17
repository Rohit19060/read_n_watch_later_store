import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./Home";
import Read from "./Read";
import Watch from "./Watch";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <h1 className="main_heading"><Link to="/read">Read</Link> n <Link to="/watch">Watch</Link> Later Store</h1>
          <div style={{ marginTop: "120px" }}></div>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/read">
                <Read />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
export default App;
