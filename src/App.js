import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./Home";
import Read from "./Read";
import Watch from "./Watch";
import ReadAddLink from "./ReadAddLink";
import WatchAddLink from "./WatchAddLink";
import WatchCount from "./WatchCount";
import ReadCount from "./ReadCount";

class App extends Component {
  render() {
    return (
      <div className="main_child">
        <Router>
          <h1 className="main_heading"><Link to="/read">Read<ReadCount /></Link>&nbsp;n&nbsp;<Link to="/watch">Watch<WatchCount /></Link>&nbsp;Later Store</h1>
          <div style={{ marginTop: "110px" }}></div>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/read">
                <Read />
              </Route>
              <Route path="/addReadLink">
                <ReadAddLink />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
              <Route path="/addWatchLink">
                <WatchAddLink />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
export default App;
