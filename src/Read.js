import React, { Component } from "react";
import ReadLink from "./ReadLink";
import axios from "axios";

class Read extends Component {
  state = {
    link: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/read").then((res) => {
      this.setState({ link: res.data });
    });
  }

  deleteLink = (id) => {
    axios
      .delete("http://localhost:5000/api/read?id=" + id)
      .then((res) => {
        this.setState({ link: res.data });
      })
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <div>
        <h1 className="sub_heading">Read Later</h1>
        <div style={{ padding: "35px" }}></div>
        <div className="main">
          {this.state.link.map((link) => (
            <ReadLink link={link} key={link.id} deleteLink={this.deleteLink} />
          ))}
        </div>
      </div>
    )
  }
}

export default Read;
