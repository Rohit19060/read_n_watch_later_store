import React, { Component } from "react";

class ReadLink extends Component {
  state = {
    link: this.props.link,
  };

  render() {
    return (
      <div className="read_link">
        <button onClick={this.props.deleteLink.bind(this, this.props.link.id)}>Delete</button>
        <a href={this.state.link.link} target="_blank" rel="noopener noreferrer">
          <h3>{this.state.link.id + 1}</h3>
          <h3>
            {this.state.link.link}
          </h3>
        </a>
      </div>
    );
  }
}

export default ReadLink;
