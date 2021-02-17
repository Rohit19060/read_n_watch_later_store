import React, { Component } from "react";

class ReadLink extends Component {
  state = {
    link: this.props.link.link,
  };

  render() {
    return (
      <div className="read_link">
        <button onClick={this.props.deleteLink.bind(this, this.props.link.id)}>Delete</button>
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">{this.state.link}</a>
      </div>
    );
  }
}

export default ReadLink;
